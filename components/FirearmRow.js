import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { FireIcon } from "react-native-heroicons/outline";

const FirearmRow = () => {
  return (
    <View className="flex-row mt-2">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Civilian Card */}
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#A83B00] items-center h-40 w-40 rounded-lg justify-center opacity-80">
            <FireIcon size={40} color="white" />
            <Text className="text-white font-semibold pt-1">9EQFRRW0</Text>
            <Text className="text-white">Pistol</Text>
            <Text className="text-white pt-1">Hulk Hogan</Text>
            <Text className="text-white">2001-01-01</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#A83B00] items-center h-40 w-40 rounded-lg justify-center opacity-80">
            <FireIcon size={40} color="white" />
            <Text className="text-white font-semibold pt-1">QBF2MP3G</Text>
            <Text className="text-white">Pistol</Text>
            <Text className="text-white pt-1">Brad Pitt</Text>
            <Text className="text-white">2001-04-23</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#A83B00] items-center h-40 w-40 rounded-lg justify-center opacity-80">
            <FireIcon size={40} color="white" />
            <Text className="text-white font-semibold pt-1">KC02DT8B</Text>
            <Text className="text-white">Pistol</Text>
            <Text className="text-white pt-1">N/A</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#A83B00] items-center h-40 w-40 rounded-lg justify-center opacity-80">
            <FireIcon size={40} color="white" />
            <Text className="text-white font-semibold pt-1">HSH8ST26</Text>
            <Text className="text-white">Pistol</Text>
            <Text className="text-white pt-1">Test Test2</Text>
            <Text className="text-white">2002-02-02</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#A83B00] items-center h-40 w-40 rounded-lg justify-center opacity-80">
            <FireIcon size={40} color="white" />
            <Text className="text-white font-semibold pt-1">518FTZ7D</Text>
            <Text className="text-white">Pistol</Text>
            <Text className="text-white">N/A</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FirearmRow;
