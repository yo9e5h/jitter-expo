import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import { JitModel } from "../../types";
import Icon from "../Icon";

const CommentButton = ({
  id,
  count,
  iconSize,
  fontSize,
  username,
  name,
  body,
}: {
  id: number;
  count: number;
  iconSize: number;
  fontSize: number;
  username: string;
  name: string;
  body: string;
}) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("SendCommentModal", {
      jitId: id,
      jitUsername: username,
      jitName: name,
      jitBody: body,
    });
  };

  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: 36,
      }}
      onPress={handleNavigation}
    >
      <Icon
        name="ios-chatbubble-outline"
        color="#6B7280"
        size={iconSize}
        style={{ marginRight: 8 }}
      ></Icon>
      <Text
        style={{
          fontSize: fontSize,
          color: "#6B7280",
        }}
      >
        {count}
      </Text>
    </Pressable>
  );
};

export default CommentButton;
