import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { EllipsisHorizontalIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const YourDepartmentsRow = () => {
  const navigation = useNavigation();
  return (
    <>
      <View className="flex-row justify-between px-2 mt-9">
        <Text className="text-white text-lg font-semibold">
          Your Departments
        </Text>
        <TouchableOpacity>
          <Text className="text-gray-500 text-lg font-semibold">See All</Text>
        </TouchableOpacity>
      </View>
      <View className="pt-3">
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-4"
        >
          {/* add a new card that contains a spotlight image, community name and numbers of members in community */}
          <View className="flex-col">
            <TouchableOpacity onPress={() => navigation.navigate("Civilian")}>
              <Image
                source={require("../assets/images/gradient-bg1.jpg")}
                className="w-48 h-28 rounded-xl"
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  Civilian
                </Text>
                <TouchableOpacity className="flex-col justify-end">
                  <View className="flex-col mt-2">
                    <EllipsisHorizontalIcon
                      size={30}
                      color={"#FFF"}
                    ></EllipsisHorizontalIcon>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-row">
                <View className="h-3 w-3 bg-green-500 rounded-full mr-1"></View>
                <Text
                  numberOfLines={1}
                  className="text-slate-300 text-xs -top-0.5"
                >
                  102 online
                </Text>
              </View>
              <View>
                <Text
                  numberOfLines={1}
                  className="text-green-500 text-sm -top-2"
                >
                  {" "}
                </Text>
              </View>
              {/* button to learn more */}
              <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                <Text className="text-white text-md font-bold p-2">
                  Jump in
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-col">
            <TouchableOpacity>
              <Image
                source={require("../assets/images/gradient-bg2.jpg")}
                className="w-48 h-28 rounded-xl"
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  Police
                </Text>
                <TouchableOpacity className="flex-col justify-end">
                  <View className="flex-col mt-2">
                    <EllipsisHorizontalIcon
                      size={30}
                      color={"#FFF"}
                    ></EllipsisHorizontalIcon>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-row">
                <View className="h-3 w-3 bg-green-500 rounded-full mr-1"></View>
                <Text
                  numberOfLines={1}
                  className="text-slate-300 text-xs -top-0.5"
                >
                  12 online
                </Text>
              </View>
              <View>
                <Text
                  numberOfLines={1}
                  className="text-green-500 text-sm -top-2"
                >
                  {" "}
                </Text>
              </View>
              {/* button to learn more */}
              <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                <Text className="text-white text-md font-bold p-2">
                  Jump in
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-col">
            <TouchableOpacity>
              <Image
                source={require("../assets/images/gradient-bg3.jpg")}
                className="w-48 h-28 rounded-xl"
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  Dispatch
                </Text>
                <TouchableOpacity className="flex-col justify-end">
                  <View className="flex-col mt-2">
                    <EllipsisHorizontalIcon
                      size={30}
                      color={"#FFF"}
                    ></EllipsisHorizontalIcon>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-row">
                <View className="h-3 w-3 bg-green-500 rounded-full mr-1"></View>
                <Text
                  numberOfLines={1}
                  className="text-slate-300 text-xs -top-0.5"
                >
                  5 online
                </Text>
              </View>
              <View>
                <Text
                  numberOfLines={1}
                  className="text-green-500 text-sm -top-2"
                >
                  {" "}
                </Text>
              </View>
              {/* button to learn more */}
              <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                <Text className="text-white text-md font-bold p-2">
                  Jump in
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-col">
            <TouchableOpacity>
              <Image
                source={require("../assets/images/gradient-bg4.jpg")}
                className="w-48 h-28 rounded-xl"
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  Fire
                </Text>
                <TouchableOpacity className="flex-col justify-end">
                  <View className="flex-col mt-2">
                    <EllipsisHorizontalIcon
                      size={30}
                      color={"#FFF"}
                    ></EllipsisHorizontalIcon>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-row">
                <View className="h-3 w-3 bg-green-500 rounded-full mr-1"></View>
                <Text
                  numberOfLines={1}
                  className="text-slate-300 text-xs -top-0.5"
                >
                  7 online
                </Text>
              </View>
              <View>
                <Text
                  numberOfLines={1}
                  className="text-green-500 text-sm -top-2"
                >
                  {" "}
                </Text>
              </View>
              {/* button to learn more */}
              <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                <Text className="text-white text-md font-bold p-2">
                  Jump in
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-col">
            <TouchableOpacity>
              <Image
                source={require("../assets/images/gradient-bg5.jpg")}
                className="w-48 h-28 rounded-xl"
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  className="text-white text-md font-semibold pt-3"
                >
                  EMS
                </Text>
                <TouchableOpacity className="flex-col justify-end">
                  <View className="flex-col mt-2">
                    <EllipsisHorizontalIcon
                      size={30}
                      color={"#FFF"}
                    ></EllipsisHorizontalIcon>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-row">
                <View className="h-3 w-3 bg-green-500 rounded-full mr-1"></View>
                <Text
                  numberOfLines={1}
                  className="text-slate-300 text-xs -top-0.5"
                >
                  4 online
                </Text>
              </View>
              <View>
                <Text
                  numberOfLines={1}
                  className="text-green-500 text-sm -top-2"
                >
                  {" "}
                </Text>
              </View>
              {/* button to learn more */}
              <View className="flex-row justify-center bg-slate-500 rounded-xl mt-2 py-1">
                <Text className="text-white text-md font-bold p-2">
                  Jump in
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default YourDepartmentsRow;
