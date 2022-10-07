import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const DismissibleModalHeader = ({ modalHeaderTitle }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#02284F] pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 justify-between">
        <Text className="text-white text-lg font-bold">{modalHeaderTitle}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <XMarkIcon className="flex-1" size={35} color="#1B96D6" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DismissibleModalHeader;
