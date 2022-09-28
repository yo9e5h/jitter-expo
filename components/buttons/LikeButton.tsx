import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import useLikeStore from "../../store/LikeStore";
import Icon from "../Icon";

const LikeButton = ({
  id,
  count,
  iconSize,
  fontSize,
}: {
  id: number;
  count: number;
  iconSize: number;
  fontSize: number;
}) => {
  const like = useLikeStore((state) => state.likeJit);
  const unlike = useLikeStore((state) => state.unLikeJit);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(count);

  const toggleLike = async (id: number) => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      await like(id);
    } else {
      setLikeCount(likeCount - 1);
      await unlike(id);
    }
    setLiked(!liked);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: 36,
      }}
    >
      <Pressable onPress={() => toggleLike(id)}>
        <Icon
          name={liked ? "ios-heart" : "ios-heart-outline"}
          color={liked ? "#000" : "#6B7280"}
          size={iconSize}
          style={{ marginRight: 8 }}
        />
      </Pressable>
      <Text
        style={{
          fontSize: fontSize,
          color: "#6B7280",
        }}
      >
        {likeCount}
      </Text>
    </View>
  );
};

export default LikeButton;
