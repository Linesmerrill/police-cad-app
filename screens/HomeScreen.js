import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CommunityRow from "../components/CommunityRow";
import MultiplayerRow from "../components/MultiplayerRow";
import TrendingFreeCommunitiesRow from "../components/TrendingFreeCommunitiesRow";
import PromotionalCardLarge from "../components/PromotionalCardLarge";
import BellChatContainer from "../components/BellChatContainer";
import FriendsOnlineRow from "../components/FriendsOnlineRow";
import SpotlightRow from "../components/SpotlightRow";
import DiscoverPeopleRow from "../components/DiscoverPeopleRow";
import LastAccessedCommunityRow from "../components/LastAccessedCommunityRow";
import { fetchProtectedData } from "../services/api";

const HomeScreen = ({ emailAddress }) => {
  const navigation = useNavigation();
  const email = emailAddress;
  const [refreshing, setRefreshing] = React.useState(false);

  const communityDetails = {
    communityImage:
      "https://images.unsplash.com/photo-1608889175157-718b6205a50d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    communityName: "Lines Police CAD Community",
    LastAccessedInHours: 2,
  };

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

  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetchProtectedData();
  //     setMessage(result.success ? result.data : result.message);
  //   };

  //   fetchData();
  // }, []);

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
        <LastAccessedCommunityRow communityDetails={communityDetails} />

        {/* horizontal scrollable round images of friends */}
        <FriendsOnlineRow />

        {/* horizontal spotlight scrollable cards with large images */}
        <SpotlightRow email={email} />

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
