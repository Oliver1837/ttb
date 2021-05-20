
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {View, TouchableOpacity,Text,StyleSheet,Image} from 'react-native'
import { useSelector } from 'react-redux'
import {primary,secodary} from '../config/color'

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
          
            <Image source={require('../assets/icons/shop.png')} style={{height:25,width:30, tintColor:isBlack?"black":"#FFF",backgroundColor:"trasparent"}}/>
          
         </View>
    </TouchableOpacity>)
}
const style = StyleSheet.create({

})