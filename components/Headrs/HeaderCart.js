import React from 'react';
import {View,Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const HeaderCart = (props)=>{
    console.log(props.uri)
    return(
        <View style={styles.header}>
               <TouchableOpacity onPress={()=>{
        props.navigation.navigate("Carrello")
      }}>
<Ionicons name="cart" size={30} color="black" />      
</TouchableOpacity>
     <TouchableOpacity onPress={()=>{
        props.navigation.navigate("Carrello")
      }}>
<Ionicons name="cart" size={30} color="black" />      
</TouchableOpacity>

            
        </View>
    
    
    
    );
}
export default HeaderCart;
const styles= StyleSheet.create({
    header:{
     
        
        flexDirection:"row",
        backgroundColor: 'transparent',
        alignItems : 'center',
        justifyContent  : 'space-between',
        color:"white",   
        padding:20,
        marginTop:10
       
       
    },
    headerTitle:{
        tintColor:"white",        
        fontSize : 25
        ,
    }


})