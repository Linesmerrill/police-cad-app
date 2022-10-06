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
import PassMeter from "react-native-passmeter";

const MAX_LEN = 50,
  MIN_LEN = 4,
  PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState("");
  return (
    <View className="bg-[#02284F] flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          <View className="p-5">
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <XMarkIcon color="#B19356" size={30} />
            </TouchableOpacity>
          </View>
          <Text className="text-[#1B96D6] text-2xl font-bold pl-5">
            Create a New Account
          </Text>
          <View className="flex-1 mx-4 mt-6">
            <View className="bg-gray-200 p-4 rounded-lg">
              <TextInput
                placeholder="Email"
                placeholderTextColor={"gray"}
                keyboardType="email-address"
              />
            </View>
            <View className="bg-gray-200 p-4 rounded-lg mt-4">
              <TextInput
                placeholder="Password"
                placeholderTextColor={"gray"}
                maxLength={50}
                secureTextEntry
                onChangeText={(password) => setPassword(password)}
              />
            </View>
            <View className="mt-4">
              <PassMeter
                showLabels
                password={password}
                maxLength={MAX_LEN}
                minLength={MIN_LEN}
                labels={PASS_LABELS}
              />
            </View>
          </View>
        </View>

        <View className="">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="mx-5 bg-[#1B96D6] p-4 mb-4 rounded-full flex-row items-center space-x-1"
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

export default CreateAccountScreen;
