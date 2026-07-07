import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
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

export default function LibrosF() {
  // variables de estado
  const [splash, setSplash] = useState(true);
  // variable de estado que controla si se esta guardando algo
  const [guardando, setGuardando] = useState(false);

  // variables para el textInput
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  // lista donde se guardaran los libros
  const [libros, setLibros] = useState([]);

  // efecto que se ejecuta cuando se monta el componente
  useEffect(() => {
    // simula una espera de 2 segundos
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  // funcion para agregar un libro
  const agregarLibro = () => {
    // valida que los campos no esten vacios
    if (!titulo || !autor || !genero) {
      Alert.alert("Alert", "Todos los campos son obligatorios.");
      return;
    }
    // cambia el estado a true para mostrar el indicador de carga
    setGuardando(true);
    // simula una espera de 4 segundos
    setTimeout(() => {
      // crea un nuevo libro con un id unico
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero,
      };

      // agrega el nuevo libro al principio de la lista
      setLibros([nuevoLibro, ...libros]);
      // limpia los inputs
      setTitulo("");
      setAutor("");
      setGenero("");
      // cambia el estado a false para ocultar el indicador de carga
      setGuardando(false);

      Alert.alert("Alert", "Libro guardado correctamente.");
    }, 4000);
  };

  // si el splash es true, muestra el splash screen
  if (splash) {
    return (
      <View style={styles.splashContainer}>
        {/* una imagen de referencia  */}
        <Image
          source={require("../assets/logo.png")}
          style={styles.splashLogo}
          resizeMode="contain"
        />
        {/* texto de referencia  */}
        <Text style={styles.splashTexto}>repa2</Text>
        {/* indicador de carga */}
        <ActivityIndicator
          size="large"
          color="#2563eb"
          style={styles.splashIndicador}
        />
        <StatusBar style="dark" />
      </View>
    );
  }

  return (
    // imagen de fondo
    <ImageBackground
      source={require("../assets/libro.jpg")}
      style={styles.fondo}
      resizeMode="cover"
    >
      <View style={styles.capaOscura}>
        <SafeAreaView style={styles.container}>
          {/* una lista que muestra los libros */}
          <FlatList
            data={libros}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.lista}
            // componente que se muestra antes de la lista
            ListHeaderComponent={
              <View>
                {/* titulo principal */}
                <Text style={styles.tituloPrincipal} title="\n">
                  Catalogo de Libros
                </Text>
                {/* inputs de referencia  */}
                <TextInput
                  style={styles.input}
                  placeholder="Titulo del libro"
                  placeholderTextColor="#777"
                  value={titulo}
                  onChangeText={(t) => setTitulo(t)}
                  editable={!guardando}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Autor"
                  placeholderTextColor="#777"
                  value={autor}
                  onChangeText={(t) => setAutor(t)}
                  editable={!guardando}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Genero"
                  placeholderTextColor="#777"
                  value={genero}
                  onChangeText={(t) => setGenero(t)}
                  editable={!guardando}
                />

                {/* boton para agregar libro */}
                <Pressable
                  style={[
                    styles.botonAgregar,
                    guardando && styles.botonDesactivado,
                  ]}
                  onPress={agregarLibro}
                  disabled={guardando}
                >
                  {/* si guardando es true, cambie el texto del boton por "Guardando..." y desactiva el boton*/}
                  {guardando ? (
                    <View style={styles.filaGuardando}>
                      {/* <ActivityIndicator size="small" color="#ffffff" /> */}
                      <Text style={styles.textoBoton}>Guardando...</Text>
                    </View>
                  ) : (
                    <Text style={styles.textoBoton}>Agregar Libro</Text>
                  )}
                </Pressable>

                {/* si guardando es true, muestra el indicador de carga */}
                {guardando && (
                  <View style={styles.guardandoContainer}>
                    <ActivityIndicator size="large" color="#ffffff" />
                    <Text style={styles.guardandoTexto}>
                      Guardando libro...
                    </Text>
                  </View>
                )}
                {/* texto que muestra la cantidad de libros */}
                <Text style={styles.total}>
                  Total de libro: {libros.length}
                </Text>
              </View>
            }
            // componente que se muestra si la lista esta vacia
            ListEmptyComponent={
              <Text style={styles.listaVacia}>No hay libros registrados</Text>
            }
            
            // componente que se muestra para cada item de la lista
            renderItem={({ item }) => (
              <View style={styles.tarjetaLibro}>
                <Text style={styles.tituloLibro}>{item.titulo}</Text>
                <Text style={styles.detalleLibro}>Autor: {item.autor}</Text>
                <Text style={styles.detalleLibro}>Género: {item.genero}</Text>
              </View>
            )}
          />
        </SafeAreaView>
        <StatusBar style="light" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  splashLogo: {
    width: 160,
    height: 160,
  },
  splashTexto: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
  },
  splashIndicador: {
    marginTop: 20,
  },
  fondo: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  capaOscura: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  container: {
    flex: 1,
  },
  lista: {
    padding: 20,
    paddingBottom: 40,
  },
  tituloPrincipal: {
    color: "#ffffff",
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.62)",
    borderWidth: 1,
    borderColor: "#000000ff",
    borderRadius: 10,
    padding: 13,
    marginBottom: 12,
    fontSize: 16,
  },
  botonAgregar: {
    backgroundColor: "#1677d2",
    padding: 15,
    borderRadius: 9,
    alignItems: "center",
  },
  botonDesactivado: {
    backgroundColor: "#999999",
  },
  textoBoton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  filaGuardando: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  guardandoContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  guardandoTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  total: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 12,
  },
  listaVacia: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 15,
    borderRadius: 10,
  },
  tarjetaLibro: {
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },
  tituloLibro: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detalleLibro: {
    fontSize: 15,
    color: "#333333",
    marginBottom: 2,
  },
});
