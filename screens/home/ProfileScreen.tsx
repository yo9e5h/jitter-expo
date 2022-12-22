import { Button, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import useUserStore from "../../store/UserStore";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = ({ route }: any) => {
  const navigation = useNavigation();
  const params = route.params;
  console.log(params);
  const clear = useUserStore((state) => state.clearUser);

  const handleNav = () => {
    clear();
    navigation.navigate("Login");
  };

  return (
    <View>
      <Button onPress={() => handleNav()} title="Clear" />
    </View>
  );
};

export default ProfileScreen;
