import React from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native';

import {primary} from '../config/color'
    
export default function MacroList({macros,navigation}){
    
    return (

        <FlatList
        style={{
        
          height:60,
          backgroundColor:"#FFF",
          
        }}
        contentContainerStyle={{
          alignItems:"center",
          backgroundColor:"#FFF"

        }}
        
        showsHorizontalScrollIndicator={false}
        data={macros}
        horizontal={true}
        renderItem={
      ({item})=>{
       
      return(
      <TouchableOpacity
        style={{
          justifyContent:"center",
          alignItems:'center',
          borderRadius:25,
          borderWidth:1.5,
          height:30,
          margin:4.7,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          minWidth: 90,
          backgroundColor:"white",
          borderColor:primary


        }}
        onPress={()=>{
          let th =false
          if(item=="2hand"){
            th= true;
          }
          console.log(th)
          navigation.navigate({routeName:"MacroTips"
          ,params :  {
            th : th,
            macro:item
          }
        
        });
        }}
      
      >
        <Text style={{
                  color:primary,
                  fontSize:14,
                  textAlign:"center",
                
                  fontFamily:"Manrope_700Bold"
      
                }}>{item}</Text>
      </TouchableOpacity>)
      }
        }
        />
    );

}