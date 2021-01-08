import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import {View , Text, StyleSheet, Button ,TouchableOpacity,Dimensions,FlatList,ImageBackground,Image} from 'react-native'
import { useDispatch } from 'react-redux';
import Post from '../../components/Post';
import { TWOHAND, USERS } from '../../data/dummy-data';
import { addCart } from '../../store/actions/Cart';
const {width, height} = Dimensions.get('window');

const PostScreen = (props)=>{
    const post = props.navigation.getParam("post")
    const user = USERS.find(u=> u.idUser===post.userId);
    const isTwoHand = props.navigation.getParam("isTwoHand")
    var price = 0;
    if(isTwoHand===true){

      var tw = TWOHAND.find(tw=> tw.idPost===post.idPost);
      price = tw.prezzo
   }
   
  
   
    const dispatch = useDispatch()
    return (
        <Post post ={post} isTwoHand = {isTwoHand} onAddCart={()=>{
          console.log("add ")
          dispatch(addCart(user,post,price))
        }}/>
      );
}
PostScreen.navigationOptions = navData => {
  var isTw = navData.navigation.getParam("isTwoHand")
  if(isTw){
  return {
    

    headerRight: ()=>{ return (
      <TouchableOpacity style={{
        marginRight:5
      }} onPress={()=>{
      }}>
         <Ionicons name="cart" size={30} color="white" />      
</TouchableOpacity>
    )}
      
  };
}
};
export default PostScreen;
