import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  IdentificationIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TvIcon,
} from "react-native-heroicons/solid";

const ChatScreen = () => {
  const navigation = useNavigation();
  const civilianUser = require("../assets/images/civilian-icon.png");
  const [isPressed, setIsPressed] = useState(false);
  const [currentRole, setCurrentRole] = useState("Civilian");
  const [refreshing, setRefreshing] = React.useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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

      {/* add header bar */}
      <View className="flex-row justify-between items-center bg-black p-5">
        <View className="flex-row items-center">
          <Text className="text-white text-2xl font-bold">People</Text>
        </View>
        <View className="flex-row space-x-4">
          <TouchableOpacity>
            <MagnifyingGlassIcon
              className="text-white"
              stroke={"#FFF"}
              color={"#FFF"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <PencilSquareIcon
              className="text-white"
              stroke={"#FFF"}
              strokeWidth={0.5}
              color={"#FFF"}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* add a switch to change the chat option from chats to contacts */}
      <View className="flex-row p-1 bg-slate-800 rounded-full">
        <View className="flex-row justify-between w-full">
          <View className="flex-col bg-slate-500 rounded-full p-2 w-1/2 items-center">
            <TouchableOpacity>
              <View className="flex-row items-center">
                <ChatBubbleLeftRightIcon
                  className="text-white"
                  stroke={"#FFF"}
                  color={"#FFF"}
                />
                <Text className="text-white text-md font-semibold pl-2">
                  Chats
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-col bg-slate-800 rounded-full p-2 w-1/2 items-center">
            <TouchableOpacity>
              <View className="flex-row items-center">
                <IdentificationIcon
                  className="text-white"
                  stroke={"#FFF"}
                  color={"#FFF"}
                />
                <Text className="text-white text-md font-semibold pl-2">
                  Contacts
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView
        className="bg-black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        style={{ height: "100%" }}
      >
        {/* add a row of circle profile pics of recent friends */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-4"
        >
          <View className="flex-row space-x-4 p-5">
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
                className="text-white text-xs font-semibold pt-2 w-full text-center"
              >
                Paul Ruzzo
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
                className="text-white text-xs font-semibold pt-2 w-full text-center"
              >
                Wendy King
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
              </View>
              {/* text saying discover people */}
              <Text
                numberOfLines={1}
                className="text-white text-xs font-semibold pt-2 w-full text-center"
              >
                Matt Bat
              </Text>
            </View>
            <View className="flex-col justify-around">
              {/* add rounded image of people icon */}
              <View className="flex-col">
                {/* add round solid purple background around user group icon */}

                {/* image of random person */}
                <Image
                  source={require("../assets/images/joan-carver.jpg")}
                  className="w-16 h-16 rounded-full bg-opacity-90"
                />
              </View>
              {/* text saying discover people */}
              <Text
                numberOfLines={1}
                className="text-white text-xs font-semibold pt-2 w-full text-center"
              >
                Joan Carver
              </Text>
            </View>
            <View className="flex-col justify-around">
              {/* add rounded image of people icon */}
              <View className="flex-col">
                {/* add round solid purple background around user group icon */}

                {/* image of random person */}
                <Image
                  source={require("../assets/images/lilly-patten.jpg")}
                  className="w-16 h-16 rounded-full bg-opacity-90"
                />
              </View>
              {/* text saying discover people */}
              <Text
                numberOfLines={1}
                className="text-white text-xs font-semibold pt-2 text-center w-full"
              >
                Lilly Patten
              </Text>
            </View>
          </View>
        </ScrollView>
        {/* vertical scrollable list of chats with people */}
        <View className="flex-col space-y-3">
          <TouchableOpacity>
            <View className="flex-row space-x-5 items-center px-5 pb-5">
              <Image
                source={require("../assets/images/joan-carver.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              <View className="flex-col">
                <Text
                  className="text-white text-md font-semibold"
                  numberOfLines={1}
                >
                  Joan Carver
                </Text>
                <Text
                  className="text-slate-300 text-sm w-3/4"
                  numberOfLines={1}
                >
                  🤣 Good one! Let me know when you are back online?
                </Text>
              </View>
              <Text className="text-slate-300 text-xs absolute right-0 top-3">
                Feb 14, 2024
              </Text>
            </View>
            <View
              className="border-b-slate-600 w-full absolute bottom-0"
              style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row space-x-5 items-center px-5 pb-5">
              <Image
                source={require("../assets/images/matt-bat.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              <View className="flex-col">
                <Text
                  className="text-white text-md font-semibold"
                  numberOfLines={1}
                >
                  Matt Bat
                </Text>
                <Text
                  className="text-slate-300 text-sm w-3/4"
                  numberOfLines={1}
                >
                  Let's hit some balls at the golf course. ⛳️
                </Text>
              </View>
              <Text className="text-slate-300 text-xs absolute right-0 top-3">
                Jan 1, 2024
              </Text>
            </View>
            <View
              className="border-b-slate-600 w-full absolute bottom-0"
              style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row space-x-5 items-center px-5 pb-5">
              <Image
                source={require("../assets/images/wendy-king.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              <View className="flex-col">
                <Text
                  className="text-white text-md font-semibold"
                  numberOfLines={1}
                >
                  Wendy King
                </Text>
                <Text
                  className="text-slate-300 text-sm w-3/4"
                  numberOfLines={1}
                >
                  I'm ready to go out for dinner. 🍽
                </Text>
              </View>
              <Text className="text-slate-300 text-xs absolute right-0 top-3">
                Dec 24, 2023
              </Text>
            </View>
            <View
              className="border-b-slate-600 w-full absolute bottom-0"
              style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row space-x-5 items-center px-5 pb-5">
              <Image
                source={require("../assets/images/paul-ruzzo.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              <View className="flex-col">
                <Text
                  className="text-white text-md font-semibold"
                  numberOfLines={1}
                >
                  Paul Ruzzo
                </Text>
                <Text className="text-slate-300 text-sm" numberOfLines={1}>
                  👍 Sounds good
                </Text>
              </View>
              <Text className="text-slate-300 text-xs absolute right-0 top-3">
                Feb 1, 2024
              </Text>
            </View>
            <View
              className="border-b-slate-600 w-full absolute bottom-0"
              style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
            />
          </TouchableOpacity>
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

export default ChatScreen;
