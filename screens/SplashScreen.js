// SplashScreen.js
import React, { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";
import LottieView from "lottie-react-native";

const SplashScreen = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/lines-police-cad-discord-logo-2024.png")}
        style={[styles.logo, { opacity }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
