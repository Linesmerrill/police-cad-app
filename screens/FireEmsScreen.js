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

const FireEmsScreen = () => {
  const navigation = useNavigation();
  const activeRoleIcon = require("../assets/images/fire-ems-icon.png");
  const [isPressed, setIsPressed] = useState(false);
  const [currentRole, setCurrentRole] = useState("Fire/EMS");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <HeaderRow
        currentRole="Fire/EMS"
        imageLocation={activeRoleIcon}
        icon="home"
      />

      <SafeAreaView>
        <Text>Police Dashboard</Text>
      </SafeAreaView>
    </>
  );
};

export default FireEmsScreen;
