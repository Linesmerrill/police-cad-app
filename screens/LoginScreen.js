import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FaceSmileIcon, ShieldCheckIcon } from "react-native-heroicons/outline";
import TouchID from "react-native-touch-id";

const LoginScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-[#02284F] flex-1">
      {/* Logo & Name */}
      <View className="items-center mt-10">
        <View className="flex-row flex-1 items-center space-x-4">
          <ShieldCheckIcon color="#B19356" size={42} />
          <Text className="text-4xl text-[#1B96D6] font-bold">
            Lines Police CAD
          </Text>
        </View>
      </View>

      {/* Sign in fields */}
      <View className="flex-1 mt-10 mx-4">
        <View>
          <Text className="text-[#1B96D6] text-3xl font-semibold pb-3">
            Sign In
          </Text>
          <View className="bg-gray-200 p-4 rounded-lg">
            <TextInput
              placeholder="Email"
              placeholderTextColor={"gray"}
              keyboardType="email-address"
            />
          </View>

          <View className="bg-gray-200 p-4 mt-4 rounded-lg">
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={"gray"}
            />
          </View>

          <View className="flex-row-reverse items-center mt-5">
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text className="text-white text-base">forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-5">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="mx-2 bg-[#1B96D6] p-4 rounded-full flex-row items-center"
          >
            <Text className="flex-1 text-white font-extrabold text-lg text-center">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sign in with Face ID */}
      <View className="flex-1 items-center -mt-40">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View className="flex-row ">
            <View className="flex-1 items-center h-15 w-15">
              <Image
                source={require("../assets/images/icons8-face-id-100.png")}
              />
            </View>
          </View>
          <Text className="text-white text-base">Sign in with Face ID</Text>
        </TouchableOpacity>
      </View>

      {/* Create Account */}
      <View className="items-center pb-8">
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
          <Text className="text-[#1B96D6] text-xl font-medium">
            Don't have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
