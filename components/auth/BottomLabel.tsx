import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function BottomLabel({
  onPress,
  linkText,
  link,
}: {
  onPress: () => void;
  linkText?: string;
  link: string;
}) {
  return (
    <View style={styles.register}>
      <Text style={styles.registerText}>{linkText} </Text>
      <Pressable onPress={onPress}>
        <Text style={styles.registerTextLink}>{link}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  register: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  registerText: {
    fontSize: 14,
    color: "#000",
  },
  registerTextLink: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
});
