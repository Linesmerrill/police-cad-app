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
  HomeModernIcon,
  PlusCircleIcon,
  PlusSmallIcon,
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
import StatsRow from "../components/VehicleStatsRow";

const CivilianScreen = () => {
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
            onPress={() => navigation.navigate("Community")}
          >
            <ChevronLeftIcon className="text-white" color={"#FFF"} />
            <HomeModernIcon className="text-white" color={"#FFF"} />
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
        <StatsRow
          stats={{
            stat1: "124",
            text1: "Civilians",
            stat2: "$20k+",
            text2: "Fines",
            stat3: "140+",
            text3: "Warrants",
          }}
        />
        <View className="m-2">
          {/* horizontal scrollable cards of civilians */}
          <View className="flex-row justify-between mb-4">
            <Text className="text-xl font-bold text-white">Civilians</Text>
            <TouchableOpacity>
              <Text className="text-lg font-bold text-gray-500"> View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            className="space-x-5"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex-row space-x-4">
              <View className="flex-col">
                <TouchableOpacity>
                  <Image
                    source={require("../assets/images/gradient-bg1.jpg")}
                    className="w-28 h-28 rounded-full"
                  />
                  <View className="flex-row justify-around">
                    <Text
                      numberOfLines={1}
                      className="text-white text-md font-semibold pt-3"
                    >
                      Rodger Pike
                    </Text>
                  </View>
                  <View className="flex-row justify-around">
                    <Text numberOfLines={1} className="text-slate-300 text-xs">
                      DOB: 12/12/1980
                    </Text>
                  </View>

                  {/* button to learn more */}
                  <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                    <Text className="text-white text-md font-bold p-2">
                      View
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-col">
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/gradient-bg2.jpg")}
                  className="w-28 h-28 rounded-full"
                />
                <View className="flex-row justify-around">
                  <Text
                    numberOfLines={1}
                    className="text-white text-md font-semibold pt-3"
                  >
                    Phil Collins
                  </Text>
                </View>
                <View className="flex-row justify-around">
                  <Text numberOfLines={1} className="text-slate-300 text-xs">
                    DOB: 1/1/1980
                  </Text>
                </View>

                {/* button to learn more */}
                <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                  <Text className="text-white text-md font-bold p-2">View</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-col">
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/gradient-bg6.jpg")}
                  className="w-28 h-28 rounded-full"
                />
                <View className="flex-row justify-around">
                  <Text
                    numberOfLines={1}
                    className="text-white text-md font-semibold pt-3"
                  >
                    John Doe
                  </Text>
                </View>
                <View className="flex-row justify-around">
                  <Text numberOfLines={1} className="text-slate-300 text-xs">
                    DOB: 12/12/1980
                  </Text>
                </View>

                {/* button to learn more */}
                <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                  <Text className="text-white text-md font-bold p-2">View</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-col">
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/gradient-bg4.jpg")}
                  className="w-28 h-28 rounded-full"
                />
                <View className="flex-row justify-around">
                  <Text
                    numberOfLines={1}
                    className="text-white text-md font-semibold pt-3"
                  >
                    Jane Doe
                  </Text>
                </View>
                <View className="flex-row justify-around">
                  <Text numberOfLines={1} className="text-slate-300 text-xs">
                    DOB: 6/9/1990
                  </Text>
                </View>

                {/* button to learn more */}
                <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                  <Text className="text-white text-md font-bold p-2">View</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-col">
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/gradient-bg5.jpg")}
                  className="w-28 h-28 rounded-full"
                />
                <View className="flex-row justify-around">
                  <Text
                    numberOfLines={1}
                    className="text-white text-md font-semibold pt-3"
                  >
                    Matt Smith
                  </Text>
                </View>
                <View className="flex-row justify-around">
                  <Text numberOfLines={1} className="text-slate-300 text-xs">
                    DOB: 4/4/1980
                  </Text>
                </View>

                {/* button to learn more */}
                <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                  <Text className="text-white text-md font-bold p-2">View</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* end of horizontal scrollable cards of civilians */}
        </View>
      </ScrollView>
      <TouchableOpacity>
        <View className="absolute bottom-3 right-3">
          <PlusCircleIcon className="text-white" size={60} color={"#FFF"} />
        </View>
      </TouchableOpacity>
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

export default CivilianScreen;
