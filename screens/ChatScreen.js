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
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  IdentificationIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TvIcon,
} from "react-native-heroicons/solid";
import ChatsContainer from "../components/ChatsContainer";
import ContactsContainer from "../components/ContactsContainer";

const ChatScreen = () => {
  const navigation = useNavigation();
  const civilianUser = require("../assets/images/civilian-icon.png");
  const [isPressed, setIsPressed] = useState(false);
  const [currentRole, setCurrentRole] = useState("Civilian");
  const [refreshing, setRefreshing] = React.useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentChat, setChats] = useState(true);

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

      {/* add header bar */}
      <View className="flex-row justify-between items-center bg-black p-5">
        <View className="flex-row items-center">
          <Text className="text-white text-2xl font-bold">People</Text>
        </View>
        <View className="flex-row space-x-4">
          <TouchableOpacity>
            <MagnifyingGlassIcon
              className="text-white"
              stroke={"#FFF"}
              color={"#FFF"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <PencilSquareIcon
              className="text-white"
              stroke={"#FFF"}
              strokeWidth={0.5}
              color={"#FFF"}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* add a switch to change the chat option from chats to contacts */}
      <View className="flex-row p-1 bg-slate-800 rounded-full">
        <View className="flex-row justify-between w-full">
          {currentChat && (
            <>
              <View className="flex-col bg-slate-500 rounded-full p-2 w-1/2 items-center">
                <TouchableOpacity onPress={activeChats}>
                  <View className="flex-row items-center">
                    <ChatBubbleLeftRightIcon
                      className="text-white"
                      stroke={"#FFF"}
                      color={"#FFF"}
                    />
                    <Text className="text-white text-md font-semibold pl-2">
                      Chats
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-col bg-slate-800 rounded-full p-2 w-1/2 items-center">
                <TouchableOpacity onPress={activeContacts}>
                  <View className="flex-row items-center">
                    <IdentificationIcon
                      className="text-white"
                      stroke={"#FFF"}
                      color={"#FFF"}
                    />
                    <Text className="text-white text-md font-semibold pl-2">
                      Contacts
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
          {!currentChat && (
            <>
              <View className="flex-col bg-slate-800 rounded-full p-2 w-1/2 items-center">
                <TouchableOpacity onPress={activeChats}>
                  <View className="flex-row items-center">
                    <ChatBubbleLeftRightIcon
                      className="text-white"
                      stroke={"#FFF"}
                      color={"#FFF"}
                    />
                    <Text className="text-white text-md font-semibold pl-2">
                      Chats
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-col bg-slate-500 rounded-full p-2 w-1/2 items-center">
                <TouchableOpacity onPress={activeContacts}>
                  <View className="flex-row items-center">
                    <IdentificationIcon
                      className="text-white"
                      stroke={"#FFF"}
                      color={"#FFF"}
                    />
                    <Text className="text-white text-md font-semibold pl-2">
                      Contacts
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
      <ScrollView
        className="bg-black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        style={{ height: "100%" }}
      >
        {currentChat && <ChatsContainer />}
        {!currentChat && <ContactsContainer />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
});

export default ChatScreen;
