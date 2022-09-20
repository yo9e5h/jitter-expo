import { Text, View } from "react-native";
import ProfileLink from "../../components/home/ProfileLink";

const SingleJitScreen = ({ route }: any) => {
  const params = route.params;
  return (
    <View>
      <Text>{params.jitId}</Text>
      <Text>{params.jitUsername}</Text>
      <Text>{params.jitName}</Text>
      <Text>{params.jitBody}</Text>
      <Text>{params.jitCreatedAt}</Text>
      <Text>{params.jitUpdatedAt}</Text>
    </View>
  );
};

export default SingleJitScreen;
