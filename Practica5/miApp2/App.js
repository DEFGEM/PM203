// zona1: importaciones de componetes y archivos

import { StatusBar } from "expo-status-bar"; //puede ser opcion quitarlo o no
import { StyleSheet, Text, View, Image, Button } from "react-native";
import MenuScreens from "./screens/MenuScreens";

// zona2 main }: hofar de los componetes
export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreens />
    </View>
  );
}

// Zona 3 Estilos y Posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "space-between",
    flexDirection: "column",
  },
});
