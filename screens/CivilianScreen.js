import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowRightIcon,
  ChartPieIcon,
  ChevronDownIcon,
  FireIcon,
  HeartIcon,
  HomeIcon,
  TruckIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import UserCategory from "../components/RoleIcon";
import RoleIcon from "../components/RoleIcon";
import HeaderRow from "../components/HeaderRow";
import { PlusCircleIcon } from "react-native-heroicons/solid";
import CivilianRow from "../components/CivilianRow";
import FirearmRow from "../components/FirearmRow";
import VehicleRow from "../components/VehicleRow";
import * as Animatable from "react-native-animatable";

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
      <HeaderRow
        currentRole="Civilian"
        imageLocation={activeRoleIcon}
        icon="home"
      />
      <ScrollView className="">
        <SafeAreaView className="flex-1 mb-20">
          {/* Horizontal Scroll for featured items */}
          <View className="flex-row justify-between m-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                className="relative mr-2"
                onPress={() => navigation.navigate("CreateCivilian")}
              >
                <View className="bg-[#02284F] items-center h-20 w-20 rounded-lg justify-center">
                  <View className="absolute top-1 right-1">
                    <PlusCircleIcon size={20} color="white" />
                  </View>
                  <View>
                    <UserIcon size={37} color="white" />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                className="relative mr-2"
                onPress={() => navigation.navigate("CreateVehicle")}
              >
                <View className="bg-[#025C59] items-center h-20 w-20 rounded-lg justify-center">
                  <View className="absolute top-1 right-1">
                    <PlusCircleIcon size={20} color="white" />
                  </View>
                  <View>
                    <TruckIcon size={40} color="white" />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                className="relative mr-2"
                onPress={() => navigation.navigate("CreateFirearm")}
              >
                <View className="bg-[#A83B00] items-center h-20 w-20 rounded-lg justify-center">
                  <View className="absolute top-1 right-1">
                    <PlusCircleIcon size={20} color="white" />
                  </View>
                  <View>
                    <FireIcon size={40} color="white" />
                  </View>
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
                View your civilians
              </Text>
            </TouchableOpacity>

            {/* List of Civilians */}
            <CivilianRow />
          </View>

          <View className="ml-4 border-gray-500">
            <TouchableOpacity
              onPress={() => navigation.navigate("VehicleList")}
            >
              <View className="flex-row items-center justify-between pr-4">
                <Text className="text-lg h-10 mt-2 font-bold">Vehicles</Text>
                <ArrowRightIcon color="#02284F" />
              </View>

              <Text className="text-xs text-gray-500 -mt-4">
                View your vehicles
              </Text>
            </TouchableOpacity>

            {/* List of Civilians */}
            <VehicleRow />
          </View>

          <View className="ml-4 border-gray-500">
            <TouchableOpacity
              onPress={() => navigation.navigate("FirearmList")}
            >
              <View className="flex-row items-center justify-between pr-4">
                <Text className="text-lg h-10 mt-2 font-bold">Firearms</Text>
                <ArrowRightIcon color="#02284F" />
              </View>

              <Text className="text-xs text-gray-500 -mt-4">
                View your firearms
              </Text>
            </TouchableOpacity>

            {/* List of Civilians */}
            <FirearmRow />
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default CivilianScreen;
