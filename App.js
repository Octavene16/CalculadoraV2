import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { BotonesNumeros } from './assets/BotonesNumeros';
import { BotonesOperaciones } from './assets/BotonesOperaciones';
import { EstadosContext} from './assets/Context/EstadosContext';
import { useState } from 'react';
import { BotonesInferiores } from './assets/BotonesInferiores';

export default function App() {

  const [banderaOpera, setBanderaOpera] = useState(false);
  const [numero1, setNumero1] = useState(['']);
  const [numero2, setNumero2] = useState(['']);
  const [resultado, setResultado] = useState('');
  const [operacion, setOperacion] = useState('');
  const [puntoSeted, setPuntoSeted] = useState(false);
  const [ceroSeted, setCeroSeted] = useState(false);





  return (

     <EstadosContext.Provider value={{banderaOpera, setBanderaOpera, numero1, setNumero1,numero2, setNumero2, resultado, setResultado,  operacion, setOperacion, puntoSeted, setPuntoSeted, ceroSeted, setCeroSeted}}>
    <View style={styles.container}>
       {banderaOpera==false 
        ? operacion!=''
          ? <Text style={styles.result}>{numero2.join('')}</Text>
          : <Text style={styles.result}>{numero1.join('')}</Text>
          
        : null
      }
      { banderaOpera==true
       ? <Text style={styles.result}>{resultado}</Text>
       : null      
      }
     
      <View style={styles.containerJuntos} >
        <View style={styles.containerNum}>
        
          <BotonesNumeros></BotonesNumeros>
        </View>
        <View>
          <BotonesOperaciones style={styles.containerOpera}></BotonesOperaciones>
        </View>
      </View>
      <BotonesInferiores></BotonesInferiores>
    </View>
      </EstadosContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    flexWrap: 'nowrap',
    marginTop: 100,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  containerNum: {

    width: Dimensions.get("window").width/1.3,
    height: Dimensions.get("window").height/2,
   

  },
  containerOpera: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get("window").width/2,
    height: Dimensions.get("window").height/2,
   
  },

  containerJuntos: {
    flexDirection: 'row'
  },
  result: {
    paddingTop: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'gray',
    marginLeft: 70,
    color: 'white',
    width: Dimensions.get("window").width/1.5,
    height: 60,
    fontSize: 40
  }
});
