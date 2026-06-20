// zona1: importaciones de componetes y archivos

import { StatusBar } from "expo-status-bar"; //puede ser opcion quitarlo o no
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import TarjetasScreens from "./TarjetaScreens";
import SafeAreaScreen from "./SafeAreaScreen";
import PressableScreen from "./PressableScreen";
import TextInputScreen from "./TextInputScreen";
import FlatListScreen from "./FlatListScreen";
import ActivityIndicatorScreen from "./ActivityIndicatorScreen";
import ImageBackgroundScreen from "./ImageBackgroundScreen";
import ModalScreen from "./ModalScreen";

export default function MenuScreens() {
  const [screen, setScreen] = useState("menu");
  switch (screen) {
    case "tarjetas:":
      return <TarjetasScreens />;
    case "safeAreas:":
      return <SafeAreaScreen />;
    case "Pressable:":
      return <PressableScreen />;
    case "TextInput:":
      return <TextInputScreen />;
    case "FlatList:":
      return <FlatListScreen />;
    case "ActivityIndicator:":
      return <ActivityIndicatorScreen />;
    case "ImageBackground:":
      return <ImageBackgroundScreen />;
    case "Modal:":
      return <ModalScreen />;
    case "menu":
    default:
      return (
        <View style={styles.container}>
          <Text>Menu de practicas</Text>
          <Button
            title="Practica Tarjetas"
            onPress={() => setScreen("tarjetas:")}
          />
          <Button
            title="Practica SafeAreaScreen"
            onPress={() => setScreen("safeAreas:")}
          />
          <Button
            title="Practica Pressable"
            onPress={() => setScreen("Pressable:")}
          />
          <Button
            title="Practica TextInput"
            onPress={() => setScreen("TextInput:")}
            color="#ba00feff"
          />
          <Button
            title="Practica FlatList"
            onPress={() => setScreen("FlatList:")}
          />
          <Button
            title="Practica ActivityIndicator"
            onPress={() => setScreen("ActivityIndicator:")}
          />
          <Button
            title="Practica ImageBackground"
            onPress={() => setScreen("ImageBackground:")}
          />
          <Button title="Practica Modal" onPress={() => setScreen("Modal:")} />

          <StatusBar style="auto" />
        </View>
      );
  }
}

// Zona 3 Estilos y Posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // ponemos una sepracion por
    fontSize: 60,
    paddingVertical: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
