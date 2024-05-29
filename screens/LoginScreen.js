import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
  Animated,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeftCircleIcon,
  BackwardIcon,
  BookOpenIcon,
  GlobeAltIcon,
  XCircleIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";
import {
  PhoneIcon,
  PhoneXMarkIcon,
  RocketLaunchIcon,
} from "react-native-heroicons/outline";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Video, AVPlaybackStatus } from "expo-av";
import { useLayoutEffect } from "react";
const { width, height } = Dimensions.get("window");
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const navigation = useNavigation();
  const opacity = useMemo(() => new Animated.Value(0), []);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.REACT_NATIVE_GOOGLE_ANDROID_CLIENT_ID,
    iosClientId: process.env.REACT_NATIVE_GOOGLE_IOS_CLIENT_ID,
    expoClientId: process.env.REACT_NATIVE_EXPO_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
      navigation.navigate("HomeScreen");
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.background}>
          <Animated.View
            style={[styles.backgroundViewWrapper, { opacity: opacity }]}
          >
            <Video
              // isLooping
              isMuted
              positionMillis={500}
              onLoad={() => {
                Animated.timing(opacity, {
                  toValue: 1,
                  useNativeDriver: true,
                }).start();
              }}
              resizeMode="cover"
              // shouldPlay
              source={require("../assets/royal-blue-bg-750.png")}
              style={{ flex: 1 }}
            />
          </Animated.View>
          <SafeAreaView className="h-full space-x-1" style={styles.overlay}>
            <View className="flex-row ml-2">
              <TouchableOpacity
                className="shadow-sm"
                onPress={() => navigation.navigate("Welcome")}
              >
                <ArrowLeftCircleIcon
                  className="flex-1"
                  color="white"
                  size={40}
                />
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center">
              <Image
                className="w-20 h-20"
                source={require("../assets/lines-police-cad-discord-logo-2024.png")}
              />
            </View>

            <View className="mt-4 flex-col p-4">
              <View className="flex-row justify-center">
                <Text className="text-3xl text-white">Welcome back.</Text>
              </View>
              <View className="flex-row justify-center">
                <Text className="text-3xl text-white">
                  Log in and start roleplaying.
                </Text>
              </View>
            </View>

            <View className="mt-1">
              <View className="flex-col space-x-1 pb-4">
                <View className="flex-row">
                  <View className="flex-1 mx-5 mr-4 mt-6">
                    <View className="bg-black p-4 rounded-lg border-solid border-2 border-gray-400">
                      <TextInput
                        placeholder="Email address"
                        placeholderTextColor={"gray"}
                        keyboardType="email-address"
                        cursorColor={"white"}
                        autoComplete="email"
                        color={"white"}
                        clearButtonMode="always"
                        focusable
                      />
                    </View>
                  </View>
                </View>
                <View className="flex-row">
                  <View className="flex-1 mx-4 mt-4">
                    <View className="bg-black p-4 rounded-lg border-solid border-2 border-gray-400">
                      <TextInput
                        placeholder="Password"
                        placeholderTextColor={"gray"}
                        keyboardType="visible-password"
                        cursorColor={"white"}
                        autoComplete="password"
                        color={"white"}
                        clearButtonMode="always"
                        secureTextEntry
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="flex-row">
                <TouchableOpacity
                  className="mx-5 bg-white p-4 mb-4 mr-4 rounded-full flex-1 items-center space-x-1"
                  onPress={() => navigation.navigate("HomeScreen")}
                >
                  <View className="flex-row">
                    <Text className=" text-black font-bold text-md text-center">
                      Log in
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-center mb-4">
                <Text className="text-white text-sm">
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      fontWeight: "bold",
                    }}
                    onPress={() => navigation.navigate("ForgotPassword")}
                  >
                    Forgot your password?
                  </Text>
                </Text>
              </View>
            </View>

            <View className="mt-1">
              <View className="flex-row">
                <TouchableOpacity
                  className="mx-5 bg-[#007aff] p-4 mb-4 mr-5 rounded-full flex-1 items-center space-x-1"
                  disabled={!request}
                  onPress={() => {
                    promptAsync();
                  }}
                >
                  <View className="flex-row">
                    <View className="absolute -left-24 -top-1">
                      <RocketLaunchIcon color="white" size={25} />
                    </View>
                    <Text className=" text-white font-bold text-md text-center">
                      Continue with Google
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="flex-row">
                <TouchableOpacity
                  className="mx-5 bg-[#3c5997] p-4 mb-4 mr-5 rounded-full flex-1 items-center space-x-1"
                  disabled={true} //enable facebook login
                  onPress={() => {
                    promptAsync();
                  }}
                >
                  <View className="flex-row">
                    <View className="absolute -left-24 -top-1">
                      <BookOpenIcon color="white" size={25} />
                    </View>
                    <Text className=" text-white font-bold text-md text-center">
                      Continue with Facebook
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="flex-row">
                <TouchableOpacity
                  className="mx-5 bg-[#fff] p-4 mr-5 rounded-full flex-1 items-center space-x-1"
                  disabled={true} //enable apple/android login
                  onPress={() => {
                    promptAsync();
                  }}
                >
                  <View className="flex-row">
                    <View className="absolute -left-28 -top-1">
                      <GlobeAltIcon color="black" size={25} />
                    </View>
                    <Text className=" text-black font-bold text-md text-center">
                      Continue with Apple
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  square: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
  },
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
  },
  backgroundViewWrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
});

export default LoginScreen;
