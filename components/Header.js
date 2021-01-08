import React from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native';
const Header = props=>{

return(
    <View style={styles.header}>
        <Text style={StyleSheet.headerTitle,{color:"white",  
        fontSize : 20, 
        borderBottomColor:"white"
        ,fontStyle:"italic",
       
        }}>TipToBe</Text>
        
    </View>



);

}

const styles= StyleSheet.create({
    header:{
     
        
        
        backgroundColor: 'transparent',
        alignItems : 'center',
        justifyContent  : 'center',
        color:"white",   
       
       
    },
    headerTitle:{
        tintColor:"white",        
        fontSize : 25
        ,
    }


})

export default Header;