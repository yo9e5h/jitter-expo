import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import ProfileLabel from "../../components/home/profile/ProfileLabel";
import ProfileLink from "../../components/home/profile/ProfileLink";
import SendInput from "../../components/send/SendInput";
import useSendCommentStore from "../../store/SendCommentStore";

const SendCommentModal = ({ route }: any) => {
  const params = route.params;
  console.log(params);

  const draftComment = useSendCommentStore((state) => state.draftComment);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      {/* <ProfileLink
        username={params.jitUsername}
        name={params.jitName}
        nameLabelFontSize={20}
        usernameLabelFontSize={16}
        size={40}
      /> */}

      <ProfileLabel username={params.jitUsername} />

      <SendInput
        placeholder="Write your reply"
        value={draftComment}
        onChangeText={(text) =>
          useSendCommentStore.setState({ draftComment: text })
        }
      />
    </View>
  );
};

export default SendCommentModal;
