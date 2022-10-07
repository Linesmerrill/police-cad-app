import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";
import UserCategory from "../components/RoleIcon";
import RoleIcon from "../components/RoleIcon";
import HeaderRow from "../components/HeaderRow";

const PoliceScreen = () => {
  const navigation = useNavigation();
  const activeRoleIcon = require("../assets/images/police-icon.png");
  const [isPressed, setIsPressed] = useState(false);
  const [currentRole, setCurrentRole] = useState("Police");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <HeaderRow
        currentRole="Police"
        imageLocation={activeRoleIcon}
        icon="home"
      />

      <SafeAreaView>
        <Text>Police Dashboard</Text>
      </SafeAreaView>
    </>
  );
};

export default PoliceScreen;
