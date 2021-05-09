import { FontAwesome } from '@expo/vector-icons';
import React,{ useState} from 'react'
import { ActivityIndicator, Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import shorthash  from 'short-hash'
import { useEffect } from 'react';

function TwoHandPreview({post,navigation,routeName,price}){
    console.log(post.urlPost)
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
    return(
        <View
              style={{
               margin:0.4,
              
                }}>
              <TouchableOpacity 
               onPress={()=>{
                
                navigation.navigate({
                  routeName: routeName ,
              
                  params: {
                      post : post,
                      isTwoHand : true
      
                    }});

         }}>
              <ImageBackground
               style={loading ? styles.loading : styles.imagePosts}
               source={{uri:url,cache:"force-cache"} }
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
               fadeDuration={0}
               >
             {loading ?  <ActivityIndicator size="large" color="#FF6969"/> :

              <View style={
                {
                  height:"100%",
                  width:"100%",
                  flexDirection:"row",
                  marginTop:100,
                  marginLeft:5
                }
              }>
                
              
              <Text style={
                {
                  fontSize:17,
                  fontWeight:"bold",
                  color:"#fff",
                  fontFamily:"Manrope_800ExtraBold"
                }
              }>{price + "€"}</Text>
            
              </View>
                }
      

            </ImageBackground>
            
              </TouchableOpacity>
         </View>


    );
}

export default TwoHandPreview;

const styles = StyleSheet.create({

    imagePosts: {
        margin:0.2,
        width:(Dimensions.get('window').width/3   - 1)
        ,height:(Dimensions.get('window').width/3   - 1),
     
      },
      loading: {
        margin:0.2,
        width:(Dimensions.get('window').width/3   - 1)
        ,height:(Dimensions.get('window').width/3   - 1),
        justifyContent:"center"
        , alignItems:"center"
      },

})
