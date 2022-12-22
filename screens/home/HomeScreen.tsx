import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import JitList from "../../components/home/jit/JitList";
import useJitStore from "../../store/JitStore";

export default function HomeScreen() {
  const fetchJits = useJitStore((state) => state.fetchJits);

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
