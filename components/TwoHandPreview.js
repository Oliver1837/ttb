import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
function TwoHandPreview({post,navigation,routeName,price}){
    console.log(post.urlPost)
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
               style={styles.imagePosts}
               source={{uri:post.urlPost} }
               resizeMode='cover'
            >
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
              }>{price + "$"}</Text>
              </View>
              
      

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

})
