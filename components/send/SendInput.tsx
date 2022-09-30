import { StyleSheet, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";

const SendInput = ({
  placeholder,
  value,
  onChangeText,
}: {
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      value: "",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#A0AEC0"
          maxLength={280}
          value={value}
          selectionColor="#1f2937"
          onChangeText={onChangeText}
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
