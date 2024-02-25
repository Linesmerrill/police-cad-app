import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BellIcon, ChatBubbleLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const BellChatContainer = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row space-x-4">
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
        <BellIcon className="text-white" color={"#FFF"} />
        {/* add notification red bubble to top corner */}
        <View className="bg-red-500 w-4 h-4 rounded-full absolute -top-1 -right-1">
          <Text className="text-white text-xs font-semibold text-center">
            3
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <ChatBubbleLeftIcon className="text-white" color={"#FFF"} />
        {/* add notification red bubble to top corner */}
        <View className="bg-red-500 w-4 h-4 rounded-full absolute -top-1 -right-1">
          <Text className="text-white text-xs font-semibold text-center">
            4
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BellChatContainer;
