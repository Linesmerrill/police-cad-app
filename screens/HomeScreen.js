import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";
import RoleIcon from "../components/RoleIcon";

const HomeScreen = () => {
  const navigation = useNavigation();
  const civilianUser = require("../assets/images/civilian-icon.png");
  const [isPressed, setIsPressed] = useState(false);
  const [currentRole, setCurrentRole] = useState("Civilian");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <SafeAreaView className="bg-[#02284F] pt-5">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 justify-between">
          <View className="flex-row space-x-2">
            <Image
              source={civilianUser}
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
          <UserIcon className="flex-1" size={35} color="#1B96D6" />
        </View>
      </SafeAreaView>

      <SafeAreaView>
        <Text className="text-xl text-[#02284F] font-semibold m-4">
          Welcome!
        </Text>
      </SafeAreaView>

      {isPressed && <RoleIcon />}
    </>
  );
};

export default HomeScreen;
