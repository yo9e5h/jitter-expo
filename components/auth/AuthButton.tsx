import React from "react";
import { Pressable, Text } from "react-native";

export default function AuthButton({
  onPress,
  text,
  style,
  color,
}: {
  onPress: () => void;
  text?: string;
  style?: any;
  color?: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: color,
          padding: 16,
          borderRadius: 2,
          marginTop: 12,
        },

        pressed && {
          opacity: 0.5,
        },

        style,
      ]}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: "#fff",
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
}
