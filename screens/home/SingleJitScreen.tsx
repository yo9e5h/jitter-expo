import { ScrollView, StyleSheet, Text, View } from "react-native";
import JitCounts from "../../components/home/jit/JitCounts";
import ProfileLink from "../../components/home/profile/ProfileLink";
import Jit from "../../components/home/jit";
import CommentsList from "../../components/home/comment/CommentsList";

const SingleJitScreen = ({ route }: any) => {
  const params = route.params;

  const time = new Date(params.jitCreatedAt).toLocaleTimeString(undefined, {
    timeStyle: "short",
    hourCycle: "h24",
    numberingSystem: "latn",
  });

  const date = new Date(params.jitCreatedAt).toLocaleString(undefined, {
    dateStyle: "short",
  });

  return (
    <ScrollView style={styles.container}>
      <ProfileLink
        user={params.user}
        size={40}
        usernameLabelFontSize={16}
        nameLabelFontSize={20}
      />
      <Jit body={params.jitBody} size={24} />
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: "#333",
            marginHorizontal: 16,
            marginBottom: 16,
          }}
        >
          {time} - {date}
        </Text>
      </View>
      <View
        style={{
          borderTopColor: "#f3f4f6",
          borderTopWidth: 1,
          paddingTop: 16,
          borderBottomColor: "#f3f4f6",
          borderBottomWidth: 1,
        }}
      >
        <JitCounts
          id={params.jitId}
          likes_count={params.jitLikeCount}
          comments_count={params.jitCommentCount}
          fontSize={18}
          iconSize={22}
          username={params.jitUsername}
          name={params.jitName}
          body={params.jitBody}
          // width={100}
        />
      </View>

      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            paddingVertical: 16,
            paddingHorizontal: 16,
          }}
        >
          No Comments yet
        </Text>
        <CommentsList />
      </View>
    </ScrollView>
  );
};

export default SingleJitScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
});
