import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ProfileLink = ({
  username,
  name,
  nameLabelFontSize,
  usernameLabelFontSize,
  size,
}: {
  username: string;
  name: string;
  nameLabelFontSize: number;
  usernameLabelFontSize: number;
  size: number;
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
          width: size,
          height: size,
          borderRadius: 24,
          marginRight: 8,
        }}
      />
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontWeight: "500",
            fontSize: nameLabelFontSize,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: "#666",
            fontSize: usernameLabelFontSize,
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
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
});
