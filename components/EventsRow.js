import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { EllipsisHorizontalIcon } from "react-native-heroicons/solid";

const EventsRow = () => {
  return (
    <>
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
                source={require("../assets/images/discover-community5.jpg")}
                className="w-72 h-56 rounded-xl"
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  Halloween Roleplay Event
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
                  October 30th, 2024
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
                source={require("../assets/images/discover-community2.jpg")}
                className="w-72 h-56 rounded-xl"
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  Community Engagment Event
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
                  November 10th, 2024
                </Text>
                <Text numberOfLines={1} className="text-red-500 text-sm -top-2">
                  Required
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
                className="w-72 h-56 rounded-xl"
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  Thanksgiving Roleplay Event
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
                  November 24th, 2024
                </Text>
                <Text
                  numberOfLines={1}
                  className="text-green-500 text-sm -top-2"
                >
                  Optional
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

export default EventsRow;
