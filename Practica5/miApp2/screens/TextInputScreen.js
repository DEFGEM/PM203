// zona1: importaciones de componetes y archivos

import { StatusBar } from "expo-status-bar"; //puede ser opcion quitarlo o no
import { StyleSheet, Text, View } from "react-native";

// zona2 main }: hofar de los componetes
export default function TextInputScreen() {
  return (
    <View style={styles.input}>
      <Text>aqui va la practica de CAG</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// Zona 3 Estilos y Posicionamiento
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "z#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 24,
    gap: 12,
  },
  Titulo: {
    padding: 30,
    fontSize: 20,
    alignContent: "stretch",
  },
  input: {
    borderWidth: 3,
    borderColor: "#e6e6e6",
    borderRadius: 3,
    padding: 10,
    fontSize: 15,
    backgroundColor: "#ffffff",
  },
});
