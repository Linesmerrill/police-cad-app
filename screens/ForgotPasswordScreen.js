import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [emailAddress, setEmailAddress] = useState();
  console.log(emailAddress);
  return (
    <View className="bg-[#02284F] flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          <View className="p-5">
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <XMarkIcon color="white" size={30} />
            </TouchableOpacity>
          </View>
          <Text className="text-white text-2xl font-bold pl-5">
            Password Recovery
          </Text>
          <View className="flex-1 mx-4 mt-6">
            <View className="bg-gray-200 p-4 rounded-lg">
              <TextInput
                placeholder="Email"
                placeholderTextColor={"gray"}
                keyboardType="email-address"
              />
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="mx-5 bg-[#0778E8] p-4 mb-4 rounded-full flex-row items-center space-x-1"
          >
            <Text className="flex-1 text-white font-extrabold text-lg text-center">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ForgotPasswordScreen;
