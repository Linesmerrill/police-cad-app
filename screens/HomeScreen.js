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
import HomeScreenWelcomeCarousel from "../components/HomeScreenWelcomeCarousel";
import { Card, Paragraph, Title } from "react-native-paper";

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
    <ScrollView className="bg-black">
      <SafeAreaView>
        <View className="mb-10">
          <Text className="text-3xl text-white">Welcome, first_name</Text>
        </View>
        <View className="flex-1 flex-row flex-wrap justify-around bg-black">
          <TouchableOpacity onPress={() => navigation.navigate("Civilian")}>
            <Card className="w-[150px] h-[150px] m-3">
              <Card.Content>
                <Title>Civilian</Title>
                <Paragraph>View civilian data</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Police")}>
            <Card className="w-[150px] h-[150px] m-3">
              <Card.Content>
                <Title>Police</Title>
                <Paragraph>View police data</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Dispatch")}>
            <Card className="w-[150px] h-[150px] m-3">
              <Card.Content>
                <Title>Dispatch</Title>
                <Paragraph>View dispatch data</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("FireEMS")}>
            <Card className="w-[150px] h-[150px] m-3">
              <Card.Content>
                <Title>Fire/EMS</Title>
                <Paragraph>View fire/ems data</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Community")}>
            <Card className="w-[150px] h-[150px] m-3">
              <Card.Content>
                <Title>Community</Title>
                <Paragraph>View community data</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
