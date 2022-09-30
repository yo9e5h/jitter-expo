import { View } from "react-native";
import { CommentModel } from "../../../types";
import ProfileLink from "../profile/ProfileLink";
import Comment from "./Comment";

const CommentListItem = (comment: CommentModel) => {
  return (
    <View>
      <ProfileLink
        name={comment.user.name}
        username={comment.user.username}
        size={36}
        usernameLabelFontSize={18}
        nameLabelFontSize={18}
      />
      <Comment body={comment.body} size={18} />
    </View>
  );
};

export default CommentListItem;
