import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import CommunityRow from "../components/CommunityRow";
import YourCommunitiesRow from "../components/YourCommunitiesRow";
import ProfileRow from "../components/ProfileRow";
import MenuItemsContainer from "../components/MenuItemsContainer";

const MenuScreen = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
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
      <View className="flex-row justify-between items-center bg-black py-3 px-2">
        <View className="flex-row items-center">
          <Text className="text-white text-2xl font-bold">Menu</Text>
        </View>
      </View>

      <ScrollView
        className="bg-black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ProfileRow />
        <MenuItemsContainer />
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

export default MenuScreen;
