import React from 'react'
import {View , Text, StyleSheet, Button ,TouchableOpacity,Dimensions,FlatList,ImageBackground,Image} from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures';
import Post from '../../components/Post';
const {width, height} = Dimensions.get('window');

const PostScreen = (props)=>{
    const post = props.navigation.getParam("post")
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 100
    };

    return (
      <GestureRecognizer
      onSwipeLeft={() =>{
          props.navigation.navigate({
              routeName: 'Profile',
          
              params: {
                  userId: post.userId,
  
                }});
              
      }}
      config={config}
      style={ {
          height:height,
          width:width
      }}
      >
        <Post post ={post} isTwoHand = {false}/>
        </GestureRecognizer>
      );
}
export default PostScreen;
