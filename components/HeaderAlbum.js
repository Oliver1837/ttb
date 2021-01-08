import React from 'react';
import {View,Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const HeaderAlbum = (props)=>{
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
               props.navigation.goBack();
           }}
           >
<Ionicons name="ios-close-sharp" size={24} color="black" style={{marginLeft:10}} /> 
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
export default HeaderAlbum;
const styles= StyleSheet.create({
    header:{
     
        
        flexDirection:"row",
  
        alignItems : 'center',
        justifyContent  : 'space-between',
        color:"white",   
        paddingTop:20
       
       
    },
    headerTitle:{
        tintColor:"white",        
        fontSize : 25
        ,
    }


})