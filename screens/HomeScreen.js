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
  EllipsisHorizontalIcon,
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
import FriendsOnlineRow from "../components/FriendsOnlineRow";
import SpotlightRow from "../components/SpotlightRow";
import DiscoverPeopleRow from "../components/DiscoverPeopleRow";

const HomeScreen = () => {
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
          <Text className="text-white text-2xl font-bold">Jump Back In</Text>
        </View>
        <BellChatContainer />
      </View>
      <ScrollView
        className="bg-black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* currently active community card with button to get started */}
        <View className="justify-between flex-row bg-slate-700 bg-opacity-90 rounded-3xl p-3">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CommunityHome");
            }}
          >
            <View className="flex-row">
              {/* add rounded image of icon */}
              <Image
                source={require("../assets/images/community-icon.jpg")}
                className="w-10 h-10 rounded-full bg-white"
              />
              <View className="flex-col">
                <Text
                  className="text-white text-lg font-semibold pl-5"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Lines Police CAD Community
                </Text>
                <View className="flex-row justify-start">
                  {/* green dot icon */}
                  <View className="bg-green-500 w-3 h-3 rounded-full ml-5" />
                  {/* last accessed text */}
                  <Text className="text-green-500 text-sm pl-2 -top-1">
                    Last Accessed 2h ago
                  </Text>
                </View>
              </View>
              <View className="flex-row bg-slate-500 rounded-3xl ml-4 justify-between">
                <Text className="text-white text-base font-semibold pt-2.5 pl-3 mr-2">
                  Join
                </Text>
                <View className="m-2.5 ml-1">
                  <ArrowRightIcon
                    className="w-10 h-10 text-white font-semibold"
                    color={"#FFF"}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* horizontal scrollable round images of friends */}
        <FriendsOnlineRow />

        {/* new section called Spotlight */}
        <View className="flex-row justify-between px-5 pt-5">
          <Text className="text-white text-xl font-bold">Spotlight</Text>
          <TouchableOpacity>
            <Text className="text-gray-500 text-lg font-semibold">See All</Text>
          </TouchableOpacity>
        </View>

        {/* horizontal scrollable cards with large images */}
        <SpotlightRow />

        {/* new section called discover people, with horizontal scrolling cards that contain profile pictures and names for people to add as friends */}
        <View className="flex-row justify-between px-5 pt-5">
          <Text className="text-white text-xl font-bold">Discover People</Text>
          <TouchableOpacity>
            <Text className="text-gray-500 text-lg font-semibold">See All</Text>
          </TouchableOpacity>
        </View>

        {/* horizontal scrollable cards with large images */}
        <DiscoverPeopleRow />

        <CommunityRow />
        <MultiplayerRow />
        <TrendingFreeCommunitiesRow />

        <View className="mb-5"></View>

        {/* promotional large cards */}
        <PromotionalCardLarge />

        <PromotionalCardLarge />

        <PromotionalCardLarge />

        <PromotionalCardLarge />

        <View className=" flex-row justify-around align-middle mt-24 mb-24">
          <View className="flex-col">
            <Text className="text-white text-2xl font-bold">
              New Communities await
            </Text>
            <Text className="text-white text-lg font-medium">
              Get more out of your community.
            </Text>
            <TouchableOpacity>
              <View className="bg-white mx-10 mt-5 rounded-xl">
                <Text className="text-black text-md font-medium p-3 text-center">
                  Learn More
                </Text>
              </View>
            </TouchableOpacity>
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

export default HomeScreen;
