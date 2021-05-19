import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import {View , Text, StyleSheet, Button ,TouchableOpacity,Dimensions,FlatList,ImageBackground,Image} from 'react-native'
import { useDispatch } from 'react-redux';
import IconCart from '../../components/IconCart';
import Post from '../../components/Post';
import { TWOHAND, USERS } from '../../data/dummy-data';
import { addCart, removeCart } from '../../store/actions/Cart';
const {width, height} = Dimensions.get('window');
const PostScreen = (props)=>{
    const post = props.navigation.getParam("post")
    const user = USERS.find(u=> u.idUser===post.userId);
    let isTwoHand = props.navigation.getParam("isTwoHand")
    var price = 0;
    if(isTwoHand===true){

      var tw = TWOHAND.find(tw=> tw.idPost===post.idPost);
      price = tw.prezzo
      isTwoHand="true"
   }
   
  
    const dispatch = useDispatch()
    return (
        <Post post ={post} isTwoHand = {isTwoHand} user={user} onAddCart={()=>{
          console.log("add ")
          dispatch(addCart(user,post,price))
        }}
        onRemoveCart={()=>{
          console.log("remove ")
          dispatch(removeCart(user,post,price))
        }}
        navigation={props.navigation}
        
        />
      );
}
PostScreen.navigationOptions = navData => {
  var isTw = navData.navigation.getParam("isTwoHand")
  return {
    headerRight: ()=>{ return (
      <IconCart navigation={navData.navigation}  />
    )}
    ,
    headerLeft: ()=>(
      <TouchableOpacity 
      onPress={() => navData.navigation.goBack(null)}
      >
      <Image source={require('../../assets/icons/back.png')} style={{height:18,width:14,marginLeft:10,tintColor:"#FFF"}}/>
      </TouchableOpacity>
   )
    

  
  
}
};
export default PostScreen;
