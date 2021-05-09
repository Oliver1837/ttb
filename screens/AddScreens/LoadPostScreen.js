import React, { Component, useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ImagePostUpload from '../../components/ImageUploadPost'
import HeaderAdd from '../../components/HeaderAdd';
import SelectGrid from '../../components/SelectGrid';
import ImageFilter from '../../components/ImageFilter';
import HeaderAlbum from '../../components/HeaderAlbum';
import * as ImageManipulator from 'expo-image-manipulator';

const LoadPostScreen = props =>{
    const uri = props.navigation.getParam("uri");
    console.log(uri)
    const filter = [" ", " " ," " ," ", " "]  
    const [ready, setReady] = useState(false);
  const [image, setImage] = useState(uri);
    useEffect(() => {
      (async () => {
        const manipResult = await ImageManipulator.manipulateAsync(
          image.uri,
       [   {resize:{height:104,width:78}
       }  ],
          { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
        );
        setImage(manipResult);
        console.log(manipResult)
      })();
    }, []);
  
    return (
        <View>      
     <HeaderAlbum  uri={uri.uri} routeNameContinua="UploadPost" navigate={props.navigation} routeNameBack="AlbumNav" label="AVANTI"  array={null}/>  
    
     <View  style={{flexDirection:"column",justifyContent:"center" ,alignItems:"center",backgroundColor:"#FFF"}}>    
     <ImagePostUpload uri = {image.uri} navigation = {props.navigation} style={{marginTop:50}}/>
     <View style={{
  flexDirection:"row",
 height:350,

  width:"90%",
  padding:10,
  justifyContent:"space-between"}}>
   <ScrollView style={{


  padding:25
}} horizontal={true}>
{filter.map(f => {return  <ImageFilter uri={uri.uri}/>})}

</ScrollView>
    
</View>
</View>
 




    
     </View>

    );
  
}

export default LoadPostScreen;

/*
<TouchableOpacity style={{
  borderColor:griglia?"green":"grey",
  borderWidth:1,
  height:100,
  width:100,
  alignContent:"center",
  borderRadius:10,
  justifyContent:"center",
  flexDirection:"column"

}}
  onPress={()=>{
      if(tw!==true ){      setGriglia(!griglia);
      }
  }}
>
  <Text style={{textAlign:"center",color:griglia?"green":"grey",}}>2HAND</Text>
</TouchableOpacity>
<TouchableOpacity style={{
  borderColor:tw?"green":"grey",
  borderWidth:1,
  height:100,
  width:100,
  alignContent:"center",
  borderRadius:10,
  justifyContent:"center",
  flexDirection:"column"
}}

onPress={()=>{
    if(griglia!==true ){  setTw(!tw); }
}}
>
  <Text style={{textAlign:"center",color:tw?"green":"grey",}}>GRIGLIA</Text>
</TouchableOpacity>



*/
/*


*/