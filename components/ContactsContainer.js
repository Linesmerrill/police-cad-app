import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import {
  ArrowRightIcon,
  CameraIcon,
  ChevronRightIcon,
  CloudIcon,
  FlagIcon,
  UserPlusIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";
import { ChatBubbleLeftRightIcon } from "react-native-heroicons/outline";

const ContactsContainer = () => {
  return (
    <View>
      {/* promotional header */}
      <TouchableOpacity>
        <View className="flex-row p-5 space-x-5">
          <View>
            <Image
              className="w-14 h-14 rounded-xl"
              source={require("../assets/images/flag-bg.jpg")}
            />
            <FlagIcon
              style={{ position: "absolute", top: 14, left: 14 }}
              color={"#FFF"}
            />
          </View>
          <View className="flex-row space-x-16">
            <View>
              <Text className="text-white text-md font-semibold">
                Meet people while playing
              </Text>
              <Text className="text-slate-400 text-sm">
                Try the most popular communities
              </Text>
            </View>
            <View className="">
              <ChevronRightIcon color={"#FFF"} />
            </View>
          </View>
        </View>
        <View
          className="border-b-slate-600 w-full absolute bottom-0"
          style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
        />
      </TouchableOpacity>

      {/* Categories */}
      <View>
        <Text className="text-white text-lg font-semibold p-5">Categories</Text>
        <TouchableOpacity>
          <View>
            <View className="flex-row p-5 space-x-5">
              <View>
                <Image
                  className="w-10 h-10 rounded-full"
                  source={require("../assets/images/paul-ruzzo.jpg")}
                />
              </View>
              <View className="flex-row space-x-16">
                <View>
                  <Text className="text-white text-md font-semibold">
                    Accounts you don't follow back
                  </Text>
                  <Text className="text-slate-400 text-sm">paul.ruzzo</Text>
                </View>
                <View className="">
                  <ChevronRightIcon color={"#FFF"} />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Discover People */}
        <View>
          <View className="flex-row justify-between px-5 pt-5">
            <Text className="text-white text-md font-bold">
              Discover People
            </Text>
            <TouchableOpacity>
              <Text className="text-gray-500 text-md font-bold">See All</Text>
            </TouchableOpacity>
          </View>
          <View className="py-5">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              className="flex-row space-x-4"
            >
              <View className="flex-col bg-slate-800 rounded-2xl">
                {/* add an x in the top right corner to dismiss the current card */}
                <View className="flex-row justify-end">
                  <TouchableOpacity>
                    <XMarkIcon
                      position="absolute"
                      right={15}
                      top={15}
                      color={"rgb(100, 116, 139)"}
                    ></XMarkIcon>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-around ml-8 mr-8">
                  <Image
                    source={require("../assets/images/paul-ruzzo.jpg")}
                    className="w-20 h-20 rounded-full bg-opacity-90 m-4"
                  />
                </View>
                <View className="flex-row justify-around">
                  <Text
                    numberOfLines={1}
                    className="text-white text-md font-semibold"
                  >
                    paul.ruzzo
                  </Text>
                </View>
                <View className="flex-row justify-around">
                  <Text
                    numberOfLines={1}
                    className="text-gray-200 text-xs pt-1"
                  >
                    Suggested for you
                  </Text>
                </View>
                {/* follow button */}
                <View className="flex-row justify-center bg-slate-500 rounded-2xl mx-3 mt-7 py-2 mb-3">
                  <TouchableOpacity>
                    <Text className="text-white text-md font-semibold p-2">
                      Follow
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-col bg-slate-800 rounded-2xl">
                {/* add an x in the top right corner to dismiss the current card */}
                <View className="flex-row justify-end">
                  <TouchableOpacity>
                    <XMarkIcon
                      position="absolute"
                      right={15}
                      top={15}
                      color={"rgb(100, 116, 139)"}
                    ></XMarkIcon>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-around ml-8 mr-8">
                  <Image
                    source={require("../assets/images/wendy-king.jpg")}
                    className="w-20 h-20 rounded-full bg-opacity-90 m-4"
                  />
                </View>
                <View className="flex-row justify-around">
                  <Text
                    numberOfLines={1}
                    className="text-white text-md font-semibold"
                  >
                    wendy.king
                  </Text>
                </View>
                <View className="flex-row justify-around">
                  <Text
                    numberOfLines={1}
                    className="text-gray-200 text-xs pt-1"
                  >
                    Suggested for you
                  </Text>
                </View>
                {/* follow button */}
                <View className="flex-row justify-center bg-slate-500 rounded-2xl mx-3 mt-7 py-2 mb-3">
                  <TouchableOpacity>
                    <Text className="text-white text-md font-semibold p-2">
                      Follow
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-col bg-slate-800 rounded-2xl">
                {/* add an x in the top right corner to dismiss the current card */}
                <View className="flex-row justify-end">
                  <TouchableOpacity>
                    <XMarkIcon
                      position="absolute"
                      right={15}
                      top={15}
                      color={"rgb(100, 116, 139)"}
                    ></XMarkIcon>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-around ml-8 mr-8">
                  <Image
                    source={require("../assets/images/matt-bat.jpg")}
                    className="w-20 h-20 rounded-full bg-opacity-90 m-4"
                  />
                </View>
                <View className="flex-row justify-around">
                  <Text
                    numberOfLines={1}
                    className="text-white text-md font-semibold"
                  >
                    matt.bat
                  </Text>
                </View>
                <View className="flex-row justify-around">
                  <Text
                    numberOfLines={1}
                    className="text-gray-200 text-xs pt-1"
                  >
                    Suggested for you
                  </Text>
                </View>
                {/* follow button */}
                <View className="flex-row justify-center bg-slate-500 rounded-2xl mx-3 mt-7 py-2 mb-3">
                  <TouchableOpacity>
                    <Text className="text-white text-md font-semibold p-2">
                      Follow
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-col bg-slate-800 rounded-2xl">
                {/* add an x in the top right corner to dismiss the current card */}
                <View className="flex-row justify-end">
                  <TouchableOpacity>
                    <XMarkIcon
                      position="absolute"
                      right={15}
                      top={15}
                      color={"rgb(100, 116, 139)"}
                    ></XMarkIcon>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-around ml-8 mr-8">
                  <Image
                    source={require("../assets/images/joan-carver.jpg")}
                    className="w-20 h-20 rounded-full bg-opacity-90 m-4"
                  />
                </View>
                <View className="flex-row justify-around">
                  <Text
                    numberOfLines={1}
                    className="text-white text-md font-semibold"
                  >
                    joan.carver
                  </Text>
                </View>
                <View className="flex-row justify-around">
                  <Text
                    numberOfLines={1}
                    className="text-gray-200 text-xs pt-1"
                  >
                    Suggested for you
                  </Text>
                </View>
                {/* follow button */}
                <View className="flex-row justify-center bg-slate-500 rounded-2xl mx-3 mt-7 py-2 mb-3">
                  <TouchableOpacity>
                    <Text className="text-white text-md font-semibold p-2">
                      Follow
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        {/* end of Discover People */}

        {/* Following */}
        <View>
          <View className="px-5 pb-5">
            <View className="flex-row justify-between">
              <Text className="text-white text-lg font-bold">
                Following (5)
              </Text>
              <TouchableOpacity className="justify-end">
                <Text className="text-gray-500 text-md font-bold">
                  See Followers (743)
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View className="flex-row"></View>
            </TouchableOpacity>
          </View>

          <View className="space-y-5">
            <View className="px-5 flex-row justify-between">
              <TouchableOpacity className="flex-row">
                <Image
                  className="w-16 h-16 rounded-full"
                  source={require("../assets/images/paul-ruzzo.jpg")}
                />
                <View className="flex-col pl-1">
                  <Text className="text-white text-md font-semibold">
                    Paul Ruzzo
                  </Text>
                  <Text className="text-slate-400 text-sm">@paul.ruzzo</Text>
                  <View className="flex-row space-x-2">
                    <View className="flex-row">
                      <CloudIcon className="w-0.5 h-0.5" color={"#FFF"} />
                      <Text className="text-white pt-1 pl-1">Paul Ruzzo</Text>
                    </View>
                    <View className="flex-row">
                      <CameraIcon className="w-0.5 h-0.5" color={"#FFF"} />
                      <Text className="text-white pt-1 pl-1">RuzzoPaul</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View className="flex-row space-x-2">
                <TouchableOpacity>
                  <View className="bg-slate-500 rounded-full p-3">
                    <UserPlusIcon className="w-1 h-1" color={"#FFF"} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="bg-slate-500 rounded-full p-3">
                    <ChatBubbleLeftRightIcon
                      className="w-1 h-1"
                      color={"#FFF"}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View className="px-5 flex-row justify-between">
              <TouchableOpacity className="flex-row">
                <Image
                  className="w-16 h-16 rounded-full"
                  source={require("../assets/images/wendy-king.jpg")}
                />
                <View className="flex-col pl-1">
                  <Text
                    className="text-white text-md font-semibold w-30"
                    numberOfLines={1}
                  >
                    Wendy King
                  </Text>
                  <Text
                    className="text-slate-400 text-sm w-30"
                    numberOfLines={1}
                  >
                    @wendy.king
                  </Text>
                  <View className="flex-row space-x-2">
                    <View className="flex-row">
                      <CloudIcon className="w-0.5 h-0.5" color={"#FFF"} />
                      <Text
                        className="text-white pt-1 pl-1 w-20"
                        numberOfLines={1}
                      >
                        WendyKing
                      </Text>
                    </View>
                    <View className="flex-row">
                      <CameraIcon className="w-0.5 h-0.5" color={"#FFF"} />
                      <Text
                        className="text-white pt-1 pl-1 w-20"
                        numberOfLines={1}
                      >
                        WendyTheDancer
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View className="flex-row space-x-2">
                <TouchableOpacity>
                  <View className="bg-slate-500 rounded-full p-3">
                    <UserPlusIcon className="w-1 h-1" color={"#FFF"} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="bg-slate-500 rounded-full p-3">
                    <ChatBubbleLeftRightIcon
                      className="w-1 h-1"
                      color={"#FFF"}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View className="px-5 flex-row justify-between">
              <TouchableOpacity className="flex-row">
                <Image
                  className="w-16 h-16 rounded-full"
                  source={require("../assets/images/matt-bat.jpg")}
                />
                <View className="flex-col pl-1">
                  <Text
                    className="text-white text-md font-semibold w-30"
                    numberOfLines={1}
                  >
                    Matt Bat
                  </Text>
                  <Text
                    className="text-slate-400 text-sm w-30"
                    numberOfLines={1}
                  >
                    @matt.bat
                  </Text>
                  <View className="flex-row space-x-2">
                    {/* <View className="flex-row">
                      <CloudIcon className="w-0.5 h-0.5" color={"#FFF"} />
                      <Text
                        className="text-white pt-1 pl-1 w-20"
                        numberOfLines={1}
                      >
                        MattTheBat
                      </Text>
                    </View>
                    <View className="flex-row">
                      <CameraIcon className="w-0.5 h-0.5" color={"#FFF"} />
                      <Text
                        className="text-white pt-1 pl-1 w-20"
                        numberOfLines={1}
                      >
                        WendyTheDancer
                      </Text>
                    </View> */}
                  </View>
                </View>
              </TouchableOpacity>
              <View className="flex-row space-x-2">
                <TouchableOpacity>
                  <View className="bg-slate-500 rounded-full p-3">
                    <UserPlusIcon className="w-1 h-1" color={"#FFF"} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="bg-slate-500 rounded-full p-3">
                    <ChatBubbleLeftRightIcon
                      className="w-1 h-1"
                      color={"#FFF"}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View className="px-5 flex-row justify-between">
              <TouchableOpacity className="flex-row">
                <Image
                  className="w-16 h-16 rounded-full"
                  source={require("../assets/images/joan-carver.jpg")}
                />
                <View className="flex-col pl-1">
                  <Text
                    className="text-white text-md font-semibold w-30"
                    numberOfLines={1}
                  >
                    Joan Carver
                  </Text>
                  <Text
                    className="text-slate-400 text-sm w-30"
                    numberOfLines={1}
                  >
                    @joan.carver123
                  </Text>
                  <View className="flex-row space-x-2">
                    <View className="flex-row">
                      <CloudIcon className="w-0.5 h-0.5" color={"#FFF"} />
                      <Text
                        className="text-white pt-1 pl-1 w-20"
                        numberOfLines={1}
                      >
                        JoanCarverxx
                      </Text>
                    </View>
                    <View className="flex-row">
                      <CameraIcon className="w-0.5 h-0.5" color={"#FFF"} />
                      <Text
                        className="text-white pt-1 pl-1 w-20"
                        numberOfLines={1}
                      >
                        Carver_Joan
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View className="flex-row space-x-2">
                <TouchableOpacity>
                  <View className="bg-slate-500 rounded-full p-3">
                    <UserPlusIcon className="w-1 h-1" color={"#FFF"} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="bg-slate-500 rounded-full p-3">
                    <ChatBubbleLeftRightIcon
                      className="w-1 h-1"
                      color={"#FFF"}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* end of Following */}
      </View>
      {/* end of Categories */}
    </View>
  );
};

export default ContactsContainer;
