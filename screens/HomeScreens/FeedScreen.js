import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import {View , Text, StyleSheet, TouchableOpacity,Dimensions,FlatList,Image} from 'react-native'
import { enableScreens } from 'react-native-screens';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import IconCart from '../../components/IconCart';
import Post from '../../components/Post';
import Button from '../../components/UI/Button'
enableScreens();
const {width, height} = Dimensions.get('window');

import  {POSTS} from '../../data/dummy-data'

const FeedScreen = props =>{

    const user = useSelector(state => state.user)

    let posts = POSTS;
    posts = posts.filter(p=> p.nameTag.filter(tag => user.preferredTag.filter(t=> t ===tag).length>0).length>0)
    console.log("FEED")
    posts = posts.filter(p=> p.isTwoHand===false);
    console.log(posts)


    return (
        <View  style={{ 
          flex: 1,
          backgroundColor: 'white',
          
        }}>
          
          
      <FlatList
        initialNumToRender={3}
        data={posts}
        ListEmptyComponent={()=>{

          return (
            <View style={{ 
              flex: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              height:height
            }}
            >
              <Text style={{
                fontWeight:'bold',
                fontSize:30
              }}>Benvenuto in TipTobe </Text>
              
            </View>
          );
        }}
        keyExtractor={(item, index) => item.idPost}
        renderItem={({item}) =>  {
            
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
                    userId: item.userId,
    
                  }});
                
        }}
        config={config}
        style={ {
            height:height,
            width:width
        }}
        ><Post post={item} isTwoHand = {false} navigation={
         
            props.navigation
          
        }/> 
        </GestureRecognizer>)} }
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        style={ {
          height:height,
          width:width
      }}
      />
    </View>


    );


}
FeedScreen.navigationOptions = navData => {
  console.log(navData)
  return {
  
    headerRight: ()=>{ return (
      <IconCart navigation={navData.navigation} />
    )}
      ,
      headerTitle:()=>{
        return(<Image source={require('../../assets/logofeed.png')} style={{height:25,width:65}}/>)
      }
      
  };
};
export default FeedScreen;

