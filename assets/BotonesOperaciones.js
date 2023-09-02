import { StyleSheet, Pressable, Text, View } from "react-native"
import { EstadosContext } from "./Context/EstadosContext"
import { useContext } from "react"
import { Alert } from "react-native"


export const BotonesOperaciones = () => {

    const {resultado, setResultado, numero1, setNumero1,  numero2, setNumero2, banderaOpera, setBanderaOpera,  operacion, setOperacion, setPuntoSeted, puntoSeted} = useContext(EstadosContext)

    const operacionSelector = (operacion) => {
        switch (operacion){
            case 'suma':
                setOperacion('+')
                setPuntoSeted(false)
                break;
                case 'resta':
                    setOperacion('-')
                    setPuntoSeted(false)
                        break;
                    case 'division':
                        setOperacion('/')
                        setPuntoSeted(false)
                                break;
                        case 'multiplicacion':
                            setOperacion('*')
                            setPuntoSeted(false)
                                        break;
                            default: break;
        }
      }

      const handleIgual = (operacion) => {
        if (numero2.join('')!='.' && numero1.join('')!='.'){
        switch (operacion){
            case '+':
                setResultado(parseInt(numero1.join(''))+parseInt(numero2.join('')))
                setBanderaOpera(true)
                break;
                case '-':
                    setResultado(numero1.join('')-numero2.join(''))
                    setBanderaOpera(true)
                    break;
                    case '/':
                        setResultado(numero1.join('')/numero2.join(''))
                        setBanderaOpera(true)
                        break;
                        case '*':
                            setResultado(numero1.join('')*numero2.join(''))
                            setBanderaOpera(true)
                            break;
                            default: break;
            }
        } else
        {
            Alert.alert('Peligro', 'Es necesario introducir un numero más', [
                {
                    text: 'Aceptar',
                }
            ])
        
        if (numero1.join('')=='.'){
            setBanderaOpera(false)
            setOperacion('')
            setNumero2([''])
        }
        
        
        }
      }

  return (
    <View style={styles.container}>
          <Pressable onPress={()=>{operacionSelector('suma')}} style={styles.button}>
          <Text style={styles.text}>+</Text>
        </Pressable>
        <Pressable onPress={()=>{operacionSelector('resta')}} style={styles.button}>
          <Text style={styles.text}>-</Text>
        </Pressable>
        <Pressable onPress={()=>{operacionSelector('multiplicacion')}} style={styles.button}>
          <Text style={styles.text}>*</Text>
        </Pressable>
        <Pressable onPress={()=>{operacionSelector('division')}} style={styles.button}>
          <Text style={styles.text}>/</Text>
        </Pressable>
        <Pressable onPress={()=>{handleIgual(operacion)}} style={styles.button}>
          <Text style={styles.text}>=</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      marginTop: 10
    },
     button: {
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      margin: 10,
      marginTop: 30,
      backgroundColor: 'blue',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  
  })
