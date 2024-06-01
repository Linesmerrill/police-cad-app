import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {
  ArchiveBoxIcon,
  ArrowLeftIcon,
  CheckBadgeIcon,
  XMarkIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import PassMeter from "react-native-passmeter";
import TextFieldAnimated from "../components/TextFieldAnimated";
import { StatusBar } from "expo-status-bar";
import { Divider } from "react-native-paper";
import Checkbox from "expo-checkbox";

const CreateAccountScreen2 = ({ route }) => {
  const { emailAddress } = route.params;
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
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
                Step 2 of 3
              </Text>
            </View>
          </View>
          <View className="flex-row pt-2">
            <Divider className="text-white h-1" width="33%"></Divider>
            <Divider className="text-white h-1" width="33%"></Divider>
            <Divider className="bg-gray-700 h-1" width="33%"></Divider>
          </View>

          <Text className="text-[#cdcccc] text-2xl font-bold pl-5 pt-10">
            Create a password
          </Text>
          <View className="flex-1 mt-1">
            <View className="flex-row">
              <View className="flex-1 mx-5 mr-4 mt-6">
                <View className="bg-black p-4 rounded-lg border-solid border-2 border-gray-400">
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={"gray"}
                    keyboardType="visible-password"
                    cursorColor={"white"}
                    autoComplete="password"
                    color={"white"}
                    clearButtonMode="always"
                    secureTextEntry={!isChecked}
                    value={password}
                    onChangeText={setPassword}
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
            <View className="mt-4 ml-5 flex-row space-x-1">
              <Checkbox
                className="m-1"
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#4630EB" : undefined}
              />
              <Text className="text-gray-400 mt-1">Show Password</Text>
            </View>
          </View>
        </View>

        <View className="">
          <TouchableOpacity
            onPress={() =>
              navigation.push("CreateAccount3", {
                emailAddress,
                password,
              })
            }
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

export default CreateAccountScreen2;
