import { Text, View } from "react-native";

const JitBody = ({ body }: { body: string }) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}
    >
      <Text>{body}</Text>
    </View>
  );
};

export default JitBody;
