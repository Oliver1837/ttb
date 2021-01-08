import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { FlatList, View } from 'react-native';
import ImagePostUpload from '../../components/ImageUploadPost';
import SelectGrid from '../../components/SelectGrid';
import GridOne from '../../components/Grid/GridOne';

const SelectPositionScreen = props =>{
  const uri = props.navigation.getParam("uri");
  const numberGrid =0 ;
  let grid = null;
  if(numberGrid===0){
      grid = <GridOne add={true} style={{ marginTop:50}}/>
  }
  if(numberGrid===1){
    grid = <GridOne/>
}
if(numberGrid===2){
    grid = <GridOne/>
}
if(numberGrid===3){
    grid = <GridOne/>
}
  return (
      <View  style={{flexDirection:"column",justifyContent:"center" ,alignItems:"center",backgroundColor:"#FFF"}}>     
            <ImagePostUpload uri = {uri.uri} navigation = {props.navigation} style={{      marginTop:50,marginBottom:25}}/>
            <View style={{height:200,marginTop:25,}}>
            {grid}

            </View>
           
      </View>
    );
  
}
export default SelectPositionScreen;