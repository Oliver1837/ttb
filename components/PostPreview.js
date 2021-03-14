import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'

function PostPreview({navigation,post,routeName}){
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
                 source={{uri:post.urlPost} }
                 resizeMode='cover'/>
              
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
      },

})
