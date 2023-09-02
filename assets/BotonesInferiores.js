import { useContext } from "react"
import { Dimensions, FlatList, View } from "react-native"
import { Pressable, StyleSheet, Text } from "react-native"
import { EstadosContext } from "./Context/EstadosContext"


export const BotonesInferiores = () => {
    const {resultado, setResultado, numero1, setNumero1,  numero2, setNumero2, banderaOpera, setBanderaOpera, operacion, setOperacion, puntoSeted, setPuntoSeted, ceroSeted, setCeroSeted} = useContext(EstadosContext)
    
  
    const handle0 = () => {
      if (ceroSeted==false || numero1.length>2){
        if (operacion==''){
        setNumero1([... numero1, '0'])
        setCeroSeted(true)
        }
        else{
          if (ceroSeted==false || numero2.length>2){
          setNumero2([... numero2, '0'])
         setCeroSeted(true)
          }
        }
      }
    }
        const handlePunto = () => {
          if(puntoSeted==false){
            if (operacion==''){
            setNumero1([... numero1, '.'])
            setPuntoSeted(true)
            
            }
            else{
              setNumero2([... numero2, '.'])
              setPuntoSeted(true)
            }
          }
        
        }
  
  
    return (
 <View style={styles.container}>
        <Pressable onPress={()=>{handle0()}} style={styles.button}>
    <Text style={styles.text}>0</Text>
  </Pressable>
  <Pressable onPress={()=>{handlePunto()}} style={styles.buttonPunto}>
    <Text style={styles.text}>.</Text>
  </Pressable>
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
     button: {
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 4,
      margin: 10,
      backgroundColor: 'blue',
      marginTop: 50,
      width: Dimensions.get("window").width/2.25,
      height: 50
    },
    buttonPunto: {
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 4,
      margin: 10,
      backgroundColor: 'blue',
      marginTop: 50,
      width: Dimensions.get("window").width/6,
      height: 50
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  
  })
  
