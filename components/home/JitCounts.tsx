import { View } from "react-native";
import CommentButton from "../buttons/CommentButton";
import LikeButton from "../buttons/LikeButton";
import ShareButton from "../buttons/ShareButton";

const JitCounts = ({
  id,
  likes_count,
  comments_count,
  iconSize,
  fontSize,
}: {
  id: number;
  likes_count: number;
  comments_count: number;
  iconSize: number;
  fontSize: number;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: 16,
        marginBottom: 8,
      }}
    >
      <CommentButton
        count={comments_count}
        iconSize={iconSize}
        fontSize={fontSize}
      />
      <LikeButton
        id={id}
        count={likes_count}
        iconSize={iconSize}
        fontSize={fontSize}
      />
      <ShareButton id={id} iconSize={iconSize} />
    </View>
  );
};

export default JitCounts;
