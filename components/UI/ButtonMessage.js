import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {primary } from '../../config/color'
const ButtonMessage = () =>{
    return(
        <TouchableOpacity style={{
          justifyContent:"center",
          alignItems:'center',
          borderRadius:25,
          borderWidth:2,
          backgroundColor:"#FFF",
          height:45,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.9,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          borderColor:primary,
          width:100
        }}
        >
         <Image source={require('../../assets/icons/message.png')} style={{height:18,width:28.8,tintColor:primary}}/>
        </TouchableOpacity>
    );
}
export default ButtonMessage;