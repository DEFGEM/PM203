import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Pressable,
  View,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";

Platform;
if (Platform.OS === "web") {
  Alert.alert = (titular, mensaje, boton) => {
    const list = Array.isArray(mensaje) ? mensaje : boton;
    if (list) {
      if (window.confirm(titular)) list.find((b) => b.onPress)?.onPress();
    } else {
      window.alert(titular + (mensaje ? "\n" + mensaje : ""));
    }
  };
}

export default function Registro() {
  const [nombre, setNombre] = useState("");

  const [carrera, setCarrera] = useState("");
  const [semestre, setSemestre] = useState("");
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviar = () => {
    if (!nombre || !carrera || !semestre) {
      Alert.alert("Campos incompletos", "Debs llenar todos los campos :)");
      return;
    }
    if (!semestre.match(/^[1-9]$/)) {
      Alert.alert("ERROR", "El semestre debe ser un nunero");
      setSemestre("");
      return;
    }
    Alert.alert(
      "Registro Envio",
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\nTaller: ${taller ? "si" : "no"}\nConstancia: ${constancia ? "si" : "no"}\nDeportes: ${deportes ? "si" : "no"}`,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Registro de usuario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre(s)"
        placeholderTextColor="#999"
        autoCapitalize="words"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        placeholderTextColor="#999"
        autoCapitalize="words"
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        style={styles.input}
        placeholder="Semestre"
        keyboardType="number-pad"
        placeholderTextColor="#999"
        value={semestre}
        onChangeText={setSemestre}
      />

      <Text style={styles.subtitle}>Opciones</Text>

      <View style={styles.row}>
        <Text style={styles.label}>¿Asistira al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>¿Se requiere constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>¿Participara en deportes?</Text>
        <Switch value={deportes} onValueChange={setDeportes} />
      </View>

      <Pressable onPress={enviar} style={styles.button}>
        <Text style={styles.buttonText}>Registrar</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  label: {
    fontSize: 15,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
