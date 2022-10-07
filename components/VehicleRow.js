import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { TruckIcon } from "react-native-heroicons/outline";

const VehicleRow = () => {
  return (
    <View className="flex-row mt-2">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Civilian Card */}
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#025C59] items-center h-40 w-40 rounded-lg justify-center opacity-80">
            <TruckIcon size={40} color="white" />
            <Text className="text-white pt-1">Red Dominator</Text>
            <Text className="text-white font-semibold">SMUGGLER</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#025C59] items-center h-40 w-40 rounded-lg justify-center opacity-80">
            <TruckIcon size={40} color="white" />
            <Text className="text-white pt-1">Blue Gauntlet</Text>
            <Text className="text-white font-semibold">JACKAL</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#025C59] items-center h-40 w-40 rounded-lg justify-center opacity-80">
            <TruckIcon size={40} color="white" />
            <Text className="text-white pt-1">Red Firetruck</Text>
            <Text className="text-white font-semibold">1234HHHH</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#025C59] items-center h-40 w-40 rounded-lg justify-center opacity-80">
            <TruckIcon size={40} color="white" />
            <Text className="text-white pt-1">Black Phoenix</Text>
            <Text className="text-white font-semibold">83DKQ555</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-2">
          <View className="bg-[#025C59] items-center h-40 w-40 rounded-lg justify-center opacity-80">
            <TruckIcon size={40} color="white" />
            <Text className="text-white pt-1">Orange Bati 801</Text>
            <Text className="text-white font-semibold">RAGE</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default VehicleRow;
