import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import SendHeader from "../../components/home/header/SendHeader";
import SendInput from "../../components/send/SendInput";
import useJitStore from "../../store/JitStore";
import useSendJitStore from "../../store/SendJitStore";

const SendJitScreen = () => {
  const navigation = useNavigation();
  const draftJit = useSendJitStore((state) => state.draftJit);
  const fetchJits = useJitStore((state) => state.fetchJits);
  const sendJit = useSendJitStore((state) => state.sendJit);

  const handleSendJit = () => {
    sendJit(draftJit);
    fetchJits();
    navigation.goBack();
  };

  const cancel = () => {
    useSendJitStore.setState({ draftJit: "" });
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
        onPressCancel={cancel}
        disabled={!draftJit}
        onPressSubmit={handleSendJit}
      />

      <SendInput
        placeholder="What's happening?"
        value={draftJit}
        onChangeText={(value) => useSendJitStore.setState({ draftJit: value })}
      />
    </SafeAreaView>
  );
};

export default SendJitScreen;
