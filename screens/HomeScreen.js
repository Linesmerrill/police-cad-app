import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowRightCircleIcon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";

import { ArrowRightIcon } from "react-native-heroicons/solid";
import RoleIcon from "../components/RoleIcon";

const HomeScreen = () => {
  const navigation = useNavigation();
  const civilianUser = require("../assets/images/civilian-icon.png");
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
            {/* <Image
              source={require("../assets/icon.png")}
              className="h-9 w-12"
            /> */}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Account")}>
            <UserIcon className="flex-1" size={35} color="#1B96D6" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <SafeAreaView>
        <ScrollView>
          <Text className="text-xl text-[#02284F] font-semibold m-4">
            Welcome!
          </Text>
          {/* Civilian Card */}
          <TouchableOpacity
            className="shadow-sm relative"
            onPress={() => navigation.navigate("Civilian")}
          >
            <View className="flex-row mb-4 mx-4 items-center">
              <Image
                source={require("../assets/images/civilian-home-view.png")}
                className="rounded h-36 w-full"
              />
              <Text className="absolute top-2 left-2 text-lg text-white  font-bold">
                Civilian
              </Text>
              <View className="absolute bottom-2 right-2 font-bold">
                <ArrowRightCircleIcon size={28} color="white" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Police Card */}
          <TouchableOpacity
            className="shadow-sm relative"
            onPress={() => navigation.navigate("Police")}
          >
            <View className="flex-row mb-4 mx-4 items-center">
              <Image
                source={require("../assets/images/police-home-view.png")}
                className="rounded h-36 w-full"
              />
              <Text className="absolute top-2 left-2 text-lg text-white  font-bold">
                Police
              </Text>
              <View className="absolute bottom-2 right-2 font-bold">
                <ArrowRightCircleIcon size={28} color="white" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Dispatch Card */}
          <TouchableOpacity
            className="shadow-sm relative"
            onPress={() => navigation.navigate("Dispatch")}
          >
            <View className="flex-row mb-4 mx-4 items-center">
              <Image
                source={require("../assets/images/dispatch-home-view.png")}
                className="rounded h-36 w-full"
              />
              <Text className="absolute top-2 left-2 text-lg text-white  font-bold">
                Dispatch
              </Text>
              <View className="absolute bottom-2 right-2 font-bold">
                <ArrowRightCircleIcon size={28} color="white" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Fire/EMS Card */}
          <TouchableOpacity
            className="shadow-sm relative"
            onPress={() => navigation.navigate("FireEms")}
          >
            <View className="flex-row mb-4 mx-4 items-center">
              <Image
                source={require("../assets/images/fire-ems-home-view.png")}
                className="rounded h-36 w-full"
              />
              <Text className="absolute top-2 left-2 text-lg text-white  font-bold">
                Fire/EMS
              </Text>
              <View className="absolute bottom-2 right-2 font-bold">
                <ArrowRightCircleIcon size={28} color="white" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Communities Card */}
          <TouchableOpacity
            className="shadow-sm relative"
            onPress={() => navigation.navigate("Communities")}
          >
            <View className="flex-row mb-40 mx-4 items-center">
              <Image
                source={require("../assets/images/community-home-view.png")}
                className="rounded h-36 w-full"
              />
              <Text className="absolute top-2 left-2 text-lg text-white  font-bold">
                Communities
              </Text>
              <View className="absolute bottom-2 right-2 font-bold">
                <ArrowRightCircleIcon size={28} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>

      {isPressed && <RoleIcon />}
    </>
  );
};

export default HomeScreen;
