import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Modal,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import { ChevronLeftIcon, Cog8ToothIcon } from "react-native-heroicons/solid";
import { SwipeListView } from "react-native-swipe-list-view";

const DepartmentManagementScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [newDepartmentName, setNewDepartmentName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [departments, setDepartments] = useState([
    { id: "1", name: "Police" },
    { id: "2", name: "Fire" },
    { id: "3", name: "EMS" },
    { id: "4", name: "Civilian" },
    // Add more departments as needed
  ]);

  const handleEdit = (item) => {
    Alert.alert("Edit", `Edit department: ${item.name}`);
    // Implement your edit logic here
  };

  const handleDelete = (item) => {
    setDepartments((prevDepartments) =>
      prevDepartments.filter((department) => department.id !== item.id)
    );
  };

  const handleAddDepartment = () => {
    if (newDepartmentName.trim()) {
      setDepartments((prevDepartments) => [
        ...prevDepartments,
        {
          id: (prevDepartments.length + 1).toString(),
          name: newDepartmentName,
        },
      ]);
      setNewDepartmentName("");
      setModalVisible(false);
    } else {
      Alert.alert("Error", "Department name cannot be empty");
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleEdit(item)}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderHiddenItem = ({ item }) => (
    <View style={styles.hiddenItem}>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(item)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

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
              Department Management
            </Text>
          </View>
        </View>
        {/* <TouchableOpacity className="justify-center">
          <View className="mr-4">
            <Cog8ToothIcon color={"#FFF"} size={28} />
          </View>
        </TouchableOpacity> */}
      </View>
      <View className="flex-1 text-white ">
        <SwipeListView
          data={departments}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-75}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* plus sign at the bottom right to add new departments */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add Department</Text>
          <TextInput
            style={styles.input}
            placeholder="Department Name"
            value={newDepartmentName}
            onChangeText={setNewDepartmentName}
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedRole}
              // style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedRole(itemValue)
              }
            >
              <Picker.Item label="Select Role" value="" />
              <Picker.Item label="Admin" value="admin" />
              <Picker.Item label="User" value="user" />
              <Picker.Item label="Manager" value="manager" />
            </Picker>
          </View>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleAddDepartment}
            >
              <Text style={styles.modalButtonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  item: {
    padding: 20,
    backgroundColor: "black",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    color: "white",
  },
  hiddenItem: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: "100%",
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 75,
  },
  deleteButtonText: {
    color: "white",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 24,
    paddingRight: 5,
    paddingLeft: 5,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalText: {
    fontSize: 20,
    color: "white",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20,
  },
  pickerContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  modalButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#ff0000",
  },
  modalButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default DepartmentManagementScreen;
