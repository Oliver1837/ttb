import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { FlatList, View } from 'react-native';
import ImagePostUpload from '../../components/ImageUploadPost';
import SelectGrid from '../../components/SelectGrid';

const GridScreen = props =>{
  const uri = props.navigation.getParam("uri");
    return (
      <View  style={{flexDirection:"column",justifyContent:"center" ,alignItems:"center",backgroundColor:"#FFF"}}>     
            <ImagePostUpload uri = {uri.uri} navigation = {props.navigation} style={{      marginTop:50}}/>
            <SelectGrid navigation={props.navigation} uri={uri.uri}/> 

      </View>
    );
  
}
export default GridScreen;