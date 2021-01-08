import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import HeaderAdd from '../../components/HeaderAdd';
import HeaderAlbum from '../../components/HeaderAlbum';
const AlbumScreen=(props)=> {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [10, 20],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
        props.navigation.navigate({routeName:"CheckPhotoAlbum",
        params:{
            uri:result
        }});
    }
  };

  return (<View style={{backgroundColor:"white"}}>
      <HeaderAlbum navigation ={props.navigation}/>
    <View style={{ height:"100%", alignItems: 'center', justifyContent: 'center' }}>
        

         <TouchableOpacity style={{
          justifyContent:"center",
          alignItems:'center',
          borderRadius:10,
          borderWidth:1,
          borderWidth:2,
          backgroundColor:"black",
          height:40,
          margin:1,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.9,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          borderColor:"black"
          ,width:150
        }}
        onPress={()=>{
            pickImage();
        }}
     
        >
          <Text style={{
            color:"white",
            fontSize:15,
            textAlign:"center",
            fontWeight:"bold",
            textAlignVertical:"center"
            ,
            padding:5

          }}>ALBUM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          justifyContent:"center",
          alignItems:'center',
          borderRadius:10,
          borderWidth:1,
          borderWidth:2,
          backgroundColor:"black",
          height:40,
          margin:1,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.9,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          borderColor:"black"
          ,width:150
        }}
        onPress={()=>{
             props.navigation.navigate("Camera")
        }}
     
        >
          <Text style={{
            color:"white",
            fontSize:15,
            textAlign:"center",
            fontWeight:"bold",
            textAlignVertical:"center"
            ,
            padding:5

          }}>CAMERA</Text>
        </TouchableOpacity>

    </View>
    </View>
  );
}

export default AlbumScreen;
