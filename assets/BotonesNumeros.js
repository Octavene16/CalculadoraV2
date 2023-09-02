import { useContext } from "react"
import { FlatList, View } from "react-native"
import { Pressable, StyleSheet, Text } from "react-native"
import { EstadosContext } from "./Context/EstadosContext"

export const BotonesNumeros = () => {

  const {resultado, setResultado, numero1, setNumero1,  numero2, setNumero2, banderaOpera, setBanderaOpera, operacion, setOperacion, puntoSeted, setPuntoSeted, ceroSeted, setCeroSeted} = useContext(EstadosContext)

  const handleCE = () => {
    setBanderaOpera(false)
    setNumero2([''])
    setResultado('')
    setNumero1([''])
    setOperacion('')
    setPuntoSeted(false)
    setCeroSeted(false)
    
  }

  const handleC = () => {
    if (operacion==''){
      setNumero1([''])
      setPuntoSeted(false)      
      }
      else{
        setBanderaOpera(false)
        setOperacion('')
        setNumero2([''])
        setPuntoSeted(false)
      }

  }

  const handlePorcentaje = () => {
    if (operacion==''){
      setNumero1(numero1)      
      }
      else{
        setNumero2([... numero2, '%'])
      }
  }

  const handle1 = () => {
    if (operacion==''){
    setNumero1([... numero1, '1'])
    
    }
    else{
      setNumero2([... numero2, '1'])
     
    }

  }
  const handle2 = () => {
    if (operacion==''){
      setNumero1([... numero1, '2'])
      
      }
      else{
        setNumero2([... numero2, '2'])
       
      }
  }
  const handle3 = () => {
    if (operacion==''){
      setNumero1([... numero1, '3'])
      
      }
      else{
        setNumero2([... numero2, '3'])
       
      }
  }
  const handle4 = () => {
    if (operacion==''){
      setNumero1([... numero1, '4'])
      
      }
      else{
        setNumero2([... numero2, '4'])
       
      }
  }
  const handle5 = () => {
    if (operacion==''){
    setNumero1([... numero1, '5'])
    
    }
    else{
      setNumero2([... numero2, '5'])
     
    }
  }
  const handle6 = () => {
    if (operacion==''){
      setNumero1([... numero1, '6'])
      
      }
      else{
        setNumero2([... numero2, '6'])
       
      }
  }
  const handle7 = () => {
    if (operacion==''){
      setNumero1([... numero1, '7'])
      
      }
      else{
        setNumero2([... numero2, '7'])
       
      }
  }
  const handle8 = () => {
    if (operacion==''){
      setNumero1([... numero1, '8'])
      
      }
      else{
        setNumero2([... numero2, '8'])
       
      }
  }
  const handle9 = () => {
    if (operacion==''){
      setNumero1([... numero1, '9'])
      
      }
      else{
        setNumero2([... numero2, '9'])
       
      }
  }



  return (
    <View style={styles.container}>
              <Pressable onPress={()=>{handleCE()}} style={styles.button}>
          <Text style={styles.text}>CE</Text>
        </Pressable>
        <Pressable onPress={()=>{handleC()}} style={styles.button}>
          <Text style={styles.text}>C</Text>
        </Pressable>
        <Pressable onPress={()=>{handlePorcentaje()}} style={styles.button}>
          <Text style={styles.text}>%</Text>
        </Pressable>
        <Pressable onPress={()=>{handle1()}} style={styles.button}>
          <Text style={styles.text}>1</Text>
        </Pressable>
        <Pressable onPress={()=>{handle2()}} style={styles.button}>
          <Text style={styles.text}>2</Text>
        </Pressable>
        <Pressable onPress={()=>{handle3()}} style={styles.button}>
          <Text style={styles.text}>3</Text>
        </Pressable>
        <Pressable onPress={()=>{handle4()}} style={styles.button}>
          <Text style={styles.text}>4</Text>
        </Pressable>
        <Pressable onPress={()=>{handle5()}} style={styles.button}>
          <Text style={styles.text}>5</Text>
        </Pressable>
        <Pressable onPress={()=>{handle6()}} style={styles.button}>
          <Text style={styles.text}>6</Text>
        </Pressable>
        <Pressable onPress={()=>{handle7()}} style={styles.button}>
          <Text style={styles.text}>7</Text>
        </Pressable>
        <Pressable onPress={()=>{handle8()}} style={styles.button}>
          <Text style={styles.text}>8</Text>
        </Pressable>
        <Pressable onPress={()=>{handle9()}} style={styles.button}>
          <Text style={styles.text}>9</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
   button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
    margin: 10,
    backgroundColor: 'blue',
    marginTop: 50,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

})
