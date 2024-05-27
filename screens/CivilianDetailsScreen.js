import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  RefreshControl,
  Modal,
  Dimensions,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { EyeIcon, XMarkIcon } from "react-native-heroicons/solid";
import {
  ChevronLeftIcon,
  PencilIcon,
  PencilSquareIcon,
} from "react-native-heroicons/outline";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { Animated } from "react-native";

const CivilianDetailsScreen = () => {
  const navigation = useNavigation();
  const civilianUser = require("../assets/images/civilian-icon.png");
  const [isPressed, setIsPressed] = useState(false);
  const [currentRole, setCurrentRole] = useState("Civilian");
  const [refreshing, setRefreshing] = React.useState(false);

  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useState(
    new Animated.Value(-Dimensions.get("window").height)
  )[0];

  const handleEdit = () => {
    setModalVisible(true);
  };

  const handleSave = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: -Dimensions.get("window").height * 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const closeModal = () => {
    setModalVisible(false);
    slideAnim.setValue(Dimensions.get("window").height);
  };

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
              {/* make image clickable so people can upload their own profile pic, also show a pencil icon */}

              <TouchableOpacity>
                <Image
                  source={require("../assets/images/civ-selfie-1.png")}
                  className="w-28 h-28 rounded-full"
                />
                {/* add blue circle background around pencil icon */}
                <View className="flex-row bg-blue-500 rounded-full p-2 items-center absolute bottom-0 right-0">
                  <PencilIcon size={20} className="text-white" color={"#FFF"} />
                </View>
              </TouchableOpacity>
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
                <TouchableOpacity
                  className="flex-row w-full justify-between"
                  onPress={openModal}
                >
                  <Text className="text-gray-500 text-lg font-semibold">
                    First Name
                  </Text>

                  {/* quarter screen modal */}

                  <Modal
                    visible={modalVisible}
                    animationType="none"
                    transparent={true}
                    onRequestClose={() => {
                      setModalVisible(false);
                    }}
                  >
                    <TouchableOpacity onPress={closeModal}>
                      <View style={styles.overlay} />
                    </TouchableOpacity>

                    <Animated.View
                      style={[styles.modal, { bottom: slideAnim }]}
                      className="rounded-lg bg-white p-4"
                    >
                      <TouchableOpacity
                        //   style={styles.overlay}
                        onPress={closeModal}
                      >
                        <XMarkIcon
                          color={"#FFF"}
                          style={{
                            position: "absolute",
                            top: 2,
                            right: 2,
                          }}
                        />
                      </TouchableOpacity>
                      <Text className=" text-gray-300">First Name</Text>
                      <TextInput
                        value={text}
                        onChangeText={setText}
                        style={styles.input}
                      />
                      {/* styled save button with background of light blue*/}
                      <TouchableOpacity onPress={handleSave}>
                        <View className="bg-blue-500 rounded-lg p-2 items-center">
                          <Text className="text-white text-md font-bold p-2">
                            Save
                          </Text>
                        </View>
                      </TouchableOpacity>

                      {/* <Button title="Save" onPress={handleSave} /> */}
                    </Animated.View>
                  </Modal>

                  <Text
                    className="text-lg font-bold text-white"
                    value={text}
                    onChangeText={setText}
                  >
                    {text}
                  </Text>
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
  input: {
    // width: 100,
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 50,
    padding: 10,
    color: "white",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    position: "absolute",
    width: "100%",
    height: "25%",
    backgroundColor: "#222",
    text: "white",
    bottom: 0,
  },
});

export default CivilianDetailsScreen;
