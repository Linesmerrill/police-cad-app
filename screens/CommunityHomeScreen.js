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
  EllipsisHorizontalIcon,
  HomeIcon,
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
            onPress={() => navigation.navigate("HomeScreen")}
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
              source={require("../assets/images/discover-community5.jpg")}
              className="w-full h-52 rounded-xl"
            />
            <TouchableOpacity className="absolute top-4 right-4 white">
              <ShareIcon color={"#FFF"} size={30} />
            </TouchableOpacity>
            <Text className=" absolute bottom-0 text-white text-2xl font-bold p-5">
              Lines Police CAD
            </Text>
          </View>
          {/* members online */}
          <View className="flex-row justify-between items-center p-5">
            <View className="flex-row items-center">
              <Text className="text-white text-2xl font-bold">Members</Text>
              <Text className="text-white text-sm font-semibold"> 475</Text>
            </View>
            <View className="flex-row items-center">
              {/* green dot */}
              <View className="h-3 w-3 bg-green-500 rounded-full mr-1"></View>
              <Text className="text-white text-sm font-semibold">Online</Text>
              <Text className="text-white text-sm font-semibold"> 25</Text>
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
              className="flex-row space-x-4"
            >
              <View className="flex-row space-x-4">
                <PromotionalCardLarge
                  className="w-52"
                  image={require("../assets/images/discover-community1.jpg")}
                  title="Lines Police CAD"
                  description="Join us for our weekly training session."
                />
                <PromotionalCardLarge
                  image={require("../assets/images/discover-community2.jpg")}
                  title="Lines Police CAD"
                  description="Join us for our weekly training session."
                />
              </View>
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
              <View className="flex-row space-x-4">
                <PromotionalCardLarge
                  image={require("../assets/images/discover-community3.jpg")}
                  title="Lines Police CAD"
                  description="Join us for our weekly training session."
                />
                <PromotionalCardLarge
                  image={require("../assets/images/discover-community4.jpg")}
                  title="Lines Police CAD"
                  description="Join us for our weekly training session."
                />
              </View>
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
