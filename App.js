import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import SignInPage from "./components/SignInPage";

export default function App() {
  return <SignInPage></SignInPage>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
