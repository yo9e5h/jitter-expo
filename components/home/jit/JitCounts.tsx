import { View } from "react-native";
import CommentButton from "../../buttons/CommentButton";
import LikeButton from "../../buttons/LikeButton";
import ShareButton from "../../buttons/ShareButton";

const JitCounts = ({
  id,
  username,
  name,
  body,
  likes_count,
  comments_count,
  iconSize,
  fontSize,
  width,
}: {
  id: number;
  likes_count: number;
  comments_count: number;
  iconSize: number;
  fontSize: number;
  username: string;
  name: string;
  body: string;
  width?: string;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 16,
        width: width,
      }}
    >
      <CommentButton
        id={id}
        name={name}
        username={username}
        body={body}
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
