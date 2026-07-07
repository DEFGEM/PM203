import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Examen2doP from "./screens/examen2doP";

export default function App() {
  return (
    <View style={styles.container}>
      <Examen2doP />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
