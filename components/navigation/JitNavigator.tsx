import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Pressable, StyleSheet, Text } from "react-native";
import HomeScreen from "../../screens/home/HomeScreen";
import ProfileScreen from "../../screens/home/ProfileScreen";
import SendJitScreen from "../../screens/home/SendJitScreen";
import SingleJitScreen from "../../screens/home/SingleJitScreen";
import useJitStore from "../../store/JitStore";
import useSendJitStore from "../../store/SendJitStore";
import { RootStackParamList } from "../../types";

const JitStack = createNativeStackNavigator<RootStackParamList>();

function JitNavigator() {
  const clear = useJitStore((state) => state.clearJits);
  const sendJit = useSendJitStore((state) => state.sendJit);
  const draftJit = useSendJitStore((state) => state.draftJit);
  const navigation = useNavigation();

  const handleSendJit = () => {
    sendJit(draftJit);
    navigation.goBack();
  };

  return (
    <JitStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: "#000",
      }}
    >
      <JitStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
          headerRight: () => <Button title="Clear" onPress={clear} />,
        }}
      />
      <JitStack.Screen
        name="SingleJitScreen"
        component={SingleJitScreen}
        options={{
          headerTitle: "Jit",
        }}
      />
      <JitStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ route }: any) => ({ title: route.params.username })}
      />
      <JitStack.Screen
        name="SendJitScreen"
        component={SendJitScreen}
        options={{
          headerTitle: "",
          headerTintColor: "#fff",
          presentation: "fullScreenModal",
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
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
          ),
          headerRight: () => (
            <Pressable
              disabled={!draftJit}
              onPress={handleSendJit}
              style={draftJit ? styles.sendButton : styles.disabledSendButton}
            >
              <Text style={styles.sendButtonText}>Send</Text>
            </Pressable>
          ),
        }}
      />
    </JitStack.Navigator>
  );
}

export default JitNavigator;

const styles = StyleSheet.create({
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
