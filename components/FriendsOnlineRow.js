import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { TvIcon, UserGroupIcon } from "react-native-heroicons/solid";

const FriendsOnlineRow = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className="flex-row space-x-4"
    >
      <View className="flex-row space-x-4 p-5">
        <TouchableOpacity>
          <View className="flex-col justify-around w-16">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}
              <View className="bg-purple-500 w-16 h-16 rounded-full bg-opacity-90" />
              <UserGroupIcon
                className=""
                top={16}
                left={16}
                size={32}
                position="absolute"
                color={"#FFF"}
              />
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={2}
              className="text-white text-xs font-semibold pt-2 w-16 text-center"
            >
              Discover People
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-col justify-around w-16">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}
              <View className="bg-blue-500 w-16 h-16 rounded-full bg-opacity-90" />
              <TvIcon
                className=""
                top={16}
                left={16}
                size={32}
                position="absolute"
                color={"#FFF"}
              />
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-full text-center"
            >
              Join Party
            </Text>
            <Text
              numberOfLines={1}
              className="text-green-500 text-xs font-semibold w-full text-center"
            >
              Rec Room
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-col justify-around w-16">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}

              {/* image of random person */}
              <Image
                source={require("../assets/images/paul-ruzzo.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              <View
                className="bg-green-500 w-3 h-3 rounded-full ml-5"
                position="absolute"
                bottom={3}
                right={3}
              />
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-full text-center"
            >
              Paul Ruzzo
            </Text>
            <Text
              numberOfLines={1}
              className="text-green-500 text-xs font-semibold w-full text-center"
            >
              LPC Community
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-col justify-around w-16">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}

              {/* image of random person */}
              <Image
                source={require("../assets/images/wendy-king.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              <View
                className="bg-green-500 w-3 h-3 rounded-full ml-5"
                position="absolute"
                bottom={3}
                right={3}
              />
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-full text-center"
            >
              Wendy King
            </Text>
            <Text
              numberOfLines={1}
              className="text-green-500 text-xs font-semibold w-full text-center"
            >
              Vibing
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-col justify-around w-16">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}

              {/* image of random person */}
              <Image
                source={require("../assets/images/matt-bat.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              {/* <View
                className="bg-green-500 w-3 h-3 rounded-full ml-5"
                position="absolute"
                bottom={3}
                right={3}
              /> */}
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-full text-center"
            >
              Matt Bat
            </Text>
            <Text
              numberOfLines={1}
              className="text-gray-500 text-xs font-semibold w-full text-center"
            >
              30m ago
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-col justify-around w-16">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}

              {/* image of random person */}
              <Image
                source={require("../assets/images/joan-carver.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              {/* <View
                className="bg-green-500 w-3 h-3 rounded-full ml-5"
                position="absolute"
                bottom={3}
                right={3}
              /> */}
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-full text-center"
            >
              Joan Carver
            </Text>
            <Text
              numberOfLines={1}
              className="text-gray-500 text-xs font-semibold w-full text-center"
            >
              2d ago
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-col justify-around w-16">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}

              {/* image of random person */}
              <Image
                source={require("../assets/images/lilly-patten.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              {/* <View
                className="bg-green-500 w-3 h-3 rounded-full ml-5"
                position="absolute"
                bottom={3}
                right={3}
              /> */}
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-full text-center"
            >
              Lilly Patten
            </Text>
            <Text
              numberOfLines={1}
              className="text-gray-500 text-xs font-semibold w-full text-center"
            >
              30d ago
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FriendsOnlineRow;
