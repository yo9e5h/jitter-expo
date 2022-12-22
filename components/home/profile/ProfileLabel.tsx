import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ProfileLabel = ({ username }: { username: string }) => {
  const navigation = useNavigation();

  // const goToProfile = () => {
  //   navigation.navigate("ProfileScreen", {
  //     username: username,
  //   });
  // };

  return (
    <View
      style={{
        marginHorizontal: 18,
        marginTop: 8,
        flexDirection: "row",
      }}
    >
      <Text>replying to</Text>
      <Text
        style={{
          fontWeight: "500",
          marginLeft: 4,
          color: "#1A202C",
        }}
      >
        @{username}
      </Text>
    </View>
  );
};

export default ProfileLabel;
