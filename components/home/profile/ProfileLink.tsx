import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { User } from "../../../types";

const ProfileLink = ({
  user,
  nameLabelFontSize,
  usernameLabelFontSize,
  size,
}: {
  user: User;
  nameLabelFontSize?: number;
  usernameLabelFontSize?: number;
  size?: number;
}) => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate("ProfileScreen", {
      username: user.username,
      name: user.name,
      avatar_url: user.avatar_url,
      desc: user.desc,
      url: user.url,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
      id: user.id,
    });
  };

  return (
    <Pressable onPress={goToProfile} style={styles.container}>
      <Image
        source={{
          uri: user.avatar_url,
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
          {user.name}
        </Text>
        <Text
          style={{
            color: "#666",
            paddingTop: 4,
            fontSize: usernameLabelFontSize,
          }}
        >
          @{user.username}
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
