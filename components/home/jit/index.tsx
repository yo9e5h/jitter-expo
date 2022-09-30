import { Text } from "react-native";

const Jit = ({ body, size }: { body: string; size: number }) => {
  return (
    <Text
      style={{
        fontSize: size,
        fontWeight: "400",
        color: "#333",
        marginHorizontal: 16,
        marginBottom: 16,
      }}
    >
      {body}
    </Text>
  );
};

export default Jit;
