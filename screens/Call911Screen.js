import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { PhoneIcon } from "react-native-heroicons/solid";

const Call911Screen = () => {
  return (
    <View className="justify-center items-center flex-1">
      {/* screen with a phone circle in the middle */}
      <TouchableOpacity className="items-center">
        <View className=" bg-red-600 w-28 h-28 rounded-full justify-center items-center">
          <PhoneIcon
            className="w-20 h-20 text-white"
            color={"#FFF"}
            size={40}
          />
        </View>
        <View>
          <Text className="text-white text-lg font-bold mt-2">Dial 911</Text>
        </View>
      </TouchableOpacity>
      <View className="flex-col items-center mt-10">
        <Text className="text-gray-500 text-base">
          Only to be used in emergencies.
        </Text>
        <Text className="text-gray-500 text-base">
          Will connect you to the nearest police dispatcher.
        </Text>
      </View>
    </View>
  );
};

export default Call911Screen;
