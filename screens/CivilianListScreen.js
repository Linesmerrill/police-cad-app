import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/outline";
import HeaderRow from "../components/HeaderRow";

const CivilianListScreen = () => {
  const navigation = useNavigation();
  const activeRoleIcon = require("../assets/images/civilian-icon.png");

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
        icon="back"
      />
      <SafeAreaView>
        <Text>Searchable List of Civs</Text>
      </SafeAreaView>
    </>
  );
};

export default CivilianListScreen;
