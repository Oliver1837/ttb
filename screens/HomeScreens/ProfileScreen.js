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
const ProfileScreen = (props)=> {
   const userId= props.navigation.getParam("userId")

   const user = USERS.find(u => userId === u.idUser);
   const posts = POSTS.filter(p => p.userId === user.idUser);
   const grid = GRIDS.filter(g=> g.userId===user.idUser)
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
   <View>  
     <Text  style={{
         fontWeight:"bold",
         fontSize:18,
     }}>@{user.username}</Text>
     <View  style={{
     flexDirection:"row",
    
   }}>
     <Rating
  type='star'
  ratingCount={5}
  imageSize={20}
  onFinishRating={()=>{return 5}}
  startingValue={4}
  selectedColor="black"
  
  style={{
    marginRight:95,
   
  }}
/><Text style={{
  fontWeight:"bold"
}}>(18)</Text>
</View>
</View>
     <View style={{
                 flexDirection:"row",
                 margin:5
                
          }}>
       <TouchableOpacity style={{
          justifyContent:"center",
          alignItems:'center',
          borderRadius:10,
          borderWidth:1,
          borderWidth:2,
          backgroundColor:props.follow?"black":"#0095f6",
          height:40,
          margin:1,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.9,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          borderColor:props.follow?"black":"#0095f6",
          width:100,
          flexDirection:"row"
        }}
        onPress={props.toggleTag}
        >
           <Text style={{
            color:"white",
            fontSize:15,
            textAlign:"center",
            fontWeight:"bold",
            textAlignVertical:"center"
            ,
            padding:5

          }}>FOLLOW</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{
          justifyContent:"center",
          alignItems:'center',
          borderRadius:10,
          borderWidth:1,
          borderWidth:2,
          backgroundColor:"black",
          height:40,
          margin:1,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.9,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          borderColor:"black",
          width:100
        }}
        onPress={props.toggleTag}
        >
          <MaterialIcons name="email" size={24} color="white" />
        </TouchableOpacity>

     </View>
          <View style={{
                 flexDirection:"row"
          }}>
               
              <View>
                <Text style={styles.textData}>Tips</Text>
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
               const prezzo = TWOHAND.find(tw=>tw.idPost===post.idPost).prezzo
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
                }
              }>
                
              <FontAwesome name="dollar" size={20} color="white"  style={{
                marginRight:10,
                marginTop:4
              }}></FontAwesome>
              <Text style={
                {
                  fontSize:20,
                  fontWeight:"bold",
                  color:"#fff",

                }
              }>{prezzo}</Text>
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
ProfileScreen.navigationOptions = navData => {
  return {
  

    headerRight: ()=>{ return (
      <TouchableOpacity style={{
        marginRight:5
      }} onPress={()=>{
      }}>
         <Ionicons name="cart" size={30} color="black" />      
</TouchableOpacity>
    )}
      
  };
};
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    flex:1,
   backgroundColor:'white',
    alignItems:'center'

},

imageThumbnail: {
    margin:0.2,
    width:(Dimensions.get('window').width/3   - 1)
    ,height:(Dimensions.get('window').height/4 ),
  },
});