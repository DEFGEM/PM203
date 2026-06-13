// zona1: importaciones de componetes y archivos  

import { StatusBar } from 'expo-status-bar'; //puede ser opcion quitarlo o no 
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil';

// zona2 main }: hofar de los componetes
export default function App() {
  return (
    <View style={styles.container}>


      <Perfil nombre="cristofer" carrera="ING sistemas" materia="programacion movil" cuatri="9no"></Perfil>
      {/* <Text>....................................................</Text>
      <Text>....................................................</Text> */}
      <Perfil 
      nombre="yanhyu" 
      carrera="ING istemas" 
      materia="PM" 
      cuatri="9no"/>
      
    </View>
  );
}


// Zona 3 Estilos y Posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
