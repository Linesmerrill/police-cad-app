import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/solid";

const DiscoverPeopleRow = () => {
  return (
    <View className="py-5">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="flex-row space-x-4"
      >
        <View className="flex-col bg-slate-800 rounded-2xl">
          {/* add an x in the top right corner to dismiss the current card */}
          <TouchableOpacity>
            <View className="flex-row justify-end">
              <XMarkIcon
                position="absolute"
                right={15}
                top={15}
                color={"rgb(100, 116, 139)"}
              ></XMarkIcon>
            </View>
          </TouchableOpacity>
          <View className="flex-row justify-around ml-8 mr-8">
            <Image
              source={require("../assets/images/paul-ruzzo.jpg")}
              className="w-20 h-20 rounded-full bg-opacity-90 m-4"
            />
          </View>
          <View className="flex-row justify-around">
            <Text
              numberOfLines={1}
              className="text-white text-md font-semibold"
            >
              paul.ruzzo
            </Text>
          </View>
          <View className="flex-row justify-around">
            <Text numberOfLines={1} className="text-gray-200 text-xs pt-1">
              Suggested for you
            </Text>
          </View>
          {/* follow button */}
          <View className="flex-row justify-center bg-slate-500 rounded-2xl mx-3 mt-7 py-2 mb-3">
            <TouchableOpacity>
              <Text className="text-white text-md font-semibold p-2">
                Follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-col bg-slate-800 rounded-2xl">
          {/* add an x in the top right corner to dismiss the current card */}
          <TouchableOpacity>
            <View className="flex-row justify-end">
              <XMarkIcon
                position="absolute"
                right={15}
                top={15}
                color={"rgb(100, 116, 139)"}
              ></XMarkIcon>
            </View>
          </TouchableOpacity>
          <View className="flex-row justify-around ml-8 mr-8">
            <Image
              source={require("../assets/images/wendy-king.jpg")}
              className="w-20 h-20 rounded-full bg-opacity-90 m-4"
            />
          </View>
          <View className="flex-row justify-around">
            <Text
              numberOfLines={1}
              className="text-white text-md font-semibold"
            >
              wendy.king
            </Text>
          </View>
          <View className="flex-row justify-around">
            <Text numberOfLines={1} className="text-gray-200 text-xs pt-1">
              Suggested for you
            </Text>
          </View>
          {/* follow button */}
          <View className="flex-row justify-center bg-slate-500 rounded-2xl mx-3 mt-7 py-2 mb-3">
            <TouchableOpacity>
              <Text className="text-white text-md font-semibold p-2">
                Follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-col bg-slate-800 rounded-2xl">
          {/* add an x in the top right corner to dismiss the current card */}
          <TouchableOpacity>
            <View className="flex-row justify-end">
              <XMarkIcon
                position="absolute"
                right={15}
                top={15}
                color={"rgb(100, 116, 139)"}
              ></XMarkIcon>
            </View>
          </TouchableOpacity>
          <View className="flex-row justify-around ml-8 mr-8">
            <Image
              source={require("../assets/images/matt-bat.jpg")}
              className="w-20 h-20 rounded-full bg-opacity-90 m-4"
            />
          </View>
          <View className="flex-row justify-around">
            <Text
              numberOfLines={1}
              className="text-white text-md font-semibold"
            >
              matt.bat
            </Text>
          </View>
          <View className="flex-row justify-around">
            <Text numberOfLines={1} className="text-gray-200 text-xs pt-1">
              Suggested for you
            </Text>
          </View>
          {/* follow button */}
          <View className="flex-row justify-center bg-slate-500 rounded-2xl mx-3 mt-7 py-2 mb-3">
            <TouchableOpacity>
              <Text className="text-white text-md font-semibold p-2">
                Follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-col bg-slate-800 rounded-2xl">
          {/* add an x in the top right corner to dismiss the current card */}
          <TouchableOpacity>
            <View className="flex-row justify-end">
              <XMarkIcon
                position="absolute"
                right={15}
                top={15}
                color={"rgb(100, 116, 139)"}
              ></XMarkIcon>
            </View>
          </TouchableOpacity>
          <View className="flex-row justify-around ml-8 mr-8">
            <Image
              source={require("../assets/images/joan-carver.jpg")}
              className="w-20 h-20 rounded-full bg-opacity-90 m-4"
            />
          </View>
          <View className="flex-row justify-around">
            <Text
              numberOfLines={1}
              className="text-white text-md font-semibold"
            >
              joan.carver
            </Text>
          </View>
          <View className="flex-row justify-around">
            <Text numberOfLines={1} className="text-gray-200 text-xs pt-1">
              Suggested for you
            </Text>
          </View>
          {/* follow button */}
          <View className="flex-row justify-center bg-slate-500 rounded-2xl mx-3 mt-7 py-2 mb-3">
            <TouchableOpacity>
              <Text className="text-white text-md font-semibold p-2">
                Follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DiscoverPeopleRow;
