// persil usadno desdtrucuturacion
import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'

export const Perfil = ({nombre, carrera, materia, cuatri}) => {
    const[mostrar, setMostrar] = useState(true);
    
    return (
        <View>
            <Text>{nombre}</Text>

            {/* Renderizado condicional */}
            { mostrar && 
            <>
            <Text>{carrera}</Text>
            <Text>{materia}</Text>
            <Text>{cuatri}</Text>
            </>
            }
            {/* un boton para cambiar el valor de mostrar */}
            <Button title="Mostrar perfil" onPress={() => setMostrar(!mostrar)} />
            
        </View>
    )
}






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