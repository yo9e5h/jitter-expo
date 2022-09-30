import { View } from "react-native";
import SendInput from "../../components/send/SendInput";
import useSendJitStore from "../../store/SendJitStore";

const SendJitScreen = () => {
  const draftJit = useSendJitStore((state) => state.draftJit);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <SendInput
        placeholder="What's happening?"
        value={draftJit}
        onChangeText={(value) => useSendJitStore.setState({ draftJit: value })}
      />
    </View>
  );
};

export default SendJitScreen;
