import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import {primary} from '../config/color'
function PostPreview({navigation,post,routeName}){
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
        <View
                style={{
                 margin:0.4,
                 
                  }}>
                <TouchableOpacity 
                 onPress={()=>{
                  
                  navigation.navigate({
                      routeName:routeName,
                  
                         params: {
                          post : post,
                          isTwoHand : false
          
                        }});
               
  
           }}>
                <ImageBackground
                 style={styles.imagePosts}
                 source={{uri:url} }
                 resizeMode='cover'
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
               {loading ?  <ActivityIndicator size="large" color={primary}/> :null}

                 </ImageBackground>
              
                </TouchableOpacity>
           </View>
    )
}
export default PostPreview;
const styles = StyleSheet.create({

    imagePosts: {
        margin:0.2,
        width:(Dimensions.get('window').width/3   - 1)
        ,height:(Dimensions.get('window').width/3   - 1),
        alignItems:"center",
        justifyContent:"center"
      },

})
