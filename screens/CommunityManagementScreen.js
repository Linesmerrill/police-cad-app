import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Image,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  Cog6ToothIcon,
  Cog8ToothIcon,
  EllipsisVerticalIcon,
  HomeIcon,
  HomeModernIcon,
  IdentificationIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TvIcon,
} from "react-native-heroicons/solid";
import ChatsContainer from "../components/ChatsContainer";
import ContactsContainer from "../components/ContactsContainer";
import BellChatContainer from "../components/BellChatContainer";
import {
  EnvelopeIcon,
  InformationCircleIcon,
  LinkIcon,
  StarIcon,
  XMarkIcon,
} from "react-native-heroicons/outline";

const CommunityManagementScreen = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
  const [currentRole, setCurrentRole] = useState("Civilian");
  const [refreshing, setRefreshing] = React.useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentChat, setChats] = useState(true);

  const { showActionSheetWithOptions } = useActionSheet();

  const onPressNotification = () => {
    const options = [
      "View",
      "Manage Notification Settings",
      "Unsubscribe",
      "Cancel",
    ];
    const destructiveButtonIndex = 2;
    const cancelButtonIndex = 3;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            // View
            break;
          case 1:
            // Manage Notifications Settings
            break;

          case destructiveButtonIndex:
            // Unsubscribe
            break;

          case cancelButtonIndex:
          // Canceled
        }
      }
    );
  };

  const handleDeleteCommunity = () => {
    // Add your deletion logic here
    Alert.alert(
      "Delete Community",
      "Are you sure you want to delete this community?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            // Perform the delete action
            console.log("Community deleted");
          },
          style: "destructive",
        },
      ]
    );
  };

  const activeChats = () => setChats(true);
  const activeContacts = () => setChats(false);

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
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="transparent"
      />

      {/* back button left chevron with circle gray background */}
      <View className="flex-row justify-between">
        <View className="flex-row">
          <TouchableOpacity
            className=""
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View className="flex-row p-3 items-center">
              <View className="flex-row items-center">
                <ChevronLeftIcon
                  size={20}
                  className="text-white"
                  color={"#FFF"}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View className="justify-center">
            <Text className="text-white text-xl font-bold ml-4">
              Community Settings
            </Text>
          </View>
        </View>
        {/* <TouchableOpacity className="justify-center">
          <View className="mr-4">
            <Cog8ToothIcon color={"#FFF"} size={28} />
          </View>
        </TouchableOpacity> */}
      </View>
      <ScrollView
        className="bg-black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* <View className="flex-col space-y-3">
          <View className="flex-row m-5">
            <View className="flex-1">
              <Text className="text-white text-base font-semibold">
                Profile picture
              </Text>
            </View>
            <View className="m-2">
              <TouchableOpacity>
                <Text className="text-blue-500 ">Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row justify-center">
            <TouchableOpacity>
              <Image
                source={{
                  uri: `https://images.unsplash.com/photo-1608889175157-718b6205a50d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
                }}
                className="w-32 h-32 rounded-full border-4 border-white"
              />
            </TouchableOpacity>
          </View>
        </View> */}

        <View className="flex-col">
          <View className="flex-row m-5">
            <View className="flex-1">
              <Text className="text-white text-base font-semibold">
                Cover photo
              </Text>
            </View>
            <View className="m-2">
              <TouchableOpacity>
                <Text className="text-blue-500 ">Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-1 justify-center mx-5">
            <TouchableOpacity>
              <Image
                source={{
                  uri: `https://i.ibb.co/F4XgwyT/lines-police-cad-community-cover-photo.jpg`,
                }}
                className="rounded-xl w-full h-56"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-col">
          <View className="flex-row m-5">
            <View className="flex-1">
              <Text className="text-white text-base font-semibold">
                Community Name
              </Text>
            </View>
            <View className="m-2">
              <TouchableOpacity>
                <Text className="text-blue-500 ">Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row ml-5 mr-2">
            <TouchableOpacity>
              <Text className="text-white text-sm font-base">
                Lines Police CAD
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-col">
          <View className="flex-row m-5">
            <View className="flex-1">
              <Text className="text-white text-base font-semibold">Bio</Text>
            </View>
            <View className="m-2">
              <TouchableOpacity>
                <Text className="text-blue-500 ">Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row justify-center ml-2 mr-2">
            <TouchableOpacity>
              <Text className="text-white text-sm font-base">
                Welcome to Lines Police CAD. We are a community of law
                enforcement professionals who use Lines Police CAD to manage
                their departments.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-col">
          <View className="flex-row m-5">
            <View className="flex-1">
              <Text className="text-white text-base font-semibold">
                Details
              </Text>
            </View>
            <View className="m-2">
              <TouchableOpacity>
                <Text className="text-blue-500 ">Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-col mx-2">
            <TouchableOpacity className="space-y-3">
              <View className="flex-row mx-5 space-x-1">
                <InformationCircleIcon color={"#FFF"} size={20} />
                <Text className="text-white text-sm font-base pl-1">
                  Page •
                </Text>
                <Text className="text-white text-sm font-base">Video Game</Text>
              </View>
              <View className="flex-row mx-5 space-x-1">
                <EnvelopeIcon color={"#FFF"} size={20} />
                <Text className="text-white text-sm font-base pl-1">
                  Support@linespolice-cad.com
                </Text>
              </View>
              <View className="flex-row mx-5 space-x-1">
                <StarIcon color={"#FFF"} size={20} />
                <Text className="text-white text-sm font-base pl-1">
                  Not yet rated (0 Reviews)
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-col">
          <View className="flex-row m-5">
            <View className="flex-1">
              <Text className="text-white text-base font-semibold">Links</Text>
            </View>
            <View className="m-2">
              <TouchableOpacity>
                <Text className="text-blue-500 ">Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-col mx-2">
            <TouchableOpacity className="space-y-3">
              <View className="flex-row mx-5 space-x-1">
                <XMarkIcon color={"#FFF"} size={20} />
                <Text className="text-white text-sm font-base pl-1">
                  LinesPoliceCAD
                </Text>
              </View>
              <View className="flex-row mx-5 space-x-1">
                <LinkIcon color={"#FFF"} size={20} />
                <Text className="text-white text-sm font-base pl-1">
                  linespolice-cad.com
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* Delete button */}
        <View className="mt-20 items-center">
          <TouchableOpacity
            className="bg-red-500 py-5 px-20 rounded-lg"
            onPress={handleDeleteCommunity}
          >
            <Text className="text-white text-lg font-bold">Delete</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    margin: 2,
  },
});

export default CommunityManagementScreen;
