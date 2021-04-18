
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {View, TouchableOpacity,Text,StyleSheet,Image} from 'react-native'
import { useSelector } from 'react-redux'

export default function IconCart({navigation,isBlack}) {
    let number = useSelector(state=> state.cart.number)
  return (  
  <TouchableOpacity style={{
        marginRight:10
      }} onPress={()=>{ 
        navigation.navigate("Carrello")
        //navigator("Carrello")
      }}>
        <View>
        <Image source={require('../assets/icons/shop.png')} style={{height:25,width:30, tintColor:isBlack?"black":"#FFF"}}/>
            {number === 0 
            ? 
            null 
            : 
            <Text style={{position:"absolute",color:"white",marginVertical:15,backgroundColor:"red",borderRadius:25,height:15,width:15,textAlign:"center",fontSize:10,fontWeight:"bold"}}> {number}</Text>   
            }
         </View>
    </TouchableOpacity>)
}
const style = StyleSheet.create({

})