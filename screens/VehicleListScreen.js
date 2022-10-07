import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import HeaderRow from "../components/HeaderRow";

const VehicleListScreen = () => {
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
        <Text>Searchable List of Vehicles</Text>
      </SafeAreaView>
    </>
  );
};

export default VehicleListScreen;
