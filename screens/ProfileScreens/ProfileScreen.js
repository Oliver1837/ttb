import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Container, Header, Tab, Tabs } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GridEnzo from '../../components/GridEnzo';
import Button from '../../components/UI/Button';
import { GRIDS, POSTS, TWOHAND, USERS } from '../../data/dummy-data';
import { toggleFollow } from '../../store/actions/User';
const ProfileScreen = (props)=> {
   const userId= props.navigation.getParam("userId")

   const user = USERS.find(u => userId === u.idUser);
   const posts = POSTS.filter(p => p.userId === user.idUser && p.isGrid===true);
   const ths = TWOHAND.filter(th => th.idUser===user.idUser)
   const userSelector = useSelector(state => state.user);
   const follow = userSelector.follow.findIndex(f=> f === userId);
   let isFollow = follow >= 0 ? true : false
   const [f,setF] = useState(follow >= 0 ? true : false);
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
              borderWidth:2,
              marginRight:20,
              borderColor:"black"
          }}
          source={{uri:user.urlPhoto}}
          />
      </View>
     <View style={styles.containerDatauser}>
     <Text  style={{
         fontWeight:"bold",
         fontSize:18,
     }}>@{user.username}</Text>
     <View style={{
                 flexDirection:"row",
                
          }}>
     <Button follow = {f} title="Follow" onFollow={()=>{
       console.log("Follow")
        dispatch(toggleFollow(user.idUser))
        setF(!f)
      }}/>
      <Button  follow={true} title="Contatta"/>

     </View>
          <View style={{
                 flexDirection:"row"
          }}>
               
              <View>
                <Text style={styles.textData}>Post</Text>
                <Text style={styles.textData}>{posts.length}</Text>

              </View>
              
              <View>
                <Text style={styles.textData}>Following</Text>
                <Text style={styles.textData}>{user.nFollowing}</Text>

              </View>
              
              <View>
                <Text style={styles.textData}>Follower</Text>
                <Text style={styles.textData}>{user.nFollower}</Text>

              </View>
          </View>
     </View>


     
     </View>

     <Container style={styles.tabs}>
      
      <Tabs tabBarUnderlineStyle={{backgroundColor:'black' , height:1}}>
      <Tab  heading="GRID" tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey'}}
           activeTextStyle={{color:'black'}}>
                 <FlatList
             data={grid }
            numColumns={1}
            keyExtractor={(item, index) => item.idGrid}
            renderItem={({item})=>{
              return (
              <GridEnzo grid ={item} navigation={  props.navigation}/>
                )
            }}
            />
  
           </Tab>
           <Tab   heading="2HAND" tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey'}}
           activeTextStyle={{color:'black'}}>
                    <FlatList
             data={ths }
             numColumns={3}

            keyExtractor={(item, index) => item.idTwoHand}
            renderItem={({item})=>{
                const post = POSTS.find(p => p.idPost===item.idPost)
               const url =  post.urlPost
              return (
<View
              style={{
               margin:0.4,
               
                }}>
              <TouchableOpacity 
               onPress={()=>{
                
                props.navigation.navigate({
                    routeName: 'Post',
                
                    params: {
                        post : post,
                        isTwoHand : true
        
                      }});
             

         }}>
              <ImageBackground
               style={styles.imageThumbnail}
               source={{uri:url} }
               resizeMode='cover'
            >
              <View style={
                {
                  height:"100%",
                  width:"100%",
                  flexDirection:"row-reverse",
                  marginTop:150,
                  marginLeft:15
                }
              }>
              <FontAwesome name="dollar" size={24} color="white"  ></FontAwesome>
              </View>
              
      

            </ImageBackground>
            
              </TouchableOpacity>
         </View>
                )
            }}
            />
           </Tab>
          
         </Tabs>
         </Container>

    </View>
     
  );
}

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
   
    backgroundColor:"white",

    
   }, containerDatauser: {
    backgroundColor:"white",
    display:'flex',
    flexDirection:"column",
    marginRight:25,
    paddingTop:15
    
  },
  textData:{
      fontWeight:"bold",
      fontSize:16,
      margin:4,
      textAlign:"center"

  },
  screen:{
   backgroundColor:'white',


},

imageThumbnail: {
    margin:0.2,
    width:(Dimensions.get('window').width/3   - 1)
    ,height:(Dimensions.get('window').height/4 ),
  },
});