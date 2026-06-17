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


      <Perfil estiloExt={styles.tarjetaRoja} nombre="cristopher1" carrera="ING sistemas" materia="programacion movil" cuatri="9no"></Perfil>
      {/* <Text>....................................................</Text>
      <Text>....................................................</Text> */}
      <Perfil 
      estiloExt={styles.tarjetaVerde}
      nombre="yanhyu" 
      carrera="ING istemas" 
      materia="PM" 
      cuatri="9no"/>
      
      <Perfil estiloExt={styles.tarjetaRoja} nombre="cristopher2" carrera="ING sistemas" materia="programacion movil" cuatri="9no"></Perfil>
    </View>
  );
}


// Zona 3 Estilos y Posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection:'row'
  },



// znoa de estilos de las tarjetas
  tarjetaRoja:{
        backgroundColor:'#ff002bff',
    },
    tarjetaVerde:{
        backgroundColor:"#00ff00ff",
    },
});
