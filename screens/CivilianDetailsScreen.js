import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  RefreshControl,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { EyeIcon } from "react-native-heroicons/solid";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const CivilianDetailsScreen = () => {
  const navigation = useNavigation();
  const civilianUser = require("../assets/images/civilian-icon.png");
  const [isPressed, setIsPressed] = useState(false);
  const [currentRole, setCurrentRole] = useState("Civilian");
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-row">
        <TouchableOpacity
          className=""
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View className="flex-row bg-slate-800 rounded-full p-3 items-center">
            <View className="flex-row items-center">
              <ChevronLeftIcon
                size={20}
                className="text-white"
                color={"#FFF"}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView
          className="bg-black"
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
        >
          {/* image rounded in the middle */}
          <View className="flex-row justify-center">
            <View className="flex-col items-center">
              <Image
                source={require("../assets/images/gradient-bg1.jpg")}
                className="w-28 h-28 rounded-full"
              />
              <View className="flex-row justify-around">
                <Text
                  numberOfLines={1}
                  className="text-white text-lg font-semibold pt-3"
                >
                  Rodger Pike
                </Text>
              </View>
              <View className="flex-row justify-around">
                <Text numberOfLines={1} className="text-slate-300 text-xs">
                  Lines Police CAD, Los Santos Community
                </Text>
              </View>

              {/* button to learn more */}
              {/* <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
              <Text className="text-white text-md font-bold p-2">View</Text>
            </View> */}
            </View>
          </View>
          {/* text inputs with person details */}
          <View className="flex-row justify-around mt-4">
            <View className="flex-col space-y-2">
              <View className="flex-row justify-between mx-4">
                <TouchableOpacity className="flex-row w-full justify-between">
                  <Text className="text-gray-500 text-lg font-semibold">
                    First Name
                  </Text>

                  <Text className="text-lg font-bold text-white">Rodger</Text>
                  {/* horizontal line */}
                </TouchableOpacity>
              </View>
              <View className="w-full h-0.5 bg-gray-700"></View>
              <View className="flex-row justify-between mx-4">
                <TouchableOpacity className="flex-row w-full justify-between">
                  <Text className="text-gray-500 text-lg font-semibold">
                    Last Name
                  </Text>

                  <Text className="text-lg font-bold text-white">Pike</Text>
                  {/* horizontal line */}
                </TouchableOpacity>
              </View>
              <View className="w-full h-0.5 bg-gray-700"></View>
              <View className="flex-row justify-between mx-4">
                <TouchableOpacity className="flex-row w-full justify-between">
                  <Text className="text-gray-500 text-lg font-semibold">
                    Date of Birth
                  </Text>

                  <Text className="text-lg font-bold text-white">
                    04/17/1980
                  </Text>
                  {/* horizontal line */}
                </TouchableOpacity>
              </View>
              <View className="w-full h-0.5 bg-gray-700"></View>
              <View className="flex-row justify-between mx-4">
                <TouchableOpacity className="flex-row w-full justify-between">
                  <Text className="text-gray-500 text-lg font-semibold">
                    Phone
                  </Text>

                  <Text className="text-lg font-bold text-white">
                    555-444-3333
                  </Text>
                  {/* horizontal line */}
                </TouchableOpacity>
              </View>
              <View className="w-full h-0.5 bg-gray-700"></View>
              <View className="flex-row justify-between mx-4">
                <TouchableOpacity className="flex-row w-full justify-between">
                  <Text className="text-gray-500 text-lg font-semibold">
                    Address
                  </Text>

                  <Text className="text-lg font-bold text-white">
                    1234 N Main St, Los Santos, SA
                  </Text>
                  {/* horizontal line */}
                </TouchableOpacity>
              </View>
              <View className="w-full h-0.5 bg-gray-700"></View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "black",
  },
});

export default CivilianDetailsScreen;
