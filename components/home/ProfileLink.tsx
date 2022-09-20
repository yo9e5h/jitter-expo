import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ProfileLink = ({
  username,
  name,
}: {
  username: string;
  name: string;
}) => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate("ProfileScreen", {
      username: username,
    });
  };

  return (
    <Pressable onPress={goToProfile} style={styles.container}>
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{
          width: 32,
          height: 32,
          borderRadius: 24,
          margin: 8,
        }}
      />
      <View>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: "#666",
          }}
        >
          @{username}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProfileLink;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
    padding: 8,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
