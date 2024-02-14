import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  BookmarkIcon,
  CalendarIcon,
  ChevronRightIcon,
  Cog8ToothIcon,
  HeartIcon,
} from "react-native-heroicons/solid";
import {
  BanknotesIcon,
  QuestionMarkCircleIcon,
  WalletIcon,
} from "react-native-heroicons/outline";

const MenuItemsContainer = () => {
  return (
    <View>
      <View className="flex-row">
        <View className="flex-col mt-8 items-center">
          <TouchableOpacity className="items-center">
            <View className="flex-row justify-between items-center bg-purple-500 p-5 rounded-xl">
              <BookmarkIcon size={26} color={"#FFF"} />
            </View>
            <Text className="text-white text-xs font-medium mt-3">Saved</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-col mt-8 ml-10 items-center">
          <TouchableOpacity className="items-center">
            <View className="flex-row justify-between items-center bg-pink-500 p-5 rounded-xl">
              <HeartIcon size={26} color={"#FFF"} />
            </View>
            <Text className="text-white text-xs font-medium mt-3">
              Favorites
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-col mt-8 ml-10 items-center">
          <TouchableOpacity className="items-center">
            <View className="flex-row justify-between items-center bg-green-600  p-5 rounded-xl">
              <Cog8ToothIcon size={26} color={"#FFF"} />
            </View>
            <Text className="text-white text-xs font-medium mt-3">
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity className="flex-row bg-blue-700 mt-6 rounded-lg justify-between">
          <View className="flex-col items-center p-4">
            <View className="flex-row space-x-2 items-center">
              <BanknotesIcon className="" size={25} color={"#FFF"} />
              <View className="flex-col w-5/6">
                <Text className="text-white text-sm font-semibold">
                  Refer a friend and earn rewards
                </Text>
                <Text className="text-white text-xs" numberOfLines={2}>
                  Earn perks for your community for every person you refer.
                  Terms apply.
                </Text>
              </View>
              <ChevronRightIcon className="" size={20} color={"#FFF"} />
            </View>
            <View
              className="border-b-white w-full mt-1 mb-1"
              style={{ borderBottomWidth: StyleSheet.hairlineWidth * 2 }}
            />
            <View>
              <Text className="text-white text-xs pt-1 font-medium">
                12,917 referrals sent in the past day
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-col mt-7">
        <View className="flex-row">
          <TouchableOpacity className="flex-row justify-between w-full">
            <View className="flex-row">
              <View className="justify-center">
                <WalletIcon size={25} color={"#FFF"} />
              </View>
              <View className="flex-col pl-4">
                <Text className="text-white text-sm font-bold">Wallet</Text>
                <Text className="text-slate-300 text-xs">
                  Payment methods, gift cards, and more
                </Text>
              </View>
            </View>
            <View className="justify-center pr-2">
              <ChevronRightIcon size={20} color={"#FFF"} />
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex-row mt-6">
          <TouchableOpacity className="flex-row justify-between w-full">
            <View className="flex-row">
              <View className="justify-center">
                <QuestionMarkCircleIcon size={25} color={"#FFF"} />
              </View>
              <View className="flex-col pl-4">
                <Text className="text-white text-sm font-bold">
                  Help and Support
                </Text>
                {/* <Text className="text-slate-300 text-xs">
                  Payment methods, gift cards, and more
                </Text> */}
              </View>
            </View>
            <View className="justify-center pr-2">
              <ChevronRightIcon size={20} color={"#FFF"} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MenuItemsContainer;
