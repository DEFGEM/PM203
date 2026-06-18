// zona1: importaciones de componetes y archivos

import { StatusBar } from "expo-status-bar"; //puede ser opcion quitarlo o no
import { StyleSheet, Text, View, Image } from "react-native";

// zona2 main }: hofar de los componetes
export default function ImageBackgroundScreen() {
  return (
    <View style={styles.container}>
      <Text>aquie va la practica de Ines</Text>
    </View>
  );
}

// Zona 3 Estilos y Posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
