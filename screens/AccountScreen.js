import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { UserIcon, XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import DismissibleModalHeader from "../components/DismissibleModalHeader";

const AccountScreen = () => {
  const navigation = useNavigation();
  return <DismissibleModalHeader modalHeaderTitle="Account" />;
};

export default AccountScreen;
