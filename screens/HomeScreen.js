import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
  RefreshControl,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowRightCircleIcon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";

import {
  ArrowRightIcon,
  BellAlertIcon,
  BellIcon,
  ChatBubbleLeftIcon,
} from "react-native-heroicons/solid";
import RoleIcon from "../components/RoleIcon";
import HomeScreenWelcomeCarousel from "../components/HomeScreenWelcomeCarousel";
import { Card, Paragraph, Title } from "react-native-paper";

const HomeScreen = () => {
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
        className="bg-black mb-20"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* add header bar */}
        <View className="flex-row justify-between items-center bg-black p-5">
          <View className="flex-row items-center">
            <Text className="text-white text-2xl font-bold">Explore</Text>
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

        {/* currently active community card with button to get started */}

        <View className="justify-between flex-row bg-slate-700 bg-opacity-90 rounded-3xl p-3">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Dispatch");
            }}
          >
            <View className="flex-row">
              {/* add rounded image of icon */}
              <Image
                source={require("../assets/images/dispatch-icon.png")}
                className="w-10 h-10 rounded-full bg-white"
              />
              <View className="flex-col">
                <Text className="text-white text-lg font-semibold pl-5">
                  Lines Police CAD Community
                </Text>
                <View className="flex-row justify-start">
                  {/* green dot icon */}
                  <View className="bg-green-500 w-3 h-3 rounded-full ml-5" />
                  {/* last accessed text */}
                  <Text className="text-green-500 text-sm pl-2 -top-1">
                    Last Accessed 2h ago
                  </Text>
                </View>
              </View>
              <View className="flex-row bg-slate-500 rounded-3xl ml-4 justify-between">
                <Text className="text-white text-base font-semibold pt-2.5 pl-3 mr-2">
                  Join
                </Text>
                <View className="m-2.5 ml-1">
                  <ArrowRightIcon
                    className="w-10 h-10 text-white font-semibold"
                    color={"#FFF"}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* horizontal scrollable section for communities */}
        <View className="flex-row justify-between bg-black p-5">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Communities");
            }}
          >
            <Text className="text-white text-2xl">Communities</Text>
            <ArrowRightCircleIcon className="w-10 h-10 text-white" />
          </TouchableOpacity>
        </View>

        {/* click on a box to get started: civilian, police, fire, ems */}
        <View className="space-y-7 justify-between p-5">
          <TouchableOpacity
            onPress={() => {
              setCurrentRole("Civilian");
              navigation.navigate("Civilian");
            }}
          >
            <Card>
              <Card.Cover source={civilianUser} />
              <Card.Content>
                <Title>Civilian</Title>
                <Paragraph>Click here to get started</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCurrentRole("Police");
              navigation.navigate("Police");
            }}
          >
            <Card>
              <Card.Cover
                className="w-20 h-20"
                source={require("../assets/images/police-icon.png")}
              />
              <Card.Content>
                <Title>Police</Title>
                <Paragraph>Click here to get started</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCurrentRole("Police");
              navigation.navigate("Police");
            }}
          >
            <Card>
              <Card.Cover
                source={require("../assets/images/fire-ems-icon.png")}
              />
              <Card.Content>
                <Title>Fire</Title>
                <Paragraph>Click here to get started</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCurrentRole("EMS");
              navigation.navigate("Ems");
            }}
          >
            <Card>
              <Card.Cover
                source={require("../assets/images/fire-ems-icon.png")}
              />
              <Card.Content>
                <Title>EMS</Title>
                <Paragraph>Click here to get started</Paragraph>
              </Card.Content>
            </Card>
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

export default HomeScreen;
