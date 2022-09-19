import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AuthService from "../../services/AuthService";
import { LoginFormData } from "../../types";
import Button from "../../components/auth/AuthButton";
import BottomLabel from "../../components/auth/BottomLabel";
import AuthInput from "../../components/auth/AuthInput";
import ForgotPasswordLabel from "../../components/auth/ForgotPasswordLabel";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [passwordVisibility, setPasswordVisibility] = React.useState(true);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await AuthService.login(data);
      console.log(response);
    } catch (error: any) {
      error.forEach((error: any) => {
        console.log(error.message);
      });
    }
    reset();
  };

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        width: "100%",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            iconName="ios-person-outline"
            iconColor="#2c3e50"
            placeholder="Enter Your Username"
            keyboardType="default"
            textContentType="username"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="username"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            iconName="ios-at-outline"
            iconColor="#2c3e50"
            placeholder="Enter Your Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            iconName="ios-lock-closed-outline"
            iconColor="#2c3e50"
            placeholder="Enter Your Password"
            keyboardType="default"
            textContentType="password"
            secureTextEntry={passwordVisibility}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            children={
              <Pressable
                onPress={() => setPasswordVisibility(!passwordVisibility)}
              >
                <Icon
                  name={
                    passwordVisibility
                      ? "ios-eye-outline"
                      : "ios-eye-off-outline"
                  }
                  color="#2c3e50"
                />
              </Pressable>
            }
          />
        )}
        name="password"
      />

      <ForgotPasswordLabel />

      <Button onPress={handleSubmit(onSubmit)} color="#000" text="Register" />

      <BottomLabel
        linkText="Already have an account ?"
        link="Login"
        onPress={() => navigation.navigate("Login")}
      />
    </SafeAreaView>
  );
}

function Icon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  style?: any;
}) {
  return <Ionicons size={20} {...props} />;
}
