import { Ionicons } from "@expo/vector-icons";

function Icon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color?: string;
  size?: number;
  style?: any;
}) {
  return <Ionicons {...props} />;
}

export default Icon;
