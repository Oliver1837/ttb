import React, { useEffect, useState } from 'react'
import {View , TouchableOpacity, Image, StyleSheet, ActivityIndicator, ImageBackground} from 'react-native'

const ImageSearchCard = ({navigation,post})=>{
    const [url,setUrl] =useState(post.urlPost)
    const [loading,setLoading] =useState(false)
  
    useEffect(()=>{
      
     const preload = async () => {
        const uri =url;
        const name = shorthash.unique(uri);
        const path = `${FileSystem.cacheDirectory}${name}`;
        const image = await FileSystem.getInfoAsync(path);
        if (image.exists) {
          console.log('read image from cache');
           setUrl(image.uri)
          return;
        }
    
        console.log('downloading image to cache');
        const newImage = await FileSystem.downloadAsync(uri, path);
      
        
        setUrl(newImage.uri)
       
      };
      preload()
  
    },[])
    return (

        <TouchableOpacity 
        onPress={()=>{
         
         navigation.navigate({
             routeName: 'Post',
         
             params: {
                 post : post,
  
               }});
      
  
  }} style={styles.item}>
       <ImageBackground style={styles.title} source={{uri:url, cache:"force-cache"}} resizeMode='cover' 
       imageStyle={{  borderRadius:8,}}
       onLoadStart={
                  ()=>{
                    setLoading(true)
                  }
                 }
                 onLoadEnd={
                   ()=>{
                     setLoading(false)
                   }
                 }
                 >
               {loading ?  <ActivityIndicator size="large" color="#38C18A"/> :null}
         
       </ImageBackground>
       </TouchableOpacity>

    )
}
export default ImageSearchCard;
const styles = StyleSheet.create({ item: {
     
    margin:8,
     
     width:100
     ,height:158,
     borderRadius:10,
   },
   title: {
       width:100
     ,height:158,
     borderRadius:8,
     justifyContent:"center"
     , alignItems:"center"
   },})