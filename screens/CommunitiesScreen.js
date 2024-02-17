import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BellIcon, ChatBubbleLeftIcon } from "react-native-heroicons/solid";
import CommunityRow from "../components/CommunityRow";
import YourCommunitiesRow from "../components/YourCommunitiesRow";
import BellChatContainer from "../components/BellChatContainer";

const CommunitiesScreen = () => {
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
          <Text className="text-white text-2xl font-bold">Communities</Text>
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
        <YourCommunitiesRow />
        <CommunityRow />
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

export default CommunitiesScreen;
