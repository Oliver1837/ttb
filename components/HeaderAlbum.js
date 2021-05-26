import React from 'react';
import {View,Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { uploadPost, uploadTwoHand } from '../store/actions/UploadPost';
import { useDispatch } from 'react-redux';
import NextIcon from './Icons/NextIcon';
import CloseIcon from './Icons/CloseIcon';

const HeaderAlbum = ({uri,navigate,routeNameContinua,routeNameBack,label,array,isTh,scale})=>{
   const dispatch = useDispatch()
    return(
        <View style={styles.header}>
            <TouchableOpacity style={
               {
                 width:50,
                 height:50,
                 paddingTop:18,
                 marginLeft:8
               }
           }
           onPress={()=>{
               console.log("Premuto")
               navigate.navigate({routeName:routeNameBack});
           }}
           >
            <CloseIcon/>
             </TouchableOpacity>
           <TouchableOpacity style={
               {
                  
                    width:25,
                 
               }
           }
           onPress={()=>{
               if(array!=null && isTh===false) {
                dispatch(uploadPost(array[0],array[1],array[2]))
               }else if(isTh && array!=null){
                dispatch(uploadTwoHand(array[0],array[1],array[2],array[3],array[4],array[5],array[6]))
               }
            navigate.navigate({routeName:routeNameContinua,
            params:{
                uri:uri
                ,scale:scale
            }});
        }}
           >
            <NextIcon/>
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
        paddingTop:60,
        height:60,
       
       
    },
    headerTitle:{
        fontSize : 25
        ,
    }


})