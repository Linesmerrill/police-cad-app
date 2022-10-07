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
import {
  ChevronDownIcon,
  HomeIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import UserCategory from "../components/RoleIcon";
import RoleIcon from "../components/RoleIcon";

const CommunitiesScreen = () => {
  const navigation = useNavigation();

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
          <TouchableOpacity onPress={navigation.goBack}>
            <HomeIcon className="flex-1" size={35} color="#1B96D6" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Account")}>
            <UserIcon className="flex-1" size={35} color="#1B96D6" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <SafeAreaView>
        <Text>Communities</Text>
      </SafeAreaView>
    </>
  );
};

export default CommunitiesScreen;
