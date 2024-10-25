import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import ExpoCheckbox from "expo-checkbox/build/ExpoCheckbox";

const MemberEditScreen = ({ navigation }) => {
  const route = useRoute();
  const member = route.params?.member;
  const [roles, setRoles] = useState(["Admin", "Editor", "Viewer"]); // Example roles
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [isEditingRoles, setIsEditingRoles] = useState(false);

  const toggleEditRoles = () => {
    setIsEditingRoles(!isEditingRoles);
  };

  const handleRoleChange = (role) => {
    setSelectedRoles((prevSelectedRoles) =>
      prevSelectedRoles.includes(role)
        ? prevSelectedRoles.filter((r) => r !== role)
        : [...prevSelectedRoles, role]
    );
  };

  const handleSave = () => {
    // Save the selected roles (e.g., update the member's roles in the backend)
    setIsEditingRoles(false);
  };

  const handleCancel = () => {
    setIsEditingRoles(false);
  };

  const renderRoleItem = ({ item: role, index }) => {
    const isFirstItem = index === 0;
    const isLastItem = index === roles.length - 1;

    return (
      <>
        <TouchableOpacity
          key={role}
          className={`flex-row items-center px-4 py-4 mx-3 ${
            isFirstItem ? "rounded-t-lg -mt-8" : ""
          } ${isLastItem ? "rounded-b-lg mb-8" : ""} bg-gray-800`}
          onPress={() => handleRoleChange(role)}
        >
          <ExpoCheckbox
            value={selectedRoles.includes(role)}
            onValueChange={() => handleRoleChange(role)}
            style={{
              backgroundColor: "transparent", // Set background color to transparent
              borderColor: "white", // Set border color
              borderRadius: 10,
            }}
          />
          <Text className="text-white font-semibold pl-4">{role}</Text>
        </TouchableOpacity>
        {!isLastItem && (
          <View>
            <View className="bg-gray-700 h-0.5 mx-3"></View>
          </View>
        )}
      </>
    );
  };

  const renderHeader = () => (
    <View className="p-3">
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
        <Text className="text-gray-400 font-semibold text-sm mb-3">Roles</Text>
        <>
          {!isEditingRoles && (
            <TouchableOpacity onPress={toggleEditRoles}>
              <View className="flex-row items-center bg-slate-800 rounded-2xl p-5">
                <Text className="text-white font-bold">Edit Roles</Text>
              </View>
            </TouchableOpacity>
          )}
        </>
      </View>
    </View>
  );

  const renderFooter = () => (
    <View className="px-3 -mt-3 space-y-5">
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
          <Text className="text-red-400 font-bold">Transfer Ownership</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* back button left chevron with circle gray background */}
      <View className="flex-row justify-between">
        <View className="flex-row">
          <>
            {!isEditingRoles && (
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
            )}
          </>
          <>
            {isEditingRoles && (
              <TouchableOpacity onPress={handleCancel}>
                <View className="flex-row p-3 items-center">
                  <Text className="text-blue-500 text-base font-bold">
                    Cancel
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </>
          <View className="justify-center">
            <Text className="text-white text-xl font-bold ml-4">
              Edit {member.username}
            </Text>
          </View>
        </View>
        <>
          {isEditingRoles && (
            <TouchableOpacity onPress={handleSave}>
              <View className="flex-row p-3 items-center">
                <Text className="text-blue-500 text-base font-bold">Save</Text>
              </View>
            </TouchableOpacity>
          )}
        </>
      </View>
      <FlatList
        data={isEditingRoles ? roles : []}
        renderItem={isEditingRoles ? renderRoleItem : null}
        keyExtractor={(item) => item}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
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
