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
const {width, height} = Dimensions.get('window');


async function getLocationAsync() {
  // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
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
     // const [albumPicker, setAlbumPicker] = useState("Lightroom")
     const [albumPicker, setAlbumPicker] = useState("Camera")
      const [resize,setResize] = useState(false)
      useEffect(()=>{
        async function getPhotoAlbum () {
          let albums = await MediaLibrary.getAlbumsAsync()
          setAlbumPicker(albums[1].title)
          const album = await MediaLibrary.getAlbumAsync(albumPicker)
        
          const photosTemp = await MediaLibrary.getAssetsAsync({ album: album ,first:50})
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
      },[albumPicker])
      
     const scaleT =new Animated.Value(1)
     const trasformX = new Animated.Value(1)
     const trasformY = new Animated.Value(1)
     const onPinchChange = Animated.event([
       {nativeEvent:{scale: scaleT > 1.000 ? scaleT.setValue(1) : scaleT}}
      ],{useNativeDriver:true})
      const onPinchEventChange= (event)=>{
      }
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
       
            height:width,

            backgroundColor:"black",
            width:width,
            maxHeight:width,
            transform:[{scale:1}]
          }}>
       <PinchGestureHandler
       onGestureEvent={onPinchChange}
       onHandlerStateChange={onPinchEventChange}
      
               >
  <Animated.Image
  resizeMethod={"scale" }
  resizeMode={"contain"}
  style={{
    flexDirection:"row",
    height: width,
    width:width,
    maxHeight:width,
    justifyContent:"flex-end",
    transform:[{scale: scaleT > 1.000 ? scaleT.setValue(1) : scaleT}],
    backgroundColor:"black"
  
  }}
  source={{uri: first.uri}}
 />
 </PinchGestureHandler>
 </View>
          
  <View  style={{ width: "100%",height:60,backgroundColor:"#fff",flexDirection:"row",justifyContent:"space-between"}}>
  <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>{albumPicker}</Text>
        <AntDesign name="caretdown" size={16} color="black" />
      </TouchableOpacity>
  
    <TouchableOpacity onPress={()=>props.navigation.navigate("Camera")} style={{width:50,height:50,backgroundColor:"transparent",borderRadius:25,
    margin:5, justifyContent:"center",alignItems:"center",
    borderWidth:2,borderColor:"black"} }><Ionicons name="ios-camera-sharp" size={24} color="black" /></TouchableOpacity>



  </View>
         
            
            <FlatList
           
             showsVerticalScrollIndicator={false}
          data={photos}
          
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
    justifyContent: 'center',
    alignItems: 'center',
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
  borderColor:"black",
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