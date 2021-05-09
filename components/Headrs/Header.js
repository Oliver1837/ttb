import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {View,Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigationState } from '@react-navigation/native';
import { NavigationContext } from 'react-navigation';
import IconCart from './IconCart';

const Header = ({navigation})=>{


return(
    <View style={styles.header}>
         <TouchableOpacity style={{
        marginRight:5
      }} onPress={()=>{ 

        //navData.navigation.navigate("Carrello")
      }}>
         <Ionicons name="cart" size={30} color="black" />      
</TouchableOpacity>
        <Text style={StyleSheet.headerTitle,{color:"white",  
        fontSize : 20, 
        borderBottomColor:"white"
        ,fontStyle:"italic",
       
        }}>TipToBe</Text>
            <IconCart  navigation={navigation.navigation}/>
            </View>



);

}

const styles= StyleSheet.create({
    header:{
     
        
        flexDirection:"row",

        backgroundColor: 'transparent',
        alignItems : 'center',
        justifyContent  : 'space-between',
        color:"white",   
        paddingVertical:20
       
       
    },
    headerTitle:{
        tintColor:"white",        
        fontSize : 25
        ,
    }


})

export default Header;