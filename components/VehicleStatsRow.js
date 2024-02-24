import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const StatsRow = (props) => {
  let stats = props.stats;
  return (
    // three boxes showing different vehicle stats
    <View className="flex-row justify-around">
      <TouchableOpacity>
        <View className="items-center p-5 rounded-lg">
          <Image
            source={require("../assets/images/gradient-bg6.jpg")}
            className="w-28 h-28 rounded-full"
          />
          <Text className="text-white font-bold text-sm absolute top-14">
            {stats.stat1}
          </Text>
          <Text className="text-white font-semibold absolute bottom-14">
            {stats.text1}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View className="items-center p-5 rounded-lg">
          <Image
            source={require("../assets/images/gradient-bg6.jpg")}
            className="w-28 h-28 rounded-full"
          />
          <Text className="text-white font-bold text-sm absolute top-14">
            {stats.stat2}
          </Text>
          <Text className="text-white font-semibold absolute bottom-14">
            {stats.text2}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View className="items-center p-5 rounded-lg">
          <Image
            source={require("../assets/images/gradient-bg6.jpg")}
            className="w-28 h-28 rounded-full"
          />
          <Text className="text-white font-bold text-sm absolute top-14">
            {stats.stat3}
          </Text>
          <Text className="text-white font-semibold absolute bottom-14">
            {stats.text3}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default StatsRow;
