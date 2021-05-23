import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {primary} from '../../config/color'
import {  
   useFonts,
   Manrope_200ExtraLight,
   Manrope_300Light,
   Mandali_400Regular,
   Manrope_400Regular,
   Manrope_500Medium,
   Manrope_600SemiBold,
   Manrope_700Bold,
   Manrope_800ExtraBold 
} from "@expo-google-fonts/dev";
const ButtonFollow = ({follow,toggleFollow})=>{

    return (
        <TouchableOpacity style={{
            height:45,
            marginRight:11.5,
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowOpacity: 0.9,
            elevation: 20,
            shadowRadius: 100 ,
            shadowOffset : { width: 1, height: 13},
            justifyContent:"center",
            alignItems:'center',
            borderRadius:25,
            borderWidth:2,
            backgroundColor:follow>=0?"#fff":primary,
            borderColor:primary,
          }}
          onPress={()=> toggleFollow()}
          >
             <Text style={{
            fontSize:16,
            textAlign:"center",
            fontWeight:"bold",
            textAlignVertical:"center",
            padding:5,
            fontFamily:"Manrope_700Bold",
            color:follow>=0?primary:"#fff",
            }}
             >
             {follow>=0?"Following":"Follow"}
             </Text>
          </TouchableOpacity>
    )
}
export default ButtonFollow;
const styles = StyleSheet.create({
    btn:{
       
    },
    txt:{
        fontSize:15,
        textAlign:"center",
        fontWeight:"bold",
        textAlignVertical:"center",
        padding:5,
        fontFamily:"Manrope_700Bold"
    }


})