// persil usadno desdtrucuturacion
import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
// znoa 1
export const Perfil = ({ nombre, carrera, materia, cuatri, estiloExt }) => {
  const [mostrar, setMostrar] = useState(true);

  return (
    <View style={[styles.tarjeta, estiloExt]}>
      <Text style={styles.nombre}>{nombre}</Text>

      {/* Renderizado condicional */}
      {mostrar && (
        <>
          <Text style={styles.carrera}>{carrera}</Text>
          <Text style={styles.otroTexto}>{materia}</Text>
          <Text style={styles.otroTexto}>{cuatri}</Text>
        </>
      )}
      {/* un boton para cambiar el valor de mostrar */}
      <Button title="Mostrar perfil" onPress={() => setMostrar(!mostrar)} />
    </View>
  );
};
// zona 2
const styles = StyleSheet.create({
  nombre: {
    fontSize: 24,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  carrera: {
    fontSize: 24,
    color: "blue",
    fontWeight: "600",
    textTransform: "Robot",
  },
  otroTexto: {
    fontSize: 12,
    fontfamily: "courier",
    fontfamily: "italic",
  },
  tarjeta: {
    borderWidth: 2,
    padding: 25,
    margin: 10,
  },
});

// // perfil usdo pros

// import { View, Text } from 'react-native'

// export const Perfil = (prompt) => {

//     return (
//         // <View>
//         //     <Text>Nombre: Muñoz Prado Critopher Yanhyu</Text>
//         //     <Text>Carrera: ING Sistemas</Text>
//         //     <Text>Materia: Programacion Movil</Text>
//         //     <Text>Cuatrimestre: 9no</Text>
//         // </View>
//         <View>
//             <Text>{prompt.nombre}</Text>
//             <Text>{prompt.carrera}</Text>
//             <Text>{prompt.materia}</Text>
//             <Text>{prompt.cuatri}</Text>
//         </View>
//     )
// }
