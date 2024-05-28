import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon, Cog8ToothIcon } from "react-native-heroicons/solid";
import {
  MapIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import BellChatContainer from "../components/BellChatContainer";

const MapScreen = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
  const [currentRole, setCurrentRole] = useState("Civilian");
  const [refreshing, setRefreshing] = React.useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentChat, setChats] = useState(true);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="transparent"
      />

      {/* add header bar */}
      <View className="flex-row justify-between items-center bg-black p-5">
        <View className="flex-row items-center">
          <Text className="text-white text-2xl font-bold">Map</Text>
        </View>
        <View className="flex-row space-x-4">
          <BellChatContainer />
        </View>
      </View>

      {/* content */}
      <View className="flex-row justify-center">
        <View className="bg-gray-800 w-16 h-16 rounded-full bg-opacity-90 justify-center items-center">
          <QuestionMarkCircleIcon
            size={32}
            className="text-white"
            color={"#FFF"}
          />
        </View>
      </View>

      <View className="flex-row justify-center">
        <Text className="text-white text-lg font-bold mt-4">
          No map yet, would you like to add one?
        </Text>
      </View>

      <View className="flex-row justify-center mt-4">
        <TouchableOpacity>
          <View className="bg-gray-800 w-52 h-12 rounded-lg bg-opacity-90 justify-center items-center">
            <Text className="text-white text-lg font-bold">Add Map</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default MapScreen;
