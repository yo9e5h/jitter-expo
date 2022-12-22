import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Pressable, StyleSheet, Text } from "react-native";
import HomeScreen from "../../screens/home/HomeScreen";
import ProfileScreen from "../../screens/home/ProfileScreen";
import SendJitScreen from "../../screens/home/SendJitScreen";
import SingleJitScreen from "../../screens/home/SingleJitScreen";
import useCommentStore from "../../store/CommentStore";
import useSendJitStore from "../../store/SendJitStore";
import useJitStore from "../../store/JitStore";
import { RootStackParamList } from "../../types";
import useLikeStore from "../../store/LikeStore";
import SendCommentModal from "../../screens/home/SendCommentModal";
import useSendCommentStore from "../../store/SendCommentStore";
import BackButton from "./BackButton";

const JitStack = createNativeStackNavigator<RootStackParamList>();

function JitNavigator() {
  const clearLikes = useLikeStore((state) => state.clearLikes);
  const clearJits = useJitStore((state) => state.clearJits);
  const clearComments = useCommentStore((state) => state.clearComments);

  const clear = () => {
    clearLikes();
    clearJits();
    clearComments();
  };

  return (
    <JitStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: "#000",
        headerBackTitleVisible: false,
      }}
    >
      <JitStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
          // headerRight: () => <Button title="Clear" onPress={clear} />,
        }}
      />
      <JitStack.Screen
        name="SingleJitScreen"
        component={SingleJitScreen}
        options={({ route }: any) => ({
          title: `${route.params.user.name}'s Tweet`,
        })}
      />
      <JitStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ route }: any) => ({
          title: `${route.params.name}`,
        })}
      />
      <JitStack.Screen
        name="SendJitScreen"
        component={SendJitScreen}
        options={{
          presentation: "fullScreenModal",
          headerShown: false,
        }}
      />
      <JitStack.Screen
        name="SendCommentModal"
        component={SendCommentModal}
        options={() => ({
          presentation: "fullScreenModal",
          headerShown: false,
        })}
      />
    </JitStack.Navigator>
  );
}

export default JitNavigator;
