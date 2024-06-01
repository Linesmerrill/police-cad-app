import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { ArrowLeftIcon, XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import PassMeter from "react-native-passmeter";
import TextFieldAnimated from "../components/TextFieldAnimated";
import { StatusBar } from "expo-status-bar";
import { Divider } from "react-native-paper";
import { checkEmailExists } from "../services/api";
import { ExclamationCircleIcon } from "react-native-heroicons/solid";

const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const [emailAddress, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  async function handleNextButtonPress(emailAddress, navigation) {
    setIsLoading(true);

    const result = await checkEmailExists(emailAddress);

    if (!result.success) {
      setMessage(result.message);
    } else {
      navigation.push("CreateAccount2", {
        emailAddress: emailAddress,
      });
    }

    setIsLoading(false);
  }

  return (
    <View className="bg-[#111] flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          <View className="flex-row">
            <View className="pt-5 pl-5">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon color="white" size={30} />
              </TouchableOpacity>
            </View>

            <View className="pt-5 mx-20">
              <Text className="text-white font-bold text-base">
                Step 1 of 3
              </Text>
            </View>
          </View>
          <View className="flex-row pt-2">
            <Divider className="text-white h-1" width="33%"></Divider>
            <Divider className="bg-gray-700 h-1" width="33%"></Divider>
            <Divider className="bg-gray-700 h-1" width="33%"></Divider>
          </View>

          <Text className="text-[#cdcccc] text-2xl font-bold pl-5 pt-10">
            What's your email?
          </Text>
          <View className="flex-1 mt-1">
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
                    autoCapitalize="none"
                    focusable
                    value={emailAddress}
                    onChangeText={setEmail}
                  />
                </View>
              </View>
            </View>
            {/* <View className="bg-gray-200 p-4 rounded-lg mt-4">
              <TextInput
                placeholder="Password"
                placeholderTextColor={"gray"}
                maxLength={50}
                secureTextEntry
                onChangeText={(password) => setPassword(password)}
              />
            </View> */}
            <View className="flex-row justify-center mt-5">
              {isLoading && <ActivityIndicator size="large" />}
              {message ? (
                <View className="flex-row justify-center">
                  <ExclamationCircleIcon size={35} color={"red"} />
                  <Text className="text-red-600 font-bold text-lg pl-2 pt-1 capitalize">
                    {message}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </View>

        <View className="">
          <TouchableOpacity
            onPress={() => handleNextButtonPress(emailAddress, navigation)}
            className="mx-5 bg-white p-4 mb-4 rounded-full flex-row items-center space-x-1"
          >
            <Text className="flex-1 text-black font-semibold text-lg text-center">
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CreateAccountScreen;
