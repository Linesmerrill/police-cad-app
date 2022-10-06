import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/outline";

const CivilianListScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={navigation.goBack}
        className="rounded-full absolute top-3 left-1 m-4 mt-12"
      >
        <XCircleIcon color="#00CCBB" height={50} width={50} />
      </TouchableOpacity>
      <Text>CivilianListScreen</Text>
    </SafeAreaView>
  );
};

export default CivilianListScreen;
