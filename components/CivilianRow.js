import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { UserIcon } from "react-native-heroicons/outline";

const CivilianRow = () => {
  return (
    <View className="flex-row mt-2">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Civilian Card */}
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#02284F] items-center h-40 w-40 rounded-lg justify-center opacity-90">
            <UserIcon size={40} color="white" />
            <Text className="text-white font-semibold pt-1">Billy Thors</Text>
            <Text className="text-white">2001-01-01</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#02284F] items-center h-40 w-40 rounded-lg justify-center opacity-90">
            <UserIcon size={40} color="white" />
            <Text className="text-white font-semibold pt-1">Brad Pitt</Text>
            <Text className="text-white">2001-04-23</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#02284F] items-center h-40 w-40 rounded-lg justify-center opacity-90">
            <UserIcon size={40} color="white" />
            <Text className="text-white font-semibold pt-1">Rodger Pike</Text>
            <Text className="text-white">2000-07-13</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#02284F] items-center h-40 w-40 rounded-lg justify-center opacity-90">
            <UserIcon size={40} color="white" />
            <Text className="text-white font-semibold pt-1">Hulk Hogan</Text>
            <Text className="text-white">2001-01-01</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#02284F] items-center h-40 w-40 rounded-lg justify-center opacity-90">
            <UserIcon size={40} color="white" />
            <Text className="text-white font-semibold pt-1">Peter Griffin</Text>
            <Text className="text-white">1997-07-22</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CivilianRow;
