import React, { createContext } from 'react';


const EstadosContext = createContext({ 
    banderaOpera: false, setBanderaOpera: () => {}, 
    numero1: [''], setNumero1: ()=>{},
    numero2: [''], setNumero2: ()=>{},
    resultado: 0, setResultado: ()=>{},
    operacion: '', setOperacion: ()=>{},
    puntoSeted: false, setPuntoSeted: ()=>{},
    ceroSeted: false, setCeroSeted: ()=>{},
});
export {EstadosContext};