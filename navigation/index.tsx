import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable, Text } from "react-native";
import ModalScreen from "../screens/home/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import Icon from "../components/Icon";
import BottomTabNavigator from "../components/navigation/BottomTabNavigator";

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
                <Icon name="ios-close-outline" size={32} />
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
                <Icon name="ios-close" size={24} style={{ color: "red" }} />
              </Pressable>
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
