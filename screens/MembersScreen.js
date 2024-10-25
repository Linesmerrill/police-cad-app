import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  RefreshControl,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const MembersScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Add your refresh logic here
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const members = [
    { username: "User1", roles: ["Admin", "Moderator"] },
    { username: "User2", roles: ["Member"] },
    { username: "User3", roles: ["Member", "VIP"] },
    // Add more members as needed
  ];

  const renderMember = ({ item }) => (
    <TouchableOpacity
      style={styles.memberRow}
      onPress={() => navigation.navigate("MemberEdit", { member: item })}
    >
      <View style={styles.memberInfo}>
        <Text style={styles.username}>{item.username}</Text>
        <View style={styles.rolesContainer}>
          {item.roles.map((role, index) => (
            <View key={index} style={styles.roleTag}>
              <Text style={styles.roleText}>{role}</Text>
            </View>
          ))}
        </View>
      </View>
      <ChevronRightIcon color={"#FFF"} size={20} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="transparent"
      /> */}

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
            <Text className="text-white text-xl font-bold ml-4">Members</Text>
          </View>
        </View>
        {/* <TouchableOpacity className="justify-center">
          <View className="mr-4">
            <Cog8ToothIcon color={"#FFF"} size={28} />
          </View>
        </TouchableOpacity> */}
      </View>
      <View className="p-5">
        <View className="flex-row items-center bg-slate-800 rounded-full px-5 py-3">
          <MagnifyingGlassIcon color={"gray"} size={20} />
          <TextInput
            className="text-white ml-2 flex-1"
            placeholder="Search"
            placeholderTextColor="gray"
            clearButtonMode="always"
          />
        </View>
      </View>
      <FlatList
        data={members}
        renderItem={renderMember}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  searchContainer: {
    padding: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  memberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  memberInfo: {
    flexDirection: "column",
  },
  username: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  rolesContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  roleTag: {
    backgroundColor: "#444",
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 5,
  },
  roleText: {
    color: "white",
    fontSize: 12,
  },
});

export default MembersScreen;
