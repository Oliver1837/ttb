import React from 'react';
import {View,Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const HeaderAdd = (props)=>{
    console.log(props.uri)
    return(
        <View style={styles.header}>
            <TouchableOpacity style={
               {
                borderColor:"white",
                borderWidth:2,
                 borderRadius:25,
                 width:100,
                 alignContent:"center",
                 
               }
           }
           onPress={()=>{
               props.navigation.navigate("Camera");
           }}
           >
  <Text style={StyleSheet.headerTitle,{
            color:"white",  
            fontSize : 18,
            textAlign:"center", 
            borderBottomColor:"white"
            ,fontStyle:"italic",
            fontWeight:"bold"
           
            }}>ANNULLA</Text>          
             </TouchableOpacity>
           <TouchableOpacity style={
               {
                   borderColor:"white",
                   borderWidth:2,
                    borderRadius:25,
                    width:100,
                    alignContent:"center",
                 
               }
           }
           onPress={()=>{
            props.navigation.navigate({routeName:"UploadPost",
            params:{
                uri:props.uri
            }});
        }}
           >
            <Text style={StyleSheet.headerTitle,{
            color:"white",  
            fontSize : 18,
            textAlign:"center", 
            borderBottomColor:"white"
            ,fontStyle:"italic",
            fontWeight:"bold"
           
            }}>AVANTI</Text>
            </TouchableOpacity>

            
        </View>
    
    
    
    );
}
export default HeaderAdd;
const styles= StyleSheet.create({
    header:{
     
        
        flexDirection:"row",
        backgroundColor: 'transparent',
        alignItems : 'center',
        justifyContent  : 'space-between',
        color:"white",   
        padding:25
       
       
    },
    headerTitle:{
        tintColor:"white",        
        fontSize : 25
        ,
    }


})