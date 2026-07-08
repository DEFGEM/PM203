// zona1: importaciones de componentes y archivos
import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";

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

export default function TarjetaProducto({ nombre, marca, precio }) {
  const [opinion, setOpinion] = useState("");
  const [opinionGuardada, setOpinionGuardada] = useState("");
  const [favorito, setFavorito] = useState(false);

  const guardarOpinion = () => {
    if (!opinion.trim()) {
      Alert.alert("Opinion vacia", "Escribe una opinion del producto");
      return;
    }

    setOpinionGuardada(opinion.trim());
    Alert.alert(
      "Guardado",
      "Opinion guardada correctamente...\nGracias por tu opinion",
    );
  };

  return (
    <View style={styles.contenedor}>
      {/* tarjeta uno */}
      <View style={styles.tarjeta}>
        <Image source={require("../assets/icon.png")} style={styles.imagen} />
        <View style={styles.info}>
          <Text style={styles.nombre}>{nombre}</Text>
          <Text style={styles.marca}>{marca}</Text>
          <Text style={styles.precio}>{precio}</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu opinion del producto"
          placeholderTextColor="#6b7280"
          multiline
          value={opinion}
          onChangeText={setOpinion}
        />

        <View style={styles.favoritoFila}>
          <Text style={styles.favoritoTexto}>
            Favorito: {favorito ? "Si" : "No"}
          </Text>
          <Switch value={favorito} onValueChange={setFavorito} />
        </View>

        <Pressable
          onPress={guardarOpinion}
          style={({ pressed }) => [
            styles.boton,
            pressed ? styles.botonPresionado : null,
          ]}
        >
          <Text style={styles.botonTexto}>Guardar opinion</Text>
        </Pressable>

        {opinionGuardada ? (
          <Text style={styles.opinionGuardada}>
            Opinion guardada: {opinionGuardada}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

// Zona 3 Estilos y Posicionamiento
const styles = StyleSheet.create({
  contenedor: {
    width: "100%",
    alignItems: "center",
    gap: 16,
  },
  tarjeta: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 16,
    width: "100%",
    maxWidth: 340,
    alignItems: "center",
    gap: 12,
  },
  imagen: {
    width: 96,
    height: 96,
    borderRadius: 8,
  },
  info: {
    alignItems: "center",
    gap: 4,
  },
  nombre: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  marca: {
    color: "#4b5563",
    fontSize: 16,
  },
  precio: {
    color: "#047857",
    fontSize: 18,
    fontWeight: "700",
  },
  input: {
    width: "100%",
    minHeight: 72,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    color: "#111827",
    fontSize: 15,
    textAlignVertical: "top",
  },
  favoritoFila: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  favoritoTexto: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "600",
  },
  boton: {
    width: "100%",
    backgroundColor: "#2563eb",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  botonPresionado: {
    backgroundColor: "#1d4ed8",
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  opinionGuardada: {
    width: "100%",
    color: "#374151",
    fontSize: 14,
  },
});
