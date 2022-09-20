import { Controller, useForm } from "react-hook-form";
import { Text, SafeAreaView } from "react-native";
import AuthButton from "../../components/auth/AuthButton";
import AuthInput from "../../components/auth/AuthInput";

export default function ModalScreen() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
      reset();
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        margin: 20,
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
            iconName="ios-at-outline"
            iconColor="#000"
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

      {errors.email && <Text>Email is required</Text>}

      <AuthButton
        onPress={handleSubmit(onSubmit)}
        color="#000"
        text="Reset Password"
      />
    </SafeAreaView>
  );
}
