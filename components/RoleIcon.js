import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const RoleIcon = () => {
  const navigation = useNavigation();
  return (
    <View className="absolute bottom-0 w-full z-50 bg-[#02284F] p-5 flex-1">
      <Text className="text-white font-light text-xs mb-4">Select a role</Text>
      <ScrollView>
        {/* Civilian */}
        <TouchableOpacity
          className="border-b p-4 border-gray-200"
          onPress={() => navigation.navigate("Civilian")}
        >
          <View className="flex-row items-center">
            <Image
              source={require("../assets/images/civilian-icon.png")}
              className="w-8 h-8 rounded-full"
            />
            <Text className="text-white pl-3">Civilian</Text>
          </View>
        </TouchableOpacity>

        {/* Police */}
        <TouchableOpacity
          className="border-b p-4 border-gray-200"
          onPress={() => navigation.navigate("Police")}
        >
          <View className="flex-row items-center">
            <Image
              source={require("../assets/images/police-icon.png")}
              className="w-8 h-8 rounded-full"
            />
            <Text className="text-white pl-3">Police</Text>
          </View>
        </TouchableOpacity>

        {/* Dispatch */}
        <TouchableOpacity
          className="border-b p-4 border-gray-200"
          onPress={() => navigation.navigate("Dispatch")}
        >
          <View className="flex-row items-center">
            <Image
              source={require("../assets/images/dispatch-icon.png")}
              className="w-8 h-8 rounded-full"
            />
            <Text className="text-white pl-3">Dispatch</Text>
          </View>
        </TouchableOpacity>

        {/* Fire/EMS */}
        <TouchableOpacity
          className=" p-4 border-gray-200"
          onPress={() => navigation.navigate("FireEms")}
        >
          <View className="flex-row items-center">
            <Image
              source={require("../assets/images/fire-ems-icon.png")}
              className="w-8 h-8 rounded-full"
            />
            <Text className="text-white pl-3">Fire/EMS</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RoleIcon;
