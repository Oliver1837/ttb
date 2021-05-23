import React, { Component } from 'react';
import { Image, View } from 'react-native';

const ImageProfile = ({url}) =>{
    return(
        <View style={{
            backgroundColor:"white",
            marginTop:16
      }}>
          <Image
          style={{
              height:100,
              width:100,
              borderRadius:50,
              marginRight:20,

          }}
          source={{uri:url}}
          />
      </View>
    )
}

export default ImageProfile;