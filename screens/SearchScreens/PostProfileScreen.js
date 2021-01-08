import React from 'react'
import {View , Text, StyleSheet, Button ,TouchableOpacity,Dimensions,FlatList,ImageBackground,Image} from 'react-native'
import Post from '../../components/Post';
const {width, height} = Dimensions.get('window');

const PostProfileScreen = (props)=>{
    const post = props.navigation.getParam("post")
    const isTwoHand = props.navigation.getParam("isTwoHand")
    return (
        <Post post ={post} isTwoHand = {isTwoHand}/>
      );
}
export default PostProfileScreen;
