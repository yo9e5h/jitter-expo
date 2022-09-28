import { StyleSheet, View } from "react-native";
import JitCounts from "../../components/home/JitCounts";
import ProfileLink from "../../components/home/ProfileLink";
import Jit from "../../components/jit";

const SingleJitScreen = ({ route }: any) => {
  const params = route.params;

  return (
    <View style={styles.container}>
      <View>
        <ProfileLink
          username={params.jitUsername}
          name={params.jitName}
          size={40}
          usernameLabelFontSize={20}
          nameLabelFontSize={20}
        />
      </View>
      <View>
        <Jit body={params.jitBody} size={24} />
      </View>
      <JitCounts
        id={params.jitId}
        likes_count={params.jitLikeCount}
        comments_count={params.jitCommentCount}
        fontSize={18}
        iconSize={22}
      />
    </View>
  );
};

export default SingleJitScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
});
