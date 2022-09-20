import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import { Jit } from "../../types";
import JitBody from "./JitBody";
import ProfileLink from "./ProfileLink";

const JitListItem = (jit: Jit) => {
  const navigation = useNavigation();

  const goToSingleJit = () => {
    navigation.navigate("SingleJitScreen", {
      jitId: jit.id,
      jitBody: jit.body,
      jitUsername: jit.username,
      jitName: jit.name,
      jitUpdatedAt: jit.updated_at,
      jitCreatedAt: jit.created_at,
    });
  };

  return (
    <Pressable onPress={goToSingleJit}>
      <ProfileLink name={jit.name} username={jit.username} />
      <JitBody body={jit.body} />
    </Pressable>
  );
};

export default JitListItem;
