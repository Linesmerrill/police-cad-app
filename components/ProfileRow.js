import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/solid";

const ProfileRow = () => {
  return (
    <TouchableOpacity className="flex-row w-full justify-between  p-3 bg-slate-800 rounded-xl">
      <View className="flex-row">
        <Image
          source={require("../assets/images/matt-bat.jpg")}
          className="w-12 h-12 rounded-full"
        />
        <View className="flex-col pl-4 space-y-1">
          <Text className="text-white font-semibold">Merrill Lines</Text>
          <View className="flex-row">
            <Text className="text-xs text-white pr-1">7</Text>
            <Text className="text-xs text-slate-400 pr-3">Following</Text>
            <Text className="text-xs text-white pr-1">742</Text>
            <Text className="text-xs text-slate-400">Followers</Text>
          </View>
        </View>
      </View>
      <View className="pt-3 pr-1">
        <ChevronRightIcon className="text-white" size={18} color={"#FFF"} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileRow;
