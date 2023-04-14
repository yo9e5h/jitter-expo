import React from "react";
import { Pressable, SafeAreaView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AuthService from "../../services/AuthService";
import { LoginFormData } from "../../types";
import useUserStore from "../../store/UserStore";
import AuthButton from "../../components/auth/AuthButton";
import BottomLabel from "../../components/auth/BottomLabel";
import AuthInput from "../../components/auth/AuthInput";
import ForgotPasswordLabel from "../../components/auth/ForgotPasswordLabel";
import Icon from "../../components/Icon";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [passwordVisibility, setPasswordVisibility] = React.useState(true);
  const setToken = useUserStore((state) => state.setToken);
  const setUser = useUserStore((state) => state.setUser);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const user = await AuthService.login(data);
      console.log(user);
      setUser(user);
      setToken(user.token);
      reset();
      navigation.navigate("Root");
    } catch (error: any) {
      // error.forEach((error: any) => {
      //   // WIP - Need to figure out how to set error for specific field
      // });
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        width: "100%",
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
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
            iconColor="#000"
            placeholder="Enter your Email"
            keyboardType="default"
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
                  color="#000"
                  size={20}
                />
              </Pressable>
            }
          />
        )}
        name="password"
      />

      <ForgotPasswordLabel />

      <AuthButton onPress={handleSubmit(onSubmit)} color="#000" text="Log In" />

      <BottomLabel
        linkText="Don't have an account?"
        link="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </SafeAreaView>
  );
}
