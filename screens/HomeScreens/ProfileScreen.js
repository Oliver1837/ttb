import { FontAwesome, Ionicons ,MaterialIcons} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Container, Header, Tab, Tabs } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GridEnzo from '../../components/GridEnzo';
import Button from '../../components/UI/Button';
import { GRIDS, POSTS, TAGS, TWOHAND, USERS } from '../../data/dummy-data';
import { toggleFollow } from '../../store/actions/User';
import { Rating, AirbnbRating } from 'react-native-ratings';
import InformazioneProfile from '../../components/Profile/information_profile'
import PostPreview from '../../components/PostPreview';
import ListPostPreview from '../../components/ListPostPreview';
import TwoHandPreview from '../../components/TwoHandPreview';
import ListTwoHandPreview from '../../components/ListTwoHandPreview';
import IconCart from '../../components/IconCart';
import {
  useFonts,
 Manrope_200ExtraLight,
 Manrope_300Light,
 Mandali_400Regular,
 Manrope_400Regular,
 Manrope_500Medium,
 Manrope_600SemiBold,
 Manrope_700Bold,
 Manrope_800ExtraBold

} from "@expo-google-fonts/dev";
const ProfileScreen = (props)=> {
  let [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
 Manrope_300Light,
 Mandali_400Regular,
 Manrope_400Regular,
 Manrope_500Medium,
 Manrope_600SemiBold,
 Manrope_700Bold
  });
   const userId= props.navigation.getParam("userId")

   const user = USERS.find(u => userId === u.idUser);
   const posts = POSTS.filter(p => p.userId === user.idUser );
   const grid = GRIDS.filter(g=> g.userId===user.idUser)
   const ths = TWOHAND.filter(th => th.idUser===user.idUser)
   const postsNormal = posts.filter(p=> p.isGrid===true)
   const userSelector = useSelector(state => state.user);
   const follow = userSelector.follow.findIndex(f=> f === userId);
   const isSearch = false;
 
   const dispatch = useDispatch();
   console.log(ths)
  return (
    <View style={styles.screen}>
        
        <View 
style={styles.container}
            

    >
      <View style={{
            backgroundColor:"white",
            
      }}>
          <Image
          style={{
              height:100,
              width:100,
              borderRadius:50,
              marginRight:20,

          }}
          source={{uri:user.urlPhoto}}
          />
      </View>
     <View style={styles.containerDatauser}>
   <View>  
     <Text  style={{
         height:21,
         width:139,
         fontSize:16,
         marginBottom:7.5,
         fontFamily:"Manrope_700Bold"
     }}>@{user.username}</Text>
     <View  style={{
     flexDirection:"row",
    
   }}>
    <Image source={require('../../assets/icons/star.png')} style={{height:12,width:73.04,tintColor:"black"}}/>
    <Text style={{width:26,height:19,fontSize:10,marginLeft:38.5}}>(18)</Text>
</View>
</View>
     <View style={{
                 flexDirection:"row",
                marginTop:7.5
                
          }}>
       <TouchableOpacity style={{
          justifyContent:"center",
          alignItems:'center',
          borderRadius:25,
          borderWidth:1,
          borderWidth:2,
          backgroundColor:follow>=0?"#fff":"#ff6969",
          height:45,
          marginRight:11.5,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.9,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          borderColor:follow>=0?"#ff6969":"#ff6969",
          width:100,
          flexDirection:"row"
        }}
        onPress={()=> dispatch(toggleFollow(userId))}
        >
           <Text style={{
            color:follow>=0?"#ff6969":"#fff",
            fontSize:15,
            textAlign:"center",
            fontWeight:"bold",
            textAlignVertical:"center"
            ,
            padding:5,
            fontFamily:"Manrope_700Bold"

          }}>Follow</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{
          justifyContent:"center",
          alignItems:'center',
          borderRadius:25,
          borderWidth:1,
    
          backgroundColor:"#ff6969",
          height:45,
       
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.9,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          borderColor:"#ff6969",
          width:100
        }}
        onPress={props.toggleTag}
        >
         <Image source={require('../../assets/icons/message.png')} style={{height:18,width:28.8,tintColor:"#fff"}}/>
        </TouchableOpacity>

     </View>
    <InformazioneProfile lenght={postsNormal.length} user ={user}/>
     </View>


     
     </View>

     <Container style={styles.tabs}>
      
      <Tabs tabBarUnderlineStyle={{backgroundColor:'#ff6969' , height:3,}} tabContainerStyle={{borderBottomColor:"#ff6969",borderBottomWidth:1}}
      
      
      >
      <Tab  heading="Grid" tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey',fontSize:16,fontFamily:"Manrope_400Regular"}}
           activeTextStyle={{color:'black',fontWeight:"bold",fontSize:16,fontFamily:"Manrope_700Bold"}}>
                <ListPostPreview posts={postsNormal} navigation={props.navigation} routeName='Post' key="1"/>
  
           </Tab>
           <Tab   heading="2Hand" tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey',fontSize:16,fontFamily:"Manrope_400Regular"}}
           activeTextStyle={{color:'black',fontWeight:"bold",fontSize:16,fontFamily:"Manrope_700Bold"}}>
             <ListTwoHandPreview routeName="Post" ths={ths} navigation={props.navigation}/>
           </Tab>
          
         </Tabs>
         </Container>

    </View>
     
  );
}
ProfileScreen.navigationOptions = navData => {
  return {
  

    headerRight: ()=>{ return (
      <IconCart navigation={navData.navigation} isBlack={true}/>
    )},
    headerTitle:()=>{
      return(<Image source={require('../../assets/logo.png')} style={{height:25,width:65}}/>)
    },
    headerLeft: ()=>(
      <TouchableOpacity 
      onPress={() => navData.navigation.goBack(null)}
      >
      <Image source={require('../../assets/icons/back.png')} style={{height:18,width:14,marginLeft:5}}/>
      </TouchableOpacity>
   )
    
      
  };
};
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    
    alignItems: 'center',
    backgroundColor:"white",
    marginBottom:25.9,
    marginLeft:11.4
    
   }, containerDatauser: {
    backgroundColor:"white",
    display:'flex',
    flexDirection:"column",
    marginRight:25,
    paddingTop:15
    
  },
  
  screen:{
    flex:1,
   backgroundColor:'white',
    
},

imageThumbnail: {
    margin:0.2,
    width:(Dimensions.get('window').width/3   - 1)
    ,height:(Dimensions.get('window').height/4 ),
  },
  imagePosts: {
    margin:0.2,
    width:(Dimensions.get('window').width/3   - 1)
    ,height:(Dimensions.get('window').width/3   - 1),
  },
});