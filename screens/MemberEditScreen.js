import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import tw from "twrnc";

const MemberEditScreen = ({ navigation }) => {
  const route = useRoute();
  const member = route.params?.member;

  const [isEditingRoles, setIsEditingRoles] = useState(true);

  if (!member) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Member data not available</Text>
      </SafeAreaView>
    );
  }

  const toggleEditRoles = () => {
    setIsEditingRoles(!isEditingRoles);
  };

  return (
    <SafeAreaView style={styles.container}>
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
              Edit {member.username}
            </Text>
          </View>
        </View>
        {/* <TouchableOpacity className="justify-center">
          <View className="mr-4">
            <Cog8ToothIcon color={"#FFF"} size={28} />
          </View>
        </TouchableOpacity> */}
      </View>
      <ScrollView className="p-3">
        <View className="flex-1">
          {/* small round profile pic followed by their username */}
          <View className="flex-row bg-slate-800 rounded-2xl p-3">
            <Image
              className="rounded-full w-10 h-10"
              source={require("../assets/images/wendy-king.jpg")}
            />
            <View className="justify-center">
              <Text className="text-white pl-2">{member.username}</Text>
            </View>
          </View>
        </View>
        <View className="flex-1 my-5 space-y-5">
          <Text className="text-gray-400 font-semibold text-sm">Roles</Text>
          <TouchableOpacity onPress={toggleEditRoles}>
            <View className="flex-row items-center bg-slate-800 rounded-2xl p-5">
              <Text className="text-white font-bold">Edit Roles</Text>
            </View>
          </TouchableOpacity>
          {isEditingRoles && (
            <View>
              <Text className="text-white">Testing Roles</Text>
            </View>
          )}
          {!isEditingRoles && (
            <View>
              <Text className="text-white">Testing Roles</Text>
            </View>
          )}

          <TouchableOpacity>
            <View className="flex-row items-center bg-slate-800 rounded-2xl p-5">
              <Text className="text-red-400 font-bold">
                Kick '{member.username}'
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row items-center bg-slate-800 rounded-2xl p-5">
              <Text className="text-red-400 font-bold">
                Ban '{member.username}'
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row items-center bg-slate-800 rounded-2xl p-5">
              <Text className="text-red-400 font-bold">
                Kick '{member.username}'
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  form: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 20,
  },
  label: {
    color: "gray",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#444",
    color: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#1E90FF",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});

export default MemberEditScreen;
