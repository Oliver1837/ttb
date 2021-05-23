
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {View, TouchableOpacity,Text,StyleSheet,Image} from 'react-native'
import { useSelector } from 'react-redux'
import {primary,secodary} from '../config/color'
import Svg, { SvgProps, G, Path } from "react-native-svg"


export default function IconCart({navigation,isBlack}) {
    let number = useSelector(state=> state.cart.number)
    console.log("VAlore isBlack"+isBlack)
  return (  
  <TouchableOpacity style={{
        marginRight:10
      }} onPress={()=>{ 
        navigation.navigate("Carrello")
        //navigator("Carrello")
      }}>
        <View>
        {number === 0 
            ? 
            null 
            : 
            <View style={{position:"absolute",marginVertical:-10,marginHorizontal:-12,backgroundColor:secodary,borderRadius:10,height:20,width:20}}>
            <Text style={{color:"white",textAlign:"center",fontSize:12,fontWeight:"bold"}}> {number}</Text>   
            </View>
            }
            <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32.861}
      height={27.5}
      viewBox="0 0 32.861 27.5"
    >
      <G
        data-name="Raggruppa 196"
        fill="none"
        stroke={isBlack?"black":"#FFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <Path data-name="Linea 87" d="M6.75 18.752h4.981" />
        <Path data-name="Linea 88" d="M8.75 22.752h15.999" />
        <G data-name="Raggruppa 195">
          <Path
            data-name="Tracciato 171"
            d="M10.749 24.752a2 2 0 112 2 2 2 0 01-2-2z"
          />
          <Path
            data-name="Tracciato 172"
            d="M26.75 24.752a2 2 0 11-2-2 2 2 0 012 2z"
          />
          <Path
            data-name="Tracciato 173"
            d="M5.654 4.75H30.1a2 2 0 011.922 2.551l-2.856 10a2 2 0 01-1.924 1.451H10.356a2 2 0 01-1.953-1.566L4.75.75h-4"
          />
          <Path data-name="Linea 89" d="M16.749 22.752h3.999" />
          <Path data-name="Tracciato 174" d="M8.75 22.752h-2a2 2 0 010-4" />
        </G>
      </G>
    </Svg>
          
         </View>
    </TouchableOpacity>)
}
const style = StyleSheet.create({

})