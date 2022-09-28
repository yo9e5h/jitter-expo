import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import Icon from "../Icon";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Icon name="ios-chevron-back-outline" color="#000" size={24} />
      <Text
        style={{
          color: "#000",
          fontSize: 16,
        }}
      >
        Back
      </Text>
    </Pressable>
  );
};

export default BackButton;
