import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import {
  ChevronLeftIcon,
  ExclamationCircleIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
const { width, height } = Dimensions.get("window");
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
WebBrowser.maybeCompleteAuthSession();
import base64 from "react-native-base64";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../services/api";
import { Modal } from "react-native";

const LoginScreen = () => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const navigation = useNavigation();
  const opacity = useMemo(() => new Animated.Value(0), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleLogin = async () => {
    if (email === "" || password === "") {
      setShowErrorMessage(true);
      return;
    }

    setIsLoading(true);

    const result = await login(email, password);
    setMessage(result.message);

    setIsLoading(false);

    if (result.success) {
      await AsyncStorage.setItem("email", email); // Save email to AsyncStorage
      navigation.navigate("HomeScreen", {
        screen: "HomeScreen",
        params: { emailAddress: email },
      });
    }
  };

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

  useEffect(() => {
    const checkEmail = async () => {
      const storedEmail = await AsyncStorage.getItem("email");
      if (storedEmail) {
        navigation.navigate("HomeScreen", {
          screen: "HomeScreen",
          params: { emailAddress: storedEmail },
        });
      }
    };

    checkEmail();
  }, []);

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
          <SafeAreaView className="h-full space-x-1" style={styles.overlay}>
            <View className="flex-row ml-2">
              <TouchableOpacity
                className=""
                onPress={() => {
                  navigation.navigate("Welcome");
                }}
              >
                <View className="flex-row bg-slate-800 rounded-full p-3 items-center">
                  <View className="flex-row items-center">
                    <ChevronLeftIcon
                      size={20}
                      className="text-white"
                      color={"#FFF"}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center">
              <Image
                className="w-32 h-32"
                source={require("../assets/lines-police-cad-discord-logo-2024.png")}
              />
            </View>

            <View className="flex-col p-4">
              <View className="flex-row justify-center">
                <Text className="text-3xl text-white">Welcome back.</Text>
              </View>
              <View className="flex-row justify-center">
                <Text className="text-3xl text-white">
                  <Text className="font-bold">Log in</Text> and start
                  roleplaying.
                </Text>
              </View>
            </View>

            <View className="">
              <View className="flex-col space-x-1">
                <View className="flex-row">
                  <View className="flex-1 mx-5 mr-4 mt-2">
                    <View className="bg-black p-4 rounded-lg border-solid border-2 border-gray-400">
                      <TextInput
                        placeholder="Email address"
                        placeholderTextColor={"gray"}
                        keyboardType="email-address"
                        cursorColor={"white"}
                        autoComplete="email"
                        color={"white"}
                        clearButtonMode="always"
                        autoCapitalize="none"
                        focusable
                        value={email}
                        onChangeText={setEmail}
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
                        value={password}
                        onChangeText={setPassword}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="flex-row">
                <TouchableOpacity
                  className="mx-5 bg-white p-4 mb-4 mt-6 mr-4 rounded-full flex-1 items-center space-x-1"
                  onPress={handleLogin}
                  disabled={isLoading}
                >
                  <View className="flex-row">
                    <Text className=" text-black font-bold text-md text-center">
                      Log in
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-center">
                {isLoading && <ActivityIndicator size="large" color="#fff" />}
              </View>
              <View className="flex-row justify-center">
                {message ? (
                  <>
                    <ExclamationCircleIcon size={35} color={"red"} />
                    <Text className="text-red-600 font-bold text-lg pl-2 pt-1">
                      {message}
                    </Text>
                  </>
                ) : null}
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
                    Forgot password
                  </Text>
                </Text>
              </View>
            </View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={showErrorMessage}
              onRequestClose={() => {}}
            >
              <View
                style={{
                  height: "30%",
                  marginTop: "auto",
                  backgroundColor: "#1F2937",
                }}
              >
                <View className="flex-col">
                  <View className="flex-row justify-center mt-2">
                    <TouchableOpacity
                      className=""
                      onPress={() => {
                        setShowErrorMessage(false);
                      }}
                    >
                      <View className="flex-row items-center">
                        <View className="flex-row items-center">
                          <ExclamationCircleIcon size={40} color={"red"} />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View className="flex-row justify-around align-middle mt-2">
                    <Text className="text-lg font-bold text-white">
                      Email or Password is Empty
                    </Text>
                  </View>
                  <View className="flex-row justify-around align-middle mt-2">
                    <Text className="text-white">
                      Check your email and/or password and try again.
                    </Text>
                  </View>
                  {/* log in button, white background */}
                  <View className="mt-6">
                    <TouchableOpacity
                      className="mx-5 bg-white p-4 mb-4 mr-5 rounded-full flex-1 items-center space-x-1"
                      onPress={() => {
                        setShowErrorMessage(false);
                      }}
                    >
                      <View className="flex-row">
                        <Text className=" text-black font-bold text-md text-center">
                          OK
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
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
