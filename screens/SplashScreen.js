import { View, Text, ActivityIndicator } from "react-native";

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Getting token...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default SplashScreen;
