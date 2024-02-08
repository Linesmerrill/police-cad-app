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
  TvIcon,
  UserGroupIcon,
} from "react-native-heroicons/solid";
import RoleIcon from "../components/RoleIcon";
import HomeScreenWelcomeCarousel from "../components/HomeScreenWelcomeCarousel";
import { Card, Paragraph, Title } from "react-native-paper";

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
    }, 2000);
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
      <ScrollView
        className="bg-black mb-20"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* add header bar */}
        <View className="flex-row justify-between items-center bg-black p-5">
          <View className="flex-row items-center">
            <Text className="text-white text-2xl font-bold">Jump Back In</Text>
          </View>
          <View className="flex-row space-x-4">
            <TouchableOpacity>
              <BellIcon className="text-white" color={"#FFF"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <ChatBubbleLeftIcon className="text-white" color={"#FFF"} />
            </TouchableOpacity>
          </View>
        </View>

        {/* currently active community card with button to get started */}
        <View className="justify-between flex-row bg-slate-700 bg-opacity-90 rounded-3xl p-3">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Dispatch");
            }}
          >
            <View className="flex-row">
              {/* add rounded image of icon */}
              <Image
                source={require("../assets/images/dispatch-icon.png")}
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
        <View className="flex-row space-x-4 p-5">
          <View className="flex-col justify-around">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}
              <View className="bg-purple-500 w-16 h-16 rounded-full bg-opacity-90" />
              <UserGroupIcon
                className=""
                top={16}
                left={16}
                size={32}
                position="absolute"
                color={"#FFF"}
              />
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={2}
              className="text-white text-xs font-semibold pt-2 w-16 text-center"
            >
              Discover People
            </Text>
          </View>
          <View className="flex-col justify-around">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}
              <View className="bg-blue-500 w-16 h-16 rounded-full bg-opacity-90" />
              <TvIcon
                className=""
                top={16}
                left={16}
                size={32}
                position="absolute"
                color={"#FFF"}
              />
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-15 text-center"
            >
              Join Party
            </Text>
            <Text
              numberOfLines={1}
              className="text-green-500 text-xs font-semibold w-15 text-center"
            >
              Rec Room
            </Text>
          </View>
          <View className="flex-col justify-around">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}

              {/* image of random person */}
              <Image
                source={require("../assets/images/paul-ruzzo.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              <View
                className="bg-green-500 w-3 h-3 rounded-full ml-5"
                position="absolute"
                bottom={3}
                right={3}
              />
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-12 text-center"
            >
              Paul Ruzzo
            </Text>
            <Text
              numberOfLines={1}
              className="text-green-500 text-xs font-semibold w-12 text-center"
            >
              LPC Community
            </Text>
          </View>
          <View className="flex-col justify-around">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}

              {/* image of random person */}
              <Image
                source={require("../assets/images/wendy-king.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              <View
                className="bg-green-500 w-3 h-3 rounded-full ml-5"
                position="absolute"
                bottom={3}
                right={3}
              />
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-12 text-center"
            >
              Wendy King
            </Text>
            <Text
              numberOfLines={1}
              className="text-green-500 text-xs font-semibold w-12 text-center"
            >
              Vibing
            </Text>
          </View>
          <View className="flex-col justify-around">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}

              {/* image of random person */}
              <Image
                source={require("../assets/images/matt-bat.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              {/* <View
                className="bg-green-500 w-3 h-3 rounded-full ml-5"
                position="absolute"
                bottom={3}
                right={3}
              /> */}
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-12 text-center"
            >
              Matt Bat
            </Text>
            <Text
              numberOfLines={1}
              className="text-gray-500 text-xs font-semibold w-12 text-center"
            >
              30m ago
            </Text>
          </View>
        </View>

        {/* new section called Spotlight */}
        <View className="flex-row justify-between p-5">
          <Text className="text-white text-2xl font-bold">Spotlight</Text>
          <TouchableOpacity>
            <Text className="text-green-500 text-lg font-semibold">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        {/* horizontal scrollable cards with large images */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-4 p-5"
        >
          <View className="flex-col">
            <Image
              source={require("../assets/images/spotlight-1.jpg")}
              className="w-60 h-60 rounded-3xl"
            />
            <Text
              numberOfLines={1}
              className="text-white text-lg font-semibold pt-2"
            >
              Top Community of 2023
            </Text>
            <Text
              numberOfLines={1}
              className="text-green-500 text-sm font-semibold"
            >
              1h ago
            </Text>
          </View>
          <View className="flex-col">
            <Image
              source={require("../assets/images/spotlight-2.jpg")}
              className="w-60 h-60 rounded-3xl"
            />
            <Text
              numberOfLines={1}
              className="text-white text-lg font-semibold pt-2"
            >
              How to Organize your Community
            </Text>
          </View>
        </ScrollView>

        {/*  */}
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
