import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { TruckIcon } from "react-native-heroicons/outline";

const FirearmRow = () => {
  return (
    <View className="m-2">
      {/* horizontal scrollable cards of firearms */}
      <View className="flex-row justify-between mb-4">
        <Text className="text-xl font-bold text-white">Firearms</Text>
        <TouchableOpacity>
          <Text className="text-lg font-bold text-gray-500"> View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        className="space-x-5"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex-row space-x-4">
          <View className="flex-col">
            <TouchableOpacity>
              <Image
                source={require("../assets/images/gradient-bg5.jpg")}
                className="w-28 h-28 rounded-full"
              />
              <View className="flex-row justify-around">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  AK-47
                </Text>
              </View>
              <View className="flex-row justify-around">
                <Text numberOfLines={1} className="text-slate-300 text-xs">
                  Phil Collins
                </Text>
              </View>

              {/* button to learn more */}
              <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                <Text className="text-white text-md font-bold p-2">View</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-col">
          <TouchableOpacity>
            <Image
              source={require("../assets/images/gradient-bg4.jpg")}
              className="w-28 h-28 rounded-full"
            />
            <View className="flex-row justify-around">
              <Text
                numberOfLines={1}
                className="text-white text-md font-semibold pt-3"
              >
                M16
              </Text>
            </View>
            <View className="flex-row justify-around">
              <Text numberOfLines={1} className="text-slate-300 text-xs">
                Rich Price
              </Text>
            </View>

            {/* button to learn more */}
            <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
              <Text className="text-white text-md font-bold p-2">View</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex-col">
          <TouchableOpacity>
            <Image
              source={require("../assets/images/gradient-bg3.jpg")}
              className="w-28 h-28 rounded-full"
            />
            <View className="flex-row justify-around">
              <Text
                numberOfLines={1}
                className="text-white text-md font-semibold pt-3"
              >
                911 Pistol
              </Text>
            </View>
            <View className="flex-row justify-around">
              <Text numberOfLines={1} className="text-slate-300 text-xs">
                John Doe
              </Text>
            </View>

            {/* button to learn more */}
            <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
              <Text className="text-white text-md font-bold p-2">View</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex-col">
          <TouchableOpacity>
            <Image
              source={require("../assets/images/gradient-bg2.jpg")}
              className="w-28 h-28 rounded-full"
            />
            <View className="flex-row justify-around">
              <Text
                numberOfLines={1}
                className="text-white text-md font-semibold pt-3"
              >
                Shotgun
              </Text>
            </View>
            <View className="flex-row justify-around">
              <Text numberOfLines={1} className="text-slate-300 text-xs">
                Jane Doe
              </Text>
            </View>

            {/* button to learn more */}
            <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
              <Text className="text-white text-md font-bold p-2">View</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex-col">
          <TouchableOpacity>
            <Image
              source={require("../assets/images/gradient-bg1.jpg")}
              className="w-28 h-28 rounded-full"
            />
            <View className="flex-row justify-around">
              <Text
                numberOfLines={1}
                className="text-white text-md font-semibold pt-3"
              >
                Sniper Rifle
              </Text>
            </View>
            <View className="flex-row justify-around">
              <Text numberOfLines={1} className="text-slate-300 text-xs">
                Matt Smith
              </Text>
            </View>

            {/* button to learn more */}
            <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
              <Text className="text-white text-md font-bold p-2">View</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* end of horizontal scrollable cards of civilians */}
    </View>
  );
};

export default FirearmRow;
