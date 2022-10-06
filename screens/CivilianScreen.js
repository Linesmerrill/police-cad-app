import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowRightIcon,
  ChartPieIcon,
  ChevronDownIcon,
  HeartIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import UserCategory from "../components/RoleIcon";
import RoleIcon from "../components/RoleIcon";

const CivilianScreen = () => {
  const navigation = useNavigation();
  const activeRoleIcon = require("../assets/images/civilian-icon.png");
  const [isPressed, setIsPressed] = useState(false);
  const [currentRole, setCurrentRole] = useState("Civilian");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <SafeAreaView className="bg-[#02284F] pt-5">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 justify-between">
          <View className="flex-row space-x-2">
            <Image
              source={activeRoleIcon}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />

            <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
              <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">
                  Logged in as
                </Text>
                <Text className="font-bold text-xl text-white">
                  {currentRole}
                  <ChevronDownIcon size={20} color="#1B96D6" />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <UserIcon className="flex-1" size={35} color="#1B96D6" />
        </View>
      </SafeAreaView>

      <ScrollView>
        <SafeAreaView className="flex-1">
          {/* Horizontal Scroll for featured items */}
          <View className="flex-row justify-between m-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity className="relative mr-2">
                <View className="bg-[#02284F] items-center h-20 w-20 rounded-lg justify-center">
                  <UserIcon size={20} color="white" />
                  <Text className="text-white">Civilians</Text>
                  <Text className="text-white">23</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="relative mr-2">
                <View className="bg-[#02284F] items-center h-20 w-20 rounded-lg justify-center">
                  <ChartPieIcon size={20} color="white" />
                  <Text className="text-white">Vehicles</Text>
                  <Text className="text-white">23</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="relative mr-2">
                <View className="bg-[#02284F] items-center h-20 w-20 rounded-lg justify-center">
                  <HeartIcon size={20} color="white" />
                  <Text className="text-white">Firearms</Text>
                  <Text className="text-white">23</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View className="ml-4 border-b border-gray-500">
            <Text className="text-xl font-bold ">Civilian Dashboard</Text>
          </View>

          <View className="ml-4 border-gray-500">
            <TouchableOpacity
              onPress={() => navigation.navigate("CivilianList")}
            >
              <View className="flex-row items-center justify-between pr-4">
                <Text className="text-lg h-10 mt-2 font-bold">Civilians</Text>
                <ArrowRightIcon color="#02284F" />
              </View>

              <Text className="text-xs text-gray-500 -mt-4">
                View your current civilians
              </Text>
            </TouchableOpacity>
            <View className="flex-row mt-2">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* Civilian Card */}
                <TouchableOpacity className="relative mr-2">
                  <View className="bg-[#02284F] items-center h-40 w-40 rounded-lg justify-center">
                    <UserIcon size={40} color="white" />
                    <Text className="text-white">Billy Thors</Text>
                    <Text className="text-white">2001-01-01</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="relative mr-2">
                  <View className="bg-[#02284F] items-center h-40 w-40 rounded-lg justify-center">
                    <UserIcon size={40} color="white" />
                    <Text className="text-white">Brad Pitt</Text>
                    <Text className="text-white">2001-04-23</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="relative mr-2">
                  <View className="bg-[#02284F] items-center h-40 w-40 rounded-lg justify-center">
                    <UserIcon size={40} color="white" />
                    <Text className="text-white">Rodger Pike</Text>
                    <Text className="text-white">2000-07-13</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="relative mr-2">
                  <View className="bg-[#02284F] items-center h-40 w-40 rounded-lg justify-center">
                    <UserIcon size={40} color="white" />
                    <Text className="text-white">Hulk Hogan</Text>
                    <Text className="text-white">2001-01-01</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="relative mr-2">
                  <View className="bg-[#02284F] items-center h-40 w-40 rounded-lg justify-center">
                    <UserIcon size={40} color="white" />
                    <Text className="text-white">Peter Griffin</Text>
                    <Text className="text-white">1997-07-22</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>

      {isPressed && <RoleIcon />}
    </>
  );
};

export default CivilianScreen;
