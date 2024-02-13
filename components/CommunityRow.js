import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { EllipsisHorizontalIcon } from "react-native-heroicons/solid";

const CommunityRow = () => {
  return (
    <View className="py-5">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="flex-row space-x-4"
      >
        {/* add a new card that contains a spotlight image, community name and numbers of members in community */}
        <View className="flex-col">
          <TouchableOpacity>
            <Image
              source={require("../assets/images/discover-community1.jpg")}
              className="w-60 h-40 rounded-3xl"
            />
            <View className="flex-row justify-between">
              <Text
                numberOfLines={1}
                className="text-white text-lg font-semibold pt-2 pl-2"
              >
                San Andreas Roleplay
              </Text>
              <TouchableOpacity>
                <View className="flex-col justify-around mt-1">
                  <EllipsisHorizontalIcon
                    size={40}
                    color={"#FFF"}
                  ></EllipsisHorizontalIcon>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flew-row">
              <Text
                numberOfLines={1}
                className="text-slate-300 text-sm pl-2 -top-2"
              >
                1,879 Members
              </Text>
              <Text
                numberOfLines={1}
                className="text-green-500 text-sm pl-2 -top-2"
              >
                Actively Recruiting
              </Text>
            </View>
            {/* button to learn more */}
            <View className="flex-row justify-center bg-slate-500 rounded-3xl mx-3 mt-3 py-2 mb-3">
              <Text className="text-white text-md font-semibold p-2">
                Learn More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex-col">
          <TouchableOpacity>
            <Image
              source={require("../assets/images/discover-community2.jpg")}
              className="w-60 h-40 rounded-3xl"
            />
            <View className="flex-row justify-between">
              <Text
                numberOfLines={1}
                className="text-white text-lg font-semibold pt-2 pl-2"
              >
                Los Santos Roleplay
              </Text>
              <TouchableOpacity>
                <View className="flex-col justify-around mt-1">
                  <EllipsisHorizontalIcon
                    size={40}
                    color={"#FFF"}
                  ></EllipsisHorizontalIcon>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flew-row">
              <Text
                numberOfLines={1}
                className="text-slate-300 text-sm pl-2 -top-2"
              >
                2,879 Members
              </Text>
              <Text
                numberOfLines={1}
                className="text-green-500 text-sm pl-2 -top-2"
              >
                Newly Created
              </Text>
            </View>
            {/* button to learn more */}
            <View className="flex-row justify-center bg-slate-500 rounded-3xl mx-3 mt-3 py-2 mb-3">
              <Text className="text-white text-md font-semibold p-2">
                Learn More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex-col">
          <TouchableOpacity>
            <Image
              source={require("../assets/images/discover-community3.jpg")}
              className="w-60 h-40 rounded-3xl"
            />
            <View className="flex-row justify-between">
              <Text
                numberOfLines={1}
                className="text-white text-lg font-semibold pt-2 pl-2"
              >
                Liberty City Roleplay
              </Text>
              <TouchableOpacity>
                <View className="flex-col justify-around mt-1">
                  <EllipsisHorizontalIcon
                    size={40}
                    color={"#FFF"}
                  ></EllipsisHorizontalIcon>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flew-row">
              <Text
                numberOfLines={1}
                className="text-slate-300 text-sm pl-2 -top-2"
              >
                3,879 Members
              </Text>
              <Text
                numberOfLines={1}
                className="text-green-500 text-sm pl-2 -top-2"
              >
                Top Rated
              </Text>
            </View>
            {/* button to learn more */}
            <View className="flex-row justify-center bg-slate-500 rounded-3xl mx-3 mt-3 py-2 mb-3">
              <Text className="text-white text-md font-semibold p-2">
                Learn More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/discover-community4.jpg")}
              className="w-60 h-40 rounded-3xl"
            />
            <View className="flex-row justify-between">
              <Text
                numberOfLines={1}
                className="text-white text-lg font-semibold pt-2 pl-2"
              >
                Vice City Roleplay
              </Text>
              <TouchableOpacity>
                <View className="flex-col justify-around mt-1">
                  <EllipsisHorizontalIcon
                    size={40}
                    color={"#FFF"}
                  ></EllipsisHorizontalIcon>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flew-row">
              <Text
                numberOfLines={1}
                className="text-slate-300 text-sm pl-2 -top-2"
              >
                4,879 Members
              </Text>
              <Text
                numberOfLines={1}
                className="text-green-500 text-sm pl-2 -top-2"
              ></Text>
            </View>
            {/* button to learn more */}
            <View className="flex-row justify-center bg-slate-500 rounded-3xl mx-3 mt-3 py-2 mb-3">
              <Text className="text-white text-md font-semibold p-2">
                Learn More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/discover-community5.jpg")}
              className="w-60 h-40 rounded-3xl"
            />
            <View className="flex-row justify-between">
              <Text
                numberOfLines={1}
                className="text-white text-lg font-semibold pt-2 pl-2"
              >
                Blaine County Roleplay
              </Text>
              <TouchableOpacity>
                <View className="flex-col justify-around mt-1">
                  <EllipsisHorizontalIcon
                    size={40}
                    color={"#FFF"}
                  ></EllipsisHorizontalIcon>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flew-row">
              <Text
                numberOfLines={1}
                className="text-slate-300 text-sm pl-2 -top-2"
              >
                5,879 Members
              </Text>
              <Text
                numberOfLines={1}
                className="text-green-500 text-sm pl-2 -top-2"
              ></Text>
            </View>
            {/* button to learn more */}
            <View className="flex-row justify-center bg-slate-500 rounded-3xl mx-3 mt-3 py-2 mb-3">
              <Text className="text-white text-md font-semibold p-2">
                Learn More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CommunityRow;
