import { Text, View } from "react-native";

const SingleJitScreen = ({ route }: any) => {
  const params = route.params;
  return (
    <View>
      <Text>{params.username}</Text>
    </View>
  );
};

export default SingleJitScreen;
