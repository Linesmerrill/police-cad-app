import { StyleSheet, View, Text, Image } from "react-native";

function SignInPage() {
  return (
    <View style={styles.signInContainer}>
      {/* icon & logo */}
      <View>
        <Image
          style={styles.image}
          source={require("../assets/images/logo.png")}
        />
        <Text>LinesPoliceCAD</Text>
      </View>
    </View>
  );
}

export default SignInPage;

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  titleContainer: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
  },
});
