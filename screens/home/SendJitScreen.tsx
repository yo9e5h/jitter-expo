import { Text, View } from "react-native";
import SendInput from "../../components/send/SendInput";

const SendJitScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <SendInput />
    </View>
  );
};

export default SendJitScreen;
