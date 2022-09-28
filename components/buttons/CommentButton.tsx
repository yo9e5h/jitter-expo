import { Text, View } from "react-native";
import Icon from "../Icon";

const CommentButton = ({
  count,
  iconSize,
  fontSize,
}: {
  count: number;
  iconSize: number;
  fontSize: number;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: 36,
      }}
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
    </View>
  );
};

export default CommentButton;
