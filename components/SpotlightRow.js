import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

const SpotlightRow = () => {
  return (
    <View className="py-5">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="flex-row space-x-4"
      >
        <TouchableOpacity>
          <View className="flex-col">
            <Image
              source={require("../assets/images/spotlight-1.jpg")}
              className="w-80 h-60 rounded-3xl"
            />
            <Text
              numberOfLines={1}
              className="text-white text-lg font-semibold pt-2 pl-2"
              position="absolute"
              bottom={60}
            >
              Top Communities of 2023
            </Text>
            <Text
              numberOfLines={1}
              className="text-green-500 text-sm font-semibold"
            >
              1h ago
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-col">
            <Image
              source={require("../assets/images/spotlight-2.jpg")}
              className="w-80 h-60 rounded-3xl"
            />
            <Text
              numberOfLines={1}
              className="text-white text-lg font-semibold pt-2 pl-2"
              position="absolute"
              bottom={60}
            >
              How to Organize your Community
            </Text>
            <Text
              numberOfLines={1}
              className="text-green-500 text-sm font-semibold"
            >
              12h ago
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-col">
            <Image
              source={require("../assets/images/spotlight-3.jpg")}
              className="w-80 h-60 rounded-3xl"
            />
            <Text
              numberOfLines={1}
              className="text-white text-lg font-semibold pt-2 pl-2"
              position="absolute"
              bottom={60}
            >
              Community of the Month
            </Text>
            <Text
              numberOfLines={1}
              className="text-green-500 text-sm font-semibold"
            >
              1d ago
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SpotlightRow;
