import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text } from "react-native";

const ForgotPasswordLabel = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
      <Text style={styles.forgotPassword}>Forgot Password ?</Text>
    </Pressable>
  );
};

export default ForgotPasswordLabel;

const styles = StyleSheet.create({
  forgotPassword: {
    fontSize: 14,
    color: "#000",
    textAlign: "right",
  },
});
