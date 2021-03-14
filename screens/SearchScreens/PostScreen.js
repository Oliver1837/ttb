import React from 'react'
import {View , Text, StyleSheet, Button ,TouchableOpacity,Dimensions,FlatList,ImageBackground,Image} from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures';
import { useDispatch } from 'react-redux';
import Post from '../../components/Post';
import { TWOHAND, USERS } from '../../data/dummy-data';
import { addCart, removeCart } from '../../store/actions/Cart';

const {width, height} = Dimensions.get('window');

const PostScreen = (props)=>{
    const post = props.navigation.getParam("post")
    const user = USERS.find(u=> u.idUser===post.userId);
    const isTwoHand =props.navigation.getParam("isTwoHand")
    const dispatch = useDispatch()
    var price = 0;
    if(isTwoHand===true){

      var tw = TWOHAND.find(tw=> tw.idPost===post.idPost);
      price = tw.prezzo
   }
   
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
        <Post post ={post} isTwoHand = {isTwoHand} navigation={props.navigation} onAddCart={()=>{
          console.log("add ")
          dispatch(addCart(user,post,price))
        }} />
        </GestureRecognizer>
      );
}
export default PostScreen;
