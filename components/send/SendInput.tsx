import { StyleSheet, TextInput, View } from "react-native";
import useSendJitStore from "../../store/SendJitStore";

const SendInput = () => {
  const draftJit = useSendJitStore((state) => state.draftJit);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          placeholder="What's on your mind?"
          placeholderTextColor="#A0AEC0"
          maxLength={280}
          value={draftJit}
          selectionColor="#1f2937"
          onChangeText={(text) => useSendJitStore.setState({ draftJit: text })}
        />
      </View>
    </View>
  );
};

export default SendInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flex: 1,
    marginRight: 16,
  },
  input: {
    fontSize: 20,
    color: "#000",
  },
});
