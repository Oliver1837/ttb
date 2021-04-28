import React from 'react'
import {View , Text, StyleSheet, Button ,TouchableOpacity,Dimensions,FlatList,ImageBackground,Image} from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures';
import { useDispatch, useSelector } from 'react-redux';
import IconCart from '../../components/IconCart';
import Post from '../../components/Post';
import { TWOHAND, USERS } from '../../data/dummy-data';
import { addCart, removeCart } from '../../store/actions/Cart';

const {width, height} = Dimensions.get('window');

const PostProfileScreen = (props)=>{
    const post = props.navigation.getParam("post")
    const isTwoHand = props.navigation.getParam("isTwoHand")
    const user = USERS.find(u=> u.idUser===post.userId);
    let postUseSelector = useSelector(state=> state.post)

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 100
    };
    const dispatch = useDispatch()
    var price = 0;
    if(isTwoHand===true){

      var tw = postUseSelector.ths.find(tw=> tw.idPost===post.idPost);
      price = tw.prezzo
   }

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
        }}  />
      </GestureRecognizer>
      );
}
PostProfileScreen.navigationOptions = navData => {
  var isTw = navData.navigation.getParam("isTwoHand")
  if(isTw){
  return {
    
    headerRight: ()=>{ return (
      <IconCart navigation={navData.navigation} isBlack={false}/>
    )},
    headerTitle:()=>{
      return(<Image source={require('../../assets/logofeed.png')} style={{height:25,width:65}}/>)
    },
    headerLeft: ()=>(
      <TouchableOpacity 
      onPress={() => navData.navigation.goBack(null)}
      >
      <Image source={require('../../assets/icons/back.png')} style={{height:18,width:14,marginLeft:5}}/>
      </TouchableOpacity>
   )
    
      
  };
}
};
export default PostProfileScreen;
