import React from 'react'
import {View , Text, StyleSheet, Button ,TouchableOpacity,Dimensions,FlatList,ImageBackground,Image} from 'react-native'
import HeaderAdd from './HeaderAdd';
const {width, height} = Dimensions.get('window');

const ImagePostUpload = (props)=>{
   
    return (
        <View style={{flexDirection:"column",justifyContent:"center" ,alignItems:"center"}}>

          <ImageBackground source={{uri:props.uri}} repeat style={styles.video} >
   
            </ImageBackground>
     
        </View>
      );
}
export default ImagePostUpload;

const styles = StyleSheet.create({
    video: {
      height: height/1.8,

      width: width,
      backgroundColor: '#000',
      marginTop:25
    },
   
  });