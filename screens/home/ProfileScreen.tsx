import { Text, View } from "react-native";

const ProfileScreen = ({ route }: any) => {
  const params = route.params;
  return (
    <View>
      <Text>{params.username}</Text>
    </View>
  );
};

export default ProfileScreen;
