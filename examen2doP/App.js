import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TarjetaProducto from "./screens/tarjetaProducto";

const productos = [
  { id: "1", nombre: "Mouse inalambrico", marca: "Logitech", precio: "$349" },
  { id: "2", nombre: "Teclado mecanico", marca: "Redragon", precio: "$899" },
  { id: "3", nombre: "Monitor 24 pulgadas", marca: "Samsung", precio: "$2899" },
  { id: "4", nombre: "Bocina portatil", marca: "JBL", precio: "$1199" },
  { id: "5", nombre: "Tablet", marca: "Lenovo", precio: "$3599" },
  { id: "6", nombre: "Cargador rapido", marca: "Anker", precio: "$499" },
];

export default function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setCargando(false);
    }, 3000);

    return () => clearTimeout(temporizador);
  }, []);

  if (cargando) {
    return (
      <View style={styles.cargando}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.cargandoTexto}>Cargando productos...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TarjetaProducto
        nombre="Audifon|os Bluetooth"
        marca="Sony"
        precio="$899"
      />
      <TarjetaProducto nombre="Laptop" marca="Acer" precio="$7999" />
      <TarjetaProducto nombre="Telefono" marca="Realme" precio="$3999" />
      <View style={styles.listaContenedor}>
        <Text style={styles.tituloLista}>Lista de productos</Text>
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.productoItem}>
              <View>
                <Text style={styles.productoNombre}>{item.nombre}</Text>
                <Text style={styles.productoMarca}>{item.marca}</Text>
              </View>
              <Text style={styles.productoPrecio}>{item.precio}</Text>
            </View>
          )}
        />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cargando: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  cargandoTexto: {
    color: "#374151",
    fontSize: 16,
    fontWeight: "600",
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 16,
  },
  listaContenedor: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 16,
    gap: 12,
  },
  tituloLista: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  productoItem: {
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  productoNombre: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "700",
  },
  productoMarca: {
    color: "#4b5563",
    fontSize: 14,
  },
  productoPrecio: {
    color: "#047857",
    fontSize: 15,
    fontWeight: "700",
  },
});
