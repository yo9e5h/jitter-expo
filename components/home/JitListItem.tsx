import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { JitModel } from "../../types";
import Jit from "../jit";
import JitCounts from "./JitCounts";
import ProfileLink from "./ProfileLink";

const JitListItem = (jit: JitModel) => {
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
      jitUsername: user.username,
      jitName: user.name,
      jitUpdatedAt: updated_at,
      jitCreatedAt: created_at,
    });
  };

  return (
    <Pressable onPress={goToSingleJit}>
      <ProfileLink
        name={jit.user.name}
        username={jit.user.username}
        size={36}
        usernameLabelFontSize={18}
        nameLabelFontSize={18}
      />
      <Jit body={jit.body} size={18} />
      <JitCounts
        likes_count={jit.likes_count}
        comments_count={jit.comments_count}
        id={jit.id}
        iconSize={20}
        fontSize={16}
      />
    </Pressable>
  );
};

export default JitListItem;
