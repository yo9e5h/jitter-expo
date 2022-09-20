import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable, Text } from "react-native";
import ModalScreen from "../screens/home/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/home/HomeScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import SingleJitScreen from "../screens/home/SingleJitScreen";
import ProfileScreen from "../screens/home/ProfileScreen";
import AccountScreen from "../screens/auth/AccountScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            headerShown: true,
            presentation: "modal",
            headerTitle: "Forgot Password",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  flexDirection: "row",
                  alignItems: "center",
                })}
              >
                <Ionicons name="ios-close-outline" size={32} />
              </Pressable>
            ),
          }}
        />
      </Stack.Group>

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{
            headerShown: true,
            headerTitle: "Modal",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  flexDirection: "row",
                  alignItems: "center",
                })}
              >
                <Text style={{ color: "red", fontSize: 16 }}>Close</Text>
                <Ionicons name="ios-close" size={24} style={{ color: "red" }} />
              </Pressable>
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#000",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={JitNavigator}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "ios-home" : "ios-home-outline"}
              color={focused ? "#000" : color}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const JitStack = createNativeStackNavigator<RootStackParamList>();

function JitNavigator() {
  return (
    <JitStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <JitStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
          headerTransparent: true,
          headerBlurEffect: "light",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerShadowVisible: false,
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
    </JitStack.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}
