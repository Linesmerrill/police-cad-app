import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  Cog6ToothIcon,
  Cog8ToothIcon,
  EllipsisVerticalIcon,
  HomeIcon,
  HomeModernIcon,
  IdentificationIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TvIcon,
} from "react-native-heroicons/solid";
import ChatsContainer from "../components/ChatsContainer";
import ContactsContainer from "../components/ContactsContainer";
import BellChatContainer from "../components/BellChatContainer";

const NotificationScreen = () => {
  const navigation = useNavigation();
  const civilianUser = require("../assets/images/civilian-icon.png");
  const [isPressed, setIsPressed] = useState(false);
  const [currentRole, setCurrentRole] = useState("Civilian");
  const [refreshing, setRefreshing] = React.useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentChat, setChats] = useState(true);

  const activeChats = () => setChats(true);
  const activeContacts = () => setChats(false);

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

      {/* back button left chevron with circle gray background */}
      <View className="flex-row justify-between">
        <View className="flex-row">
          <TouchableOpacity
            className=""
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View className="flex-row bg-slate-800 rounded-full p-3 items-center">
              <View className="flex-row items-center">
                <ChevronLeftIcon
                  size={20}
                  className="text-white"
                  color={"#FFF"}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View className="justify-center">
            <Text className="text-white text-2xl font-bold ml-4">
              Notifications
            </Text>
          </View>
        </View>
        <TouchableOpacity className="justify-center">
          <View className="mr-4">
            <Cog8ToothIcon color={"#FFF"} size={28} />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        className="bg-black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <View className="mt-4">
          <TouchableOpacity>
            <View className="flex-row bg-gray-700 justify-between rounded-xl p-5">
              <View className="space-y-1 ml-5">
                <Text className="text-gray-400">LINES POLICE CAD</Text>
                <Text className="text-white">
                  All Call! Lookout for person in Gray hoodie! 🚨
                </Text>
                <Text className="text-gray-400 text-xs">3 hours ago</Text>
              </View>
              <TouchableOpacity className="justify-center">
                <View>
                  <EllipsisVerticalIcon color={"#FFF"} size={36} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="mt-3">
            <View className="flex-row bg-gray-700 justify-between rounded-xl p-5">
              <View className="space-y-1 ml-5">
                <Text className="text-gray-400">LOS SANTOS RP</Text>
                <Text className="text-white">
                  Upcoming Event! Join us for a fun night! 🎉
                </Text>
                <Text className="text-gray-400 text-xs">12 hours ago</Text>
              </View>
              <TouchableOpacity className="justify-center">
                <View>
                  <EllipsisVerticalIcon color={"#FFF"} size={36} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="mt-3">
            <View className="flex-row bg-gray-700 justify-between rounded-xl p-5">
              <View className="space-y-1 ml-5">
                <Text className="text-gray-400">LINES POLICE CAD</Text>
                <Text className="text-white">
                  New update! Please update your CAD! ⭐️
                </Text>
                <Text className="text-gray-400 text-xs">24 hours ago</Text>
              </View>
              <TouchableOpacity className="justify-center">
                <View>
                  <EllipsisVerticalIcon color={"#FFF"} size={36} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    margin: 2,
  },
});

export default NotificationScreen;
