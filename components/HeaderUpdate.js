import React from 'react';
import {View,Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { uptadeTwoHand,uptadePost } from '../store/actions/UploadPost';
import { useDispatch } from 'react-redux';
const HeaderUpdate = ({uri,navigate,routeNameContinua,routeNameBack,label,array,isTh,isLoading})=>{
   const dispatch = useDispatch()
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
               console.log("Premuto")
               navigate.navigate({routeName:routeNameBack});
           }}
           >
<Ionicons name="ios-close-sharp" size={24} color="black" style={{marginLeft:10}} /> 
             </TouchableOpacity>
           <TouchableOpacity style={
               {
                   borderColor:"white",
                   borderWidth:2,
                    borderRadius:25,
                    width:150,
                    alignContent:"center",
                    height:30
                 
               }
           }
           onPress={()=>{
               console.log("premuto")
               if(array!=null && isTh===false) {
                dispatch(uptadePost(array[0],array[1],array[2]))
               }else if(isTh && array!=null){
                dispatch(uptadeTwoHand(array[0],array[1],array[2],array[3],array[4],array[5],array[6]))
               }
            navigate.replace("Profile");
        }}
           >
            <Text style={StyleSheet.headerTitle,{
            fontSize : 18,
            textAlign:"center", 
            borderBottomColor:"white"
            ,fontStyle:"italic",
            fontWeight:"bold"
           
            }}>{label}</Text>
            </TouchableOpacity>

            
        </View>
    
    
    
    );
}
export default HeaderUpdate;
const styles= StyleSheet.create({
    header:{
     
        
        flexDirection:"row",
  
        alignItems : 'center',
        justifyContent  : 'space-between',
        color:"white",   
        paddingTop:20,
        marginTop:15,
        backgroundColor:"#FFF"
       
       
    },
    headerTitle:{
        tintColor:"white",        
        fontSize : 25
        ,
    }


})