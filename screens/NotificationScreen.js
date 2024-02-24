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

      {/* add header bar */}
      <View className="flex-row justify-between items-center bg-black p-5">
        <View className="flex-row items-center">
          <TouchableOpacity
            className="flex-row"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon className="text-white" color={"#FFF"} />
            <HomeIcon className="text-white" color={"#FFF"} />
          </TouchableOpacity>
          <Text className="text-white text-2xl font-bold"></Text>
        </View>
        <View className="flex-row space-x-4">
          {/* <BellChatContainer /> */}
        </View>
      </View>
      <ScrollView
        className="bg-black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      ></ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
});

export default NotificationScreen;
