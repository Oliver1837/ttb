import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View , Text } from 'react-native';
import ImagePostUpload from '../../components/ImageUploadPost';

import GridOne from '../../components/Grid/GridOne';

const SelectPositionScreen = props =>{

  const uri = props.navigation.getParam("uri");
  const numberGrid =0 ;
  let grid = null;
  if(numberGrid===0){
      grid = <GridOne add={true} style={{ marginTop:50}} uri={uri}/>
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
            <ImagePostUpload uri = {uri} navigation = {props.navigation} style={{      marginTop:50,marginBottom:25}}/>
            <View style={{height:200,marginTop:25,}}>
            {grid}

            </View>
           
      </View>
    );
  
}

export default SelectPositionScreen;
SelectPositionScreen.navigationOptions = (navData)=>{
    return{
    headerRight: ()=>{
        return(<TouchableOpacity style={{  marginRight:5}}
        onPress={()=>{
                navData.navigation.navigate({routeName:"UploadPost",
                    params:{
                        uri : navData.navigation.getParam("uri")
                    }
            
            
            })
        }} >
         <Text style={{
             fontWeight:"bold",
             color:"black"
         }}>Avanti</Text>    
        </TouchableOpacity>)
    }
}

          }