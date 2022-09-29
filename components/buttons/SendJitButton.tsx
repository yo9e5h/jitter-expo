import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import Icon from "../Icon";

const SendJitButton = () => {
  const navigation = useNavigation();

  const gotoSendJitScreen = () => {
    navigation.navigate("SendJitScreen");
  };

  return (
    <Pressable
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={gotoSendJitScreen}
    >
      <Icon name="ios-add" color="#fff" size={36} />
    </Pressable>
  );
};

export default SendJitButton;
