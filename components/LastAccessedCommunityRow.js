import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const LastAccessedCommunityRow = (props) => {
  const navigation = useNavigation();
  let communityDetails = props.communityDetails;
  return (
    <View className="justify-between flex-row bg-slate-700 bg-opacity-90 rounded-3xl p-3">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CommunityHome");
        }}
      >
        <View className="flex-row">
          {/* add rounded image of icon */}
          <Image
            source={{ uri: communityDetails.communityImage }}
            className="w-10 h-10 rounded-full bg-white"
          />
          <View className="flex-col">
            <Text
              className="text-white text-lg font-semibold pl-5"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {communityDetails.communityName}
            </Text>
            <View className="flex-row justify-start">
              {/* green dot icon */}
              <View className="bg-green-500 w-3 h-3 rounded-full ml-5" />
              {/* last accessed text */}
              <Text className="text-green-500 text-sm pl-2 -top-1">
                Last Accessed {communityDetails.LastAccessedInHours}h ago
              </Text>
            </View>
          </View>
          <View className="flex-row bg-slate-500 rounded-3xl ml-4 justify-between">
            <Text className="text-white text-lg font-bold pt-2 pl-3 mr-2">
              Go
            </Text>
            <View className="m-2.5 ml-1">
              <ArrowRightIcon
                className="w-10 h-10 text-white font-bold"
                color={"#FFF"}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LastAccessedCommunityRow;
