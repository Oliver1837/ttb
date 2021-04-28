import React from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native';


    
export default function MacroList({macros,navigation}){
    
    return (

        <FlatList
        style={{
        
          height:40,
          backgroundColor:"white"
          
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
          borderWidth:1,
          borderWidth:2,
          height:25,
          margin:4.7,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          minWidth: 65,
          backgroundColor:"black",

        }}
        onPress={()=>{
          let th =false
          if(item==="2hand"){
            th= true;
          }
          navigation.navigate({routeName:"MacroTips"
          ,params :  {
            th : th,
            macro:item
          }
        
        });
        }}
      
      >
        <Text style={{
                  color:"#FFF",
                  fontSize:12,
                  textAlign:"center",
                  fontWeight:"bold",
                  textAlignVertical:"center"
                 ,
                  fontFamily:"Manrope_700Bold"
      
                }}>{item}</Text>
      </TouchableOpacity>)
      }
        }
        />
    );

}