import React from 'react'
import {View , Text, StyleSheet, Button ,TouchableOpacity,Dimensions,FlatList,ImageBackground,Image} from 'react-native'
import GestureRecognizer    from 'react-native-swipe-gestures';
import { useDispatch } from 'react-redux';
import Post from '../../components/Post';
import { TWOHAND, USERS } from '../../data/dummy-data';
import { addCart } from '../../store/actions/Cart';
const {width, height} = Dimensions.get('window');

const PostScreen = (props)=>{
    const post = props.navigation.getParam("post")
  
  

    const config = {
      velocityThreshold: 0.4,
      directionalOffsetThreshold: 100
    };
    return (
      <GestureRecognizer
        onSwipeLeft={() =>{
          console.log("SWIPE SX")
            props.navigation.navigate({
                routeName: 'PostProfile',
            
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
        <Post post ={post} />
        </GestureRecognizer>
      );
}
export default PostScreen;
//PostScreen.navigation.
