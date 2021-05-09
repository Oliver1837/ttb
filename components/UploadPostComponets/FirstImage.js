import React, { useState, useEffect } from 'react';
import{View,Button,ScrollView,Image, ImageBackground, FlatList ,StyleSheet, TouchableOpacity,Text, Dimensions, Modal, TouchableHighlight,Animated} from 'react-native'


const {width, height} = Dimensions.get('window');

const FirstImage = ({uri})=>{


  return (
    <View
    style={{
      marginVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"black"
    }}>
    <Image
    resizeMethod={"scale" }
    resizeMode={"contain"}
   style={{
 flexDirection:"row",
height: width,
width:width,
maxHeight:width,
justifyContent:"flex-end",
backgroundColor:"black"

}}
source={{uri: uri,}}
/>
  </View>
  );
}
export default FirstImage;