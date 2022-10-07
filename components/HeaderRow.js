import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  BackwardIcon,
  ChevronDownIcon,
  HomeIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import RoleIcon from "./RoleIcon";

const HeaderRow = ({ currentRole, imageLocation, icon }) => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <SafeAreaView className="bg-[#02284F] pt-5">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 justify-between">
          <TouchableOpacity onPress={navigation.goBack}>
            {icon === "back" && (
              <ArrowLeftIcon className="flex-1" size={35} color="#1B96D6" />
            )}
            {icon === "home" && (
              <HomeIcon className="flex-1" size={35} color="#1B96D6" />
            )}
          </TouchableOpacity>
          <View className="flex-row space-x-2">
            <Image
              source={imageLocation}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />

            <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
              <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">
                  Logged in as
                </Text>
                <Text className="font-bold text-xl text-white">
                  {currentRole}
                  <ChevronDownIcon size={20} color="#1B96D6" />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Account")}>
            <UserIcon className="flex-1" size={35} color="#1B96D6" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {isPressed && <RoleIcon />}
    </>
  );
};

export default HeaderRow;
