import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import JitList from "../../components/home/jit/JitList";
import useCommentStore from "../../store/CommentStore";
import useJitStore from "../../store/JitStore";
import useLikeStore from "../../store/LikeStore";

export default function HomeScreen() {
  const fetchJits = useJitStore((state) => state.fetchJits);
  const clearComments = useCommentStore((state) => state.clearComments);
  const likes = useLikeStore((state) => state.likes);

  useEffect(() => {
    fetchJits();
  }, []);

  return (
    <View style={styles.container}>
      <JitList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
