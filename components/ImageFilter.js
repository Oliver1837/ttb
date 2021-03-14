import React from 'react';
import { Image, TouchableOpacity,StyleSheet, Dimensions,Text } from 'react-native';
const {width, height} = Dimensions.get('window');
function ImageFilter(props) {
    console.log(props.uri)
    return (
        <TouchableOpacity 
        style={{
          margin:10,
          flexDirection:"column",
          alignContent:"center"

        }}
        onPress={()=>{
          
          }}>
        
          <Image style={styles.imageThumbnail} source={{uri: props.uri}}/>
          <Text style={{width:"100%",textAlign:"center"}}>Filtro</Text>
        </TouchableOpacity>
    );
}

export default ImageFilter;
const styles= StyleSheet.create({
    imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 155,
    width:155,
  },})
