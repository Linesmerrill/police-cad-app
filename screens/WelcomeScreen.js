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
} from "react-native";
import React, { useLayoutEffect, useEffect, useMemo, useState } from "react";
import {
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
import TypingText from "react-native-typing-text";
import { useNavigation } from "@react-navigation/native";
import { Video, AVPlaybackStatus } from "expo-av";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
WebBrowser.maybeCompleteAuthSession();
const { width, height } = Dimensions.get("window");

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const opacity = useMemo(() => new Animated.Value(0), []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.REACT_NATIVE_GOOGLE_ANDROID_CLIENT_ID,
    iosClientId: process.env.REACT_NATIVE_GOOGLE_IOS_CLIENT_ID,
    expoClientId: process.env.REACT_NATIVE_EXPO_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
      navigation.navigate("Home");
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

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Animated.View
          style={[styles.backgroundViewWrapper, { opacity: opacity }]}
        >
          <Video
            isLooping
            isMuted
            positionMillis={500}
            onLoad={() => {
              Animated.timing(opacity, {
                toValue: 1,
                useNativeDriver: true,
              }).start();
            }}
            resizeMode="cover"
            shouldPlay
            source={require("../assets/images/space.mp4")}
            style={{ flex: 1 }}
          />
        </Animated.View>
        <SafeAreaView className="h-full space-x-1" style={styles.overlay}>
          <View className="flex-row ml-2">
            {/* <TouchableOpacity
              className="shadow-sm"
              onPress={() => navigation.navigate("Home")}
            >
              <XCircleIcon className="flex-1" color="white" size={40} />
            </TouchableOpacity> */}
          </View>

          <View className="flex-row justify-center mt-6">
            <Image
              className=" w-24 h-24"
              source={require("../assets/favicon.png")}
            />
          </View>

          <View className="mt-40 flex-col p-4 ">
            <View className="flex-row">
              <TypingText
                text="Lines Police CAD"
                color="white"
                textSize={36}
                typingAnimationDuration={120}
                blinkingCursorAnimationDuration={9999999999}
              />
            </View>

            {/* <Text className="text-4xl font-semibold text-white">
              chargers you love
            </Text> */}
          </View>

          <View className="mt-5">
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
            {/* <View className="flex-row w-full">
              <Divider className="text-white text-lg h-[0.9]" />
            </View> */}
            <View className="flex-row justify-between m-6">
              <View className="">
                <Text className="w-40 mt-2 bg-white h-0.5"></Text>
              </View>

              <Text className=" text-white">or</Text>
              <View className="">
                <Text className="w-40 mt-2 bg-white h-0.5"></Text>
              </View>
            </View>

            <View className="flex-row">
              <TouchableOpacity
                className="mx-5 bg-[#13cb10] p-4 mb-4 mr-5 rounded-full flex-1 items-center space-x-1"
                onPress={() => navigation.push("CreateAccount")}
              >
                <View className="flex-row">
                  <Text className=" text-black font-bold text-md text-center">
                    Create a free account
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row justify-center mt-2">
            <Text className="text-white text-lg">
              Already have an account?{" "}
              <Text
                style={{ textDecorationLine: "underline", fontWeight: "bold" }}
                onPress={() => navigation.navigate("Login")}
              >
                Log in
              </Text>
            </Text>
          </View>
          <View className="flex mt-9 left-2 right-2 mr-2">
            <Text className="text-gray-400">
              By continuing to use Lines Police CAD, you agree to our{" \n"}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() =>
                  Linking.openURL(
                    "https://en.wikipedia.org/wiki/Terms_of_service"
                  )
                }
              >
                Terms of Service{" "}
              </Text>
              and{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() =>
                  Linking.openURL(
                    "https://en.wikipedia.org/wiki/Privacy_policy"
                  )
                }
              >
                Privacy Policy
              </Text>
              {"."}
            </Text>
          </View>
        </SafeAreaView>
      </View>
    </View>
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
    backgroundColor: "rgba(0,0,0,0.6)",
  },
});

export default WelcomeScreen;
