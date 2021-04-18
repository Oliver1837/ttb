import React from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native';


    
export default function MacroList({macros,navigation}){
    
    return (

        <FlatList
        style={{
        
          height:60,
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
          borderWidth:1,
          borderWidth:2,
          height:40,
          margin:5,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          minWidth: 100,
          backgroundColor:"black"
        }}
        onPress={()=>{
          let th =false
          if(item==="2HAND"){
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
                  fontSize:20,
                  textAlign:"center",
                  fontWeight:"bold",
                  textAlignVertical:"center"
                  ,
                  padding:5
      
                }}>{item}</Text>
      </TouchableOpacity>)
      }
        }
        />
    );

}