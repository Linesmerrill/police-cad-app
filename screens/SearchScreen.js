import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  BellIcon,
  ChatBubbleLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
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
        className="bg-black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* add header bar */}
        <View className="flex-row justify-between items-center bg-black p-5">
          <View className="flex-row items-center">
            <Text className="text-white text-2xl font-bold">Search</Text>
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

        {/* search bar that can accept input */}
        <View className="bg-black p-5">
          <View className="bg-gray-800 rounded-full p-3">
            <TextInput
              style={{ color: "white" }}
              placeholder="Search"
              placeholderTextColor="white"
            />
          </View>
        </View>

        {/* add section called popular searches that contains a list of searched items */}
        <View className="bg-black p-5">
          <Text className="text-white text-xl font-bold">Popular Searches</Text>
          <View className="flex-col">
            <View className="flex-row">
              <TouchableOpacity>
                <Text className="text-white text-lg">
                  <MagnifyingGlassIcon
                    size={20}
                    className="text-white"
                    color={"#FFF"}
                    // width={20}
                  />{" "}
                  Food
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text className="text-white text-lg">
                <MagnifyingGlassIcon
                  size={20}
                  className="text-white"
                  color={"#FFF"}
                  // width={20}
                />{" "}
                Clothing
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-white text-lg">
                <MagnifyingGlassIcon
                  size={20}
                  className="text-white"
                  color={"#FFF"}
                  // width={20}
                />{" "}
                Shelter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-white text-lg">
                <MagnifyingGlassIcon
                  size={20}
                  className="text-white"
                  color={"#FFF"}
                  // width={20}
                />{" "}
                Jobs
              </Text>
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

export default SearchScreen;
