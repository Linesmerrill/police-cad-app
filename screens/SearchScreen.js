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
import CommunityRow from "../components/CommunityRow";

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
          <View className="flex-row bg-gray-800 rounded-full p-3 space-x-2">
            <MagnifyingGlassIcon
              size={20}
              className="text-white"
              color={"#FFF"}
            />
            <TextInput
              style={{ color: "white" }}
              placeholder="Search communities, people, and more"
              placeholderTextColor="gray"
            />
          </View>
        </View>

        {/* popular searches */}
        <View className="bg-black p-5">
          <Text className="text-white text-xl font-bold mb-2">
            Popular Searches
          </Text>
          <View className="flex-col space-y-2">
            <View className="flex-row">
              <TouchableOpacity>
                <Text className="text-white text-md pl-3">
                  <MagnifyingGlassIcon
                    size={20}
                    className="text-white"
                    color={"#FFF"}
                    // width={20}
                  />{" "}
                  San Andreas Community
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text className="text-white text-md pl-3">
                <MagnifyingGlassIcon
                  size={20}
                  className="text-white"
                  color={"#FFF"}
                  // width={20}
                />{" "}
                Max Thorton
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-white text-md pl-3">
                <MagnifyingGlassIcon
                  size={20}
                  className="text-white"
                  color={"#FFF"}
                  // width={20}
                />{" "}
                Paleto Bay Official Community
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-white text-md pl-3">
                <MagnifyingGlassIcon
                  size={20}
                  className="text-white"
                  color={"#FFF"}
                  // width={20}
                />{" "}
                Los Santos Community
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* communities you may like */}
        <View className="bg-black p-5">
          <Text className="text-white text-xl font-bold">
            Communities you may like
          </Text>
        </View>
        <View className="-top-5">
          <CommunityRow />
        </View>

        {/* not finding what you're looking for? */}
        <View className="flex-row justify-center">
          <Text className="text-white text-md font-bold">
            Not finding what you're looking for?
          </Text>
        </View>
        <View className="flex-row justify-center">
          <View className="flex-col">
            <TouchableOpacity>
              <View className="flex-row justify-center bg-slate-500 rounded-3xl mx-3 mt-3 py-2 mb-3">
                <View className="flex-col justify-center ml-5">
                  <MagnifyingGlassIcon className="text-white" color={"#FFF"} />
                </View>
                <Text className="text-white text-md font-semibold p-2 mr-3">
                  Search Keywords
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

export default SearchScreen;
