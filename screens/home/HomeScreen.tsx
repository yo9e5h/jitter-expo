import { StyleSheet, View } from "react-native";
import JitList from "../../components/home/JitList";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <JitList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",
  },
});
