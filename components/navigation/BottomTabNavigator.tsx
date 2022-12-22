import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../../screens/auth/AccountScreen";
import ProfileScreen from "../../screens/home/ProfileScreen";
import { RootTabParamList, RootTabScreenProps } from "../../types";
import Icon from "../Icon";
import JitNavigator from "./JitNavigator";

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
            <Icon
              name={focused ? "ios-home" : "ios-home-outline"}
              color={focused ? "#000" : color}
              size={24}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "person" : "person-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
