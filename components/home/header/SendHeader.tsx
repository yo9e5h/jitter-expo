import { Pressable, StyleSheet, Text, View } from "react-native";

const SendHeader = ({
  onPressCancel,
  disabled,
  onPressSubmit,
}: {
  onPressCancel: () => void;
  disabled: boolean;
  onPressSubmit: () => void;
}) => {
  return (
    <View style={sendHeaderstyles.headerContainer}>
      <Pressable
        onPress={onPressCancel}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
          flexDirection: "row",
          alignItems: "center",
        })}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 16,
          }}
        >
          Cancel
        </Text>
      </Pressable>
      <Pressable
        disabled={disabled}
        onPress={onPressSubmit}
        style={
          !disabled
            ? sendHeaderstyles.sendButton
            : sendHeaderstyles.disabledSendButton
        }
      >
        <Text style={sendHeaderstyles.sendButtonText}>Send</Text>
      </Pressable>
    </View>
  );
};

export default SendHeader;

export const sendHeaderstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  sendButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 16,
  },
  disabledSendButton: {
    opacity: 0.15,
    backgroundColor: "#000",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    padding: 8,
    paddingHorizontal: 16,
  },
});
