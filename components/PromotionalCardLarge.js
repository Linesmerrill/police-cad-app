import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  ArrowTopRightOnSquareIcon,
  ShareIcon,
} from "react-native-heroicons/solid";

const PromotionalCardLarge = () => {
  return (
    <View className="m-1 mt-5">
      <TouchableOpacity>
        <View className="flex-row bg-slate-800 p-3 space-x-3 pb-5 rounded-t-xl">
          <Image
            source={require("../assets/images/discover-community5.jpg")}
            className="w-10 h-10 rounded-xl mt-1"
          />
          <View className="flex-col">
            <View className="flex-row">
              <Text className="text-white text-sm font-semibold">
                Blaine County Roleplay
              </Text>
            </View>
            <View className="flew-row">
              <Text numberOfLines={1} className="text-slate-300 text-xs mt-1">
                25 days ago
              </Text>
            </View>
          </View>
          <TouchableOpacity className="absolute right-5 top-6">
            <ArrowTopRightOnSquareIcon size={25} color={"#FFF"} />
          </TouchableOpacity>
        </View>
        <Image
          className="w-full h-56 bg-opacity-90"
          source={require("../assets/images/discover-community5.jpg")}
        />

        <View className="flex-col bg-slate-800 rounded-b-xl">
          <Text className="text-white text-md font-bold pt-6 pl-3">
            Blaine County Roleplay Now Hiring Officers
          </Text>
          <Text
            className="text-slate-300 text-sm p-3 pt-2 font-semibold"
            numberOfLines={3}
          >
            Blaine County Roleplay is a community that is hiring officers. We
            are looking for active members to join our community. We are a
            community that is looking for active members to join our community.
            We are a community that is looking for active members to join our
            community.
          </Text>
        </View>

        <View className="absolute top-40 left-24">
          <Text className="text-white text-3xl font-semibold">
            Blaine County Roleplay
          </Text>
          <Text className="text-white text-lg font-semibold pl-12">
            Hiring Officers
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PromotionalCardLarge;
