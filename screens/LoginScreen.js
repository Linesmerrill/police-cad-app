import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ShieldCheckIcon } from "react-native-heroicons/outline";

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
          <ShieldCheckIcon color="white" size={40} />
          <Text className="text-4xl text-white font-semibold">
            Lines Police CAD
          </Text>
        </View>
      </View>

      {/* Sign in fields */}
      <View className="flex-1 mt-10 mx-4">
        <View>
          <Text className="text-white text-3xl font-semibold pb-3">
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
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
