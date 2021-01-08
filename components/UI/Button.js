

import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props)=>{
return(<View style={styles.container}>
 <TouchableOpacity style={{
          justifyContent:"center",
          alignItems:'center',
          borderRadius:10,
          borderWidth:1,
          borderWidth:2,
          backgroundColor:props.follow?"black":"#0095f6",
          height:40,
          margin:1,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.9,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          borderColor:props.follow?"black":"#0095f6"
        }}
        onPress={props.toggleTag}
        >
          <Text style={{
            color:"white",
            fontSize:15,
            textAlign:"center",
            fontWeight:"bold",
            textAlignVertical:"center"
            ,
            padding:5

          }}>{props.title}</Text>
        </TouchableOpacity>
 </View>);
 }
 export default Button;
 const styles = StyleSheet.create({
    container: {
      display: 'flex',
    
          textAlign: 'center',
    },
  });