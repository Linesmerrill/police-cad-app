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
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChevronLeftIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import CommunityRow from "../components/CommunityRow";
import BellChatContainer from "../components/BellChatContainer";

const SearchPeopleScreen = () => {
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

      {/* search bar that can accept input */}
      <View className="bg-black flex-row space-x-4">
        {/* back button left chevron with circle gray background */}
        <TouchableOpacity
          className=""
          onPress={() => {
            navigation.navigate("Chat");
          }}
        >
          <View className="flex-row bg-slate-800 rounded-full p-3 items-center">
            <View className="flex-row items-center">
              <ChevronLeftIcon
                size={20}
                className="text-white"
                color={"#FFF"}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View className="flex-row bg-gray-800 rounded-full p-3 space-x-2">
          <MagnifyingGlassIcon
            size={20}
            className="text-white"
            color={"#FFF"}
          />
          <TextInput
            className="w-3/4"
            style={{ color: "white" }}
            placeholder="Search for people"
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <ScrollView
        className="bg-black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Suggested for you */}
        <View className="bg-black px-3 pt-8">
          <Text className="text-white text-md font-bold">
            Suggested for you
          </Text>
        </View>

        {/* horizontal line */}
        <View className="bg-black px-3 pt-3">
          <View className="bg-slate-800 h-0.5 w-full"></View>
        </View>

        {/*  */}
        <View>
          <View className="flex-row mt-3">
            {/* round profile pic */}
            <View className="bg-black p-3">
              <Image
                className="w-20 h-20 rounded-full"
                source={require("../assets/images/paul-ruzzo.jpg")}
              />
            </View>
            <View className="justify-center mt-4">
              <View className="flex-row w-5/6 justify-between">
                <View className="flex-col justify-center">
                  {/* name */}
                  <Text className="text-white text-md font-semibold">
                    Paul Ruzzo
                  </Text>
                  {/* role */}
                  <Text className="text-slate-300 text-sm">@Paul.Ruzzo</Text>
                  <Text className="text-slate-500 font-semibold text-xs">
                    Suggested for you
                  </Text>
                </View>
                <View className="justify-center pb-6">
                  {/* ellipsis */}
                  <TouchableOpacity>
                    <EllipsisHorizontalIcon size={30} color={"#FFF"} />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row">
                {/* follow button */}
                <TouchableOpacity>
                  <View className="flex-row bg-blue-600 rounded-xl mt-2 py-1 px-12">
                    <Text className="text-white text-md font-bold p-1.5">
                      Follow
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* dismiss button */}
                <TouchableOpacity>
                  <View className="flex-row bg-slate-800 rounded-xl mt-2 py-1 px-12 ml-2">
                    <Text className="text-white text-md font-bold p-1.5">
                      Dismiss
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="flex-row mt-3">
            {/* round profile pic */}
            <View className="bg-black p-3">
              <Image
                className="w-20 h-20 rounded-full"
                source={require("../assets/images/wendy-king.jpg")}
              />
            </View>
            <View className="justify-center mt-4">
              <View className="flex-row w-5/6 justify-between">
                <View className="flex-col justify-center">
                  {/* name */}
                  <Text className="text-white text-md font-semibold">
                    Wendy King
                  </Text>
                  {/* role */}
                  <Text className="text-slate-300 text-sm">@King.Wendy</Text>
                  <Text className="text-slate-500 font-semibold text-xs">
                    Suggested for you
                  </Text>
                </View>
                <View className="justify-center pb-6">
                  {/* ellipsis */}
                  <TouchableOpacity>
                    <EllipsisHorizontalIcon size={30} color={"#FFF"} />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row">
                {/* follow button */}
                <TouchableOpacity>
                  <View className="flex-row bg-blue-600 rounded-xl mt-2 py-1 px-12">
                    <Text className="text-white text-md font-bold p-1.5">
                      Follow
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* dismiss button */}
                <TouchableOpacity>
                  <View className="flex-row bg-slate-800 rounded-xl mt-2 py-1 px-12 ml-2">
                    <Text className="text-white text-md font-bold p-1.5">
                      Dismiss
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="flex-row mt-3">
            {/* round profile pic */}
            <View className="bg-black p-3">
              <Image
                className="w-20 h-20 rounded-full"
                source={require("../assets/images/matt-bat.jpg")}
              />
            </View>
            <View className="justify-center mt-4">
              <View className="flex-row w-5/6 justify-between">
                <View className="flex-col justify-center">
                  {/* name */}
                  <Text className="text-white text-md font-semibold">
                    Charles King
                  </Text>
                  {/* role */}
                  <Text className="text-slate-300 text-sm">@KingofEngland</Text>
                  <Text className="text-slate-500 font-semibold text-xs">
                    Suggested for you
                  </Text>
                </View>
                <View className="justify-center pb-6">
                  {/* ellipsis */}
                  <TouchableOpacity>
                    <EllipsisHorizontalIcon size={30} color={"#FFF"} />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row">
                {/* follow button */}
                <TouchableOpacity>
                  <View className="flex-row bg-blue-600 rounded-xl mt-2 py-1 px-12">
                    <Text className="text-white text-md font-bold p-1.5">
                      Follow
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* dismiss button */}
                <TouchableOpacity>
                  <View className="flex-row bg-slate-800 rounded-xl mt-2 py-1 px-12 ml-2">
                    <Text className="text-white text-md font-bold p-1.5">
                      Dismiss
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="flex-row mt-3">
            {/* round profile pic */}
            <View className="bg-black p-3">
              <Image
                className="w-20 h-20 rounded-full"
                source={require("../assets/images/joan-carver.jpg")}
              />
            </View>
            <View className="justify-center mt-4">
              <View className="flex-row w-5/6 justify-between">
                <View className="flex-col justify-center">
                  {/* name */}
                  <Text className="text-white text-md font-semibold">
                    Joan Carver
                  </Text>
                  {/* role */}
                  <Text className="text-slate-300 text-sm">@JoanCarver22</Text>
                  <Text className="text-slate-500 font-semibold text-xs">
                    Suggested for you
                  </Text>
                </View>
                <View className="justify-center pb-6">
                  {/* ellipsis */}
                  <TouchableOpacity>
                    <EllipsisHorizontalIcon size={30} color={"#FFF"} />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row">
                {/* follow button */}
                <TouchableOpacity>
                  <View className="flex-row bg-blue-600 rounded-xl mt-2 py-1 px-12">
                    <Text className="text-white text-md font-bold p-1.5">
                      Follow
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* dismiss button */}
                <TouchableOpacity>
                  <View className="flex-row bg-slate-800 rounded-xl mt-2 py-1 px-12 ml-2">
                    <Text className="text-white text-md font-bold p-1.5">
                      Dismiss
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="flex-row mt-3">
            {/* round profile pic */}
            <View className="bg-black p-3">
              <Image
                className="w-20 h-20 rounded-full"
                source={require("../assets/images/lilly-patten.jpg")}
              />
            </View>
            <View className="justify-center mt-4">
              <View className="flex-row w-5/6 justify-between">
                <View className="flex-col justify-center">
                  {/* name */}
                  <Text className="text-white text-md font-semibold">
                    Alex King
                  </Text>
                  {/* role */}
                  <Text className="text-slate-300 text-sm">@AlexKing</Text>
                  <Text className="text-slate-500 font-semibold text-xs">
                    Suggested for you
                  </Text>
                </View>
                <View className="justify-center pb-6">
                  {/* ellipsis */}
                  <TouchableOpacity>
                    <EllipsisHorizontalIcon size={30} color={"#FFF"} />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row">
                {/* follow button */}
                <TouchableOpacity>
                  <View className="flex-row bg-blue-600 rounded-xl mt-2 py-1 px-12">
                    <Text className="text-white text-md font-bold p-1.5">
                      Follow
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* dismiss button */}
                <TouchableOpacity>
                  <View className="flex-row bg-slate-800 rounded-xl mt-2 py-1 px-12 ml-2">
                    <Text className="text-white text-md font-bold p-1.5">
                      Dismiss
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
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

export default SearchPeopleScreen;
