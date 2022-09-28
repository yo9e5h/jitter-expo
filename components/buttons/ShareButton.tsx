import { Pressable, View } from "react-native";
import Icon from "../Icon";

const ShareButton = ({ id, iconSize }: { id: number; iconSize: number }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: 36,
      }}
    >
      <Pressable onPress={() => console.log("Share", id)}>
        <Icon name="ios-share-outline" size={iconSize} color="#6B7280" />
      </Pressable>
    </View>
  );
};

export default ShareButton;
