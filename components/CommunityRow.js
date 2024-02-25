import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { EllipsisHorizontalIcon } from "react-native-heroicons/solid";

const CommunityRow = () => {
  return (
    <>
      {/* a new horizontal scrollable section called "discover more communities for you" with a column layout of a spotlight image, name of the community and number of members. include button at bottom to Learn More */}
      <View className="flex-row justify-between px-2 pt-5">
        <Text className="text-white text-lg font-semibold">
          Discover more communities
        </Text>
        <TouchableOpacity>
          <Text className="text-gray-500 text-lg font-semibold">See All</Text>
        </TouchableOpacity>
      </View>
      <View className="pt-3">
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
                className="w-48 h-28 rounded-xl"
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  San Andreas Roleplay
                </Text>
                <TouchableOpacity className="flex-col justify-end">
                  <View className="flex-col mt-2">
                    <EllipsisHorizontalIcon
                      size={30}
                      color={"#FFF"}
                    ></EllipsisHorizontalIcon>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flew-row">
                <Text
                  numberOfLines={1}
                  className="text-slate-300 text-xs -top-2"
                >
                  1,879 Members
                </Text>
                <Text
                  numberOfLines={1}
                  className="text-green-500 text-sm -top-2"
                >
                  Actively Recruiting
                </Text>
              </View>
              {/* button to learn more */}
              <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                <Text className="text-white text-md font-bold p-2">
                  Learn More
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-col">
            <TouchableOpacity>
              <Image
                source={require("../assets/images/discover-community2.jpg")}
                className="w-48 h-28 rounded-xl"
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  Los Santos Roleplay
                </Text>
                <TouchableOpacity className="flex-col justify-end">
                  <View className="flex-col mt-2">
                    <EllipsisHorizontalIcon
                      size={30}
                      color={"#FFF"}
                    ></EllipsisHorizontalIcon>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flew-row">
                <Text
                  numberOfLines={1}
                  className="text-slate-300 text-xs -top-2"
                >
                  2,879 Members
                </Text>
                <Text
                  numberOfLines={1}
                  className="text-green-500 text-sm -top-2"
                >
                  Newly Created
                </Text>
              </View>
              {/* button to learn more */}
              <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                <Text className="text-white text-md font-bold p-2">
                  Learn More
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-col">
            <TouchableOpacity>
              <Image
                source={require("../assets/images/discover-community3.jpg")}
                className="w-48 h-28 rounded-xl"
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  Libert City Roleplay
                </Text>
                <TouchableOpacity className="flex-col justify-end">
                  <View className="flex-col mt-2">
                    <EllipsisHorizontalIcon
                      size={30}
                      color={"#FFF"}
                    ></EllipsisHorizontalIcon>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flew-row">
                <Text
                  numberOfLines={1}
                  className="text-slate-300 text-xs -top-2"
                >
                  3,879 Members
                </Text>
                <Text
                  numberOfLines={1}
                  className="text-green-500 text-sm -top-2"
                >
                  Top Rated
                </Text>
              </View>
              {/* button to learn more */}
              <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                <Text className="text-white text-md font-bold p-2">
                  Learn More
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-col">
            <TouchableOpacity>
              <Image
                source={require("../assets/images/discover-community4.jpg")}
                className="w-48 h-28 rounded-xl"
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  Vice City Roleplay
                </Text>
                <TouchableOpacity className="flex-col justify-end">
                  <View className="flex-col mt-2">
                    <EllipsisHorizontalIcon
                      size={30}
                      color={"#FFF"}
                    ></EllipsisHorizontalIcon>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flew-row">
                <Text
                  numberOfLines={1}
                  className="text-slate-300 text-xs -top-2"
                >
                  4,879 Members
                </Text>
                <Text
                  numberOfLines={1}
                  className="text-green-500 text-sm -top-2"
                >
                  {" "}
                </Text>
              </View>
              {/* button to learn more */}
              <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                <Text className="text-white text-md font-bold p-2">
                  Learn More
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-col">
            <TouchableOpacity>
              <Image
                source={require("../assets/images/discover-community5.jpg")}
                className="w-48 h-28 rounded-xl"
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  Blaine County Roleplay
                </Text>
                <TouchableOpacity className="flex-col justify-end">
                  <View className="flex-col mt-2">
                    <EllipsisHorizontalIcon
                      size={30}
                      color={"#FFF"}
                    ></EllipsisHorizontalIcon>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flew-row">
                <Text
                  numberOfLines={1}
                  className="text-slate-300 text-xs -top-2"
                >
                  5,879 Members
                </Text>
                <Text
                  numberOfLines={1}
                  className="text-green-500 text-sm -top-2"
                >
                  {" "}
                </Text>
              </View>
              {/* button to learn more */}
              <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                <Text className="text-white text-md font-bold p-2">
                  Learn More
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default CommunityRow;
