import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { TruckIcon } from "react-native-heroicons/outline";

const VehicleRow = () => {
  return (
    <View className="m-2">
      {/* horizontal scrollable cards of vehicles */}
      <View className="flex-row justify-between mb-4">
        <Text className="text-xl font-bold text-white">Vehicles</Text>
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
                source={{
                  uri: "https://static.wikia.nocookie.net/gtawiki/images/7/78/Dominator-GTAV-front.png/revision/latest?cb=20160702195350",
                }}
                className="w-32 h-32 rounded-lg"
              />
              <View className="flex-row justify-around">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  Vapid Dominator
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
              source={{
                uri: "https://static.wikia.nocookie.net/gtawiki/images/4/4d/DukeODeath-GTAV-front.png/revision/latest?cb=20210727005751",
              }}
              className="w-32 h-32 rounded-lg"
            />
            <View className="flex-row justify-around">
              <Text
                numberOfLines={1}
                className="text-white text-md font-semibold pt-3"
              >
                Duke O'Death
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
              source={{
                uri: "https://static.wikia.nocookie.net/gtawiki/images/c/c4/Vigero-GTAV-front.png/revision/latest?cb=20160305172506",
              }}
              className="w-32 h-32 rounded-lg"
            />
            <View className="flex-row justify-around">
              <Text
                numberOfLines={1}
                className="text-white text-md font-semibold pt-3"
              >
                Declasse Vigero
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
              source={{
                uri: "https://static.wikia.nocookie.net/gtawiki/images/0/00/Stallion-GTAV-front.png/revision/latest?cb=20160702194827",
              }}
              className="w-32 h-32 rounded-lg"
            />
            <View className="flex-row justify-around">
              <Text
                numberOfLines={1}
                className="text-white text-md font-semibold pt-3"
              >
                Declasse Stallion
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
              source={{
                uri: "https://static.wikia.nocookie.net/gtawiki/images/6/67/Ruiner-GTAV-front.png/revision/latest?cb=20200616120635",
              }}
              className="w-32 h-32 rounded-lg"
            />
            <View className="flex-row justify-around">
              <Text
                numberOfLines={1}
                className="text-white text-md font-semibold pt-3"
              >
                Imponte Ruiner
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

export default VehicleRow;
