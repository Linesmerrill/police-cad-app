import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
  RefreshControl,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowRightCircleIcon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";

import {
  ArrowRightIcon,
  BellAlertIcon,
  BellIcon,
  ChatBubbleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  HomeIcon,
  PencilIcon,
  ShareIcon,
  TvIcon,
  UserGroupIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";
import RoleIcon from "../components/RoleIcon";
import HomeScreenWelcomeCarousel from "../components/HomeScreenWelcomeCarousel";
import { Card, Paragraph, Title } from "react-native-paper";
import CommunityRow from "../components/CommunityRow";
import MultiplayerRow from "../components/MultiplayerRow";
import TrendingFreeCommunitiesRow from "../components/TrendingFreeCommunitiesRow";
import PromotionalCardLarge from "../components/PromotionalCardLarge";
import BellChatContainer from "../components/BellChatContainer";
import MenuScreen from "./MenuScreen";
import EventsRow from "../components/EventsRow";

const CommunityHomeScreen = () => {
  const navigation = useNavigation();
  const civilianUser = require("../assets/images/civilian-icon.png");
  const [isPressed, setIsPressed] = useState(false);
  const [currentRole, setCurrentRole] = useState("Civilian");
  const [refreshing, setRefreshing] = React.useState(false);

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
          <BellChatContainer />
        </View>
      </View>
      <ScrollView
        className="bg-black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-col justify-center">
          <View>
            <Image
              source={{
                uri: "https://i.ibb.co/F4XgwyT/lines-police-cad-community-cover-photo.jpg",
              }}
              className="w-full h-52 rounded-xl"
            />
            <TouchableOpacity className="absolute top-4 right-4 white">
              <ShareIcon color={"#FFF"} size={30} />
            </TouchableOpacity>

            {/* add a round profile picture of the community in the bottom left corner with the following url image: https://images.unsplash.com/photo-1608889175157-718b6205a50d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D. it has a white border around the outside of the image */}

            <View className="absolute -bottom-5 left-0">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1608889175157-718b6205a50d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className="w-20 h-20 rounded-full border-4 border-white"
              />
            </View>
          </View>
          {/* community name */}
          <View className="flex-row justify-between items-center p-5">
            <Text className="text-white text-xl font-semibold">
              Lines Police CAD Community
            </Text>
            {/* on press it should navigate to the community management page */}
            <TouchableOpacity
              onPress={() => navigation.navigate("CommunityManagement")}
            >
              <View className="flex-row items-center space-x-1 border-white border-2 rounded-lg p-2">
                <PencilIcon color={"#FFF"} size={10} />
                <Text className="text-white text-sm font-semibold">
                  Edit Page
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* members online */}
          <View className="flex-row justify-between items-center px-5">
            <TouchableOpacity>
              <View className="flex-row items-center space-x-2">
                <Text className="text-white text-lg font-semibold"> 475</Text>
                <Text className="text-gray-300 text-base ">Members</Text>
                <ChevronRightIcon color={"#FFF"} size={20} />
              </View>
            </TouchableOpacity>
            <View className="flex-row items-center space-x-1">
              {/* green dot */}
              <View className="h-3 w-3 bg-green-500 rounded-full"></View>
              <Text className="text-white text-sm font-semibold"> 25</Text>
              <Text className="text-white text-sm">Online</Text>
            </View>
          </View>
          {/* community description */}
          <View className="flex-col p-5">
            <Text className="text-white text-sm font-semibold">
              Welcome to Lines Police CAD. We are a community of law enforcement
              professionals who use Lines Police CAD to manage their
              departments.
            </Text>
          </View>

          {/* Cards of upcoming events with images and descriptions that are clickable */}
          <View className="flex-col p-5">
            <Text className="text-white text-2xl font-bold">
              Upcoming Events
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              className=""
            >
              <EventsRow />
            </ScrollView>
          </View>

          {/* Cards of past events with images and descriptions that are clickable */}
          <View className="flex-col p-5">
            <Text className="text-white text-2xl font-bold">Past Events</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              className="flex-row space-x-4"
            >
              <EventsRow />
            </ScrollView>
          </View>
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
  },
});

export default CommunityHomeScreen;
