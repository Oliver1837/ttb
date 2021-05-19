import React, { useState, useEffect } from 'react';
import{View,Button,ScrollView,Image, ImageBackground, FlatList ,StyleSheet, TouchableOpacity,Text, Dimensions, Modal, TouchableHighlight,Animated} from 'react-native'
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import HeaderAdd from '../../components/HeaderAdd';
import HeaderAlbum from '../../components/HeaderAlbum';
import {Permissions} from 'expo-permissions'
import { Picker } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import {
  PanGestureHandler,
  PinchGestureHandler,
  RotationGestureHandler,
  State,
} from 'react-native-gesture-handler';
import { event } from 'react-native-reanimated';
import FirstImage from '../../components/UploadPostComponets/FirstImage';
import PinchableBox from '../../components/UploadPostComponets';
const {width, height} = Dimensions.get('window');

import {primary} from '../../config/color'
async function getLocationAsync() {
  const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === 'granted') {
    return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
  } else {
    throw new Error('Location permission not granted');
  }
}
async function getPhotoAlbum (setAlbumPicker,setAlbums,setPhotos,albumPicker) {
  const album = await MediaLibrary.getAlbumAsync(albumPicker)
  const albums = await MediaLibrary.getAlbumsAsync()
  const photosTemp = await MediaLibrary.getAssetsAsync({ album: album ,first:100})
  const array = photosTemp.assets.map(asset => ({
    ...asset,
    type: asset.mediaType,
    timestamp: asset.creationTime,
    selected: false,
    
  }))

setAlbumPicker(album.title)
setAlbums(albums.map(a => a.title))
setPhotos(array)
setFirst(array[0])
}

const AlbumScreen=(props)=> {
  const[photos,setPhotos] = useState([])
      const [modalVisible, setModalVisible] = useState(false);
      const [render ,iSRender]= useState(false);
      const[first,setFirst] = useState({"albumId": "",
      "creationTime": 0,
      "duration": 0,
      "filename": "",
      "height": 0,
      "id": "0",
      "mediaType": "",
      "modificationTime": 0,
      "selected": false,
      "timestamp": 0,
      "type": "",
      "uri": "",
      "width": 0,})//Elemento selezionato 
      const[fileName,setFileName]= useState("")
      const [albums, setAlbums] = useState([])

      const[scale,setScale] = useState(1)
  const [albumPicker, setAlbumPicker] = useState("Lightroom")
   //  const [albumPicker, setAlbumPicker] = useState("Camera")
      const [resize,setResize] = useState(false)
      useEffect(()=>{
        async function getPhotoAlbum () {
          let albums = await MediaLibrary.getAlbumsAsync()
          setAlbumPicker(albums[1].title)
          const album = await MediaLibrary.getAlbumAsync(albumPicker)
        
          const photosTemp = await MediaLibrary.getAssetsAsync({ 
            album: album ,
           
            sortBy:['creationTime'],
          mediaType:['photo']
          })
          console.log(photosTemp)
          const array = photosTemp.assets.map(asset => ({
            ...asset,
            type: "photo",
            timestamp: asset.creationTime,
            selected: false,
            
          }))
        albums = albums.filter(a=> a.assetCount>1  )
        setAlbumPicker(album.title)
        setAlbums(albums.map(a => a.title))
        if(array.length>0){
        setPhotos(array)
        
        setFirst(array[0])
      }
        }
        getPhotoAlbum()
      },[])
      
   
      return (
        <View
          style={{
            flex: 1,
            height: "100%",
            backgroundColor:"#FFF"
          }}>
           <HeaderAlbum  uri={first} routeNameContinua="CheckPhotoAlbum" navigate={props.navigation} routeNameBack="Feed" label="AVANTI" array={null}/>
           <View
    style={{
      marginVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"white",
      height:400
    }}>
          <PinchableBox uri={first.uri} setScale={setScale}/>
          </View>  
  <View  style={{ width: "100%",height:60,backgroundColor:"#fff",flexDirection:"row",justifyContent:"space-between"}}>
  <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>{albumPicker}</Text>
        <AntDesign name="caretdown" size={16} color={primary} />
      </TouchableOpacity>
  
    <TouchableOpacity onPress={()=>props.navigation.navigate("Camera")} style={{width:50,height:50,backgroundColor:"transparent",borderRadius:25,
    margin:5, justifyContent:"center",alignItems:"center",
    borderWidth:2,borderColor:{primary}} }><Ionicons name="ios-camera-sharp" size={24} color={primary} /></TouchableOpacity>



  </View>
         
            
            <FlatList
             showsVerticalScrollIndicator={false}
             data={photos}
             initialNumToRender={5}
              renderItem={({item}) => (
             <View
              style={{
                flex: 1,
                flexDirection: 'column',
                margin: 1
              }}>
                <TouchableOpacity onPress={()=>{
                  setFirst( item);
                  setFileName(item.filename);
                  setResize(false)
                }}>
              
                <Image style={styles.imageThumbnail} source={{uri: item.uri}}/>
              </TouchableOpacity>
            </View>
          )}
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
           <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>ALBUM</Text>
            <ScrollView>
              {albums.map(a => <Text>{a}</Text>)
              }
            </ScrollView>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#FFF' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>CHIUDI</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
        </View>
      );
}

export default AlbumScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
 
    height: 155,
    width: width/3 -2.5,
  },
  header:{
    width:'100%',
    paddingTop:25,
    color:"white",
    
    flexDirection:"row",
    justifyContent:"space-between",
    
   
}, centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
  height:1200
},
modalView: {
  margin: 20,
  backgroundColor: 'white',
  borderTopRightRadius: 25,
     borderTopLeftRadius: 25,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  height:"100%",
  width:"100%",
  maxWidth:"100%",
  maxHeight:"100%"
},
openButton: {
  backgroundColor: '#FFF',
  borderRadius: 20,
  padding: 10,
  elevation: 2,
  maxHeight:45,
  flexDirection:"row",
  borderColor:primary,
  borderWidth:2,
  margin:10
},
textStyle: {
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
},
}); 
/* */