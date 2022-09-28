import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  ViewStyle,
  View,
} from "react-native";
import Icon from "../Icon";

const AuthInput = ({
  iconName,
  iconColor,
  onBlur,
  onChangeText,
  value,
  placeholder,
  keyboardType,
  textContentType,
  style,
  children,
  secureTextEntry,
  marginVertical,
}: {
  iconName: any;
  iconColor: string;
  onBlur:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onChangeText: (text: string) => void;
  value: string | undefined;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  textContentType?: TextInputProps["textContentType"];
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  secureTextEntry?: boolean;
  marginVertical?: number;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 16,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#000",
        marginVertical: marginVertical || 8,
      }}
    >
      <Icon
        name={iconName}
        color={iconColor}
        style={{
          marginRight: 10,
        }}
        size={20}
      />
      <TextInput
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        spellCheck={false}
        textContentType={textContentType}
        placeholderTextColor={"#2c3e50"}
        style={[
          {
            flex: 1,
            fontSize: 16,
          },
          style,
        ]}
      />
      {children}
    </View>
  );
};

export default AuthInput;
