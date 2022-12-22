import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { JitModel } from "../../../types";
import Jit from ".";
import JitCounts from "./JitCounts";
import ProfileLink from "../profile/ProfileLink";
import useCommentStore from "../../../store/CommentStore";

const JitListItem = (jit: JitModel) => {
  const fetchComments = useCommentStore((state) => state.fetchComments);

  const navigation = useNavigation();
  const {
    id,
    body,
    created_at,
    updated_at,
    user,
    likes_count,
    comments_count,
  } = jit;

  const goToSingleJit = () => {
    navigation.navigate("SingleJitScreen", {
      jitId: id,
      jitBody: body,
      jitLikeCount: likes_count,
      jitCommentCount: comments_count,
      user: user,
      jitUpdatedAt: updated_at,
      jitCreatedAt: created_at,
    });
    fetchComments(id);
  };

  return (
    <Pressable onPress={goToSingleJit}>
      <ProfileLink
        user={user}
        size={40}
        usernameLabelFontSize={16}
        nameLabelFontSize={18}
      />
      <Jit body={body} size={18} />
      <JitCounts
        name={user.name}
        username={user.username}
        body={body}
        id={id}
        likes_count={likes_count}
        comments_count={comments_count}
        iconSize={20}
        fontSize={16}
        width="50%"
      />
    </Pressable>
  );
};

export default JitListItem;
