import { useNavigation } from "@react-navigation/native";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import SendHeader from "../../components/home/header/SendHeader";
import ProfileLabel from "../../components/home/profile/ProfileLabel";
import SendInput from "../../components/send/SendInput";
import useCommentStore from "../../store/CommentStore";
import useJitStore from "../../store/JitStore";
import useSendCommentStore from "../../store/SendCommentStore";

const SendCommentModal = ({ route }: any) => {
  const params = route.params;
  console.log(params);

  const navigation = useNavigation();
  const draftComment = useSendCommentStore((state) => state.draftComment);
  const sendComment = useSendCommentStore((state) => state.sendComment);
  const fetchJits = useJitStore((state) => state.fetchJits);

  const handleSendComment = () => {
    sendComment(params.jitId, draftComment);
    fetchJits();
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <SendHeader
        onPressCancel={() => navigation.goBack()}
        disabled={!draftComment}
        onPressSubmit={handleSendComment}
      />

      <ProfileLabel username={params.jitUsername} />

      <SendInput
        placeholder="Write your reply"
        value={draftComment}
        onChangeText={(text) =>
          useSendCommentStore.setState({ draftComment: text })
        }
      />
    </SafeAreaView>
  );
};

export default SendCommentModal;
