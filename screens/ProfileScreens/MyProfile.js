import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Container, Header, Tab, Tabs } from 'native-base';
import React, { useEffect } from 'react';
import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import GridEnzo from '../../components/GridEnzo';
import Button from '../../components/UI/Button';
import { Ionicons } from '@expo/vector-icons';
import { GRIDS, POSTS, TWOHAND, USERS } from '../../data/dummy-data';
import HeaderCart from '../../components/HeaderCart';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListPostPreview from '../../components/ListPostPreview';
import ListTwoHandPreview from '../../components/ListTwoHandPreview';
import InformazioneProfile from '../../components/Profile/information_profile'
import {primary,secodary} from '../../config/color'
import IconCart from '../../components/IconCart';
const MyProfile = (props)=> {
  const userSelector = useSelector(state=> state.user)
  const postSelector = useSelector(state => state.post)
  const user = userSelector.user;
  const posts = postSelector.posts.filter(p => p.userId === user.idUser );
  const thsSelector = useSelector(state=> state.post.ths);
  const ths = thsSelector.filter(p => p.idUser === user.idUser )
  const postsNormal = posts.filter(p=> p.isGrid===true)
  console.log(ths)
  const preferred = userSelector.preferred
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
    <Image source={require('../../assets/icons/star.png')} style={{height:12,width:73.04,tintColor:"black",marginLeft:4}}/>
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
          backgroundColor:primary,
          height:45,
          marginRight:11.5,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.9,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          borderColor:primary,
          width:100,
          flexDirection:"row"
        }}
        onPress={()=> {}}
        >
           <Text style={{
            color:"#fff",
            fontSize:15,
            textAlign:"center",
            fontWeight:"bold",
            textAlignVertical:"center"
            ,
            padding:5,
            fontFamily:"Manrope_700Bold"

          }}>Settings</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{
          justifyContent:"center",
          alignItems:'center',
          borderRadius:25,
          borderWidth:2,
    
          backgroundColor:"#FFF",
          height:45,
       
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.9,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          borderColor:primary,
          width:100
        }}
        onPress={props.toggleTag}
        >
         <Image source={require('../../assets/icons/message.png')} style={{height:18,width:28.8,tintColor:primary}}/>
        </TouchableOpacity>

     </View>
    <InformazioneProfile lenght={postsNormal.length} user ={user}/>
     </View>


     
     </View>

     <Container style={styles.tabs}>
      
     <Tabs tabBarUnderlineStyle={{backgroundColor:primary , height:3,}} tabContainerStyle={{borderBottomColor:primary,borderBottomWidth:1}}
      
      
      >
      <Tab  heading="Grid" tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey',fontSize:16,fontFamily:"Manrope_400Regular"}}
           activeTextStyle={{color:'black',fontWeight:"bold",fontSize:16,fontFamily:"Manrope_700Bold"}}>
                <ListPostPreview posts={postsNormal} navigation={props.navigation} routeName='PostMyProfile' key="1"/>
  
           </Tab>
           <Tab   heading="2Hand" tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey',fontSize:16,fontFamily:"Manrope_400Regular"}}
           activeTextStyle={{color:'black',fontWeight:"bold",fontSize:16,fontFamily:"Manrope_700Bold"}}>
             <ListTwoHandPreview routeName="PostMyProfile" ths={ths} navigation={props.navigation}/>
           </Tab>
          
           <Tab   heading="Saved" tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey',fontSize:16,fontFamily:"Manrope_400Regular"}}
           activeTextStyle={{color:'black',fontWeight:"bold",fontSize:16,fontFamily:"Manrope_700Bold"}}>
              <FlatList
             data={preferred }
             numColumns={3}

            keyExtractor={(item, index) => item.idTwoHand}
            renderItem={({item})=>{
                const post = POSTS.find(p => p.idPost===item.idPost)
               const url =  post.urlPost
               let prezzo = 0;
               if(post.isTwoHand){
                var tw = TWOHAND.find(tw=>tw.idPost===post.idPost)
                if(tw !== "undefined"){ 
                  prezzo = tw.prezzo
                }
               }
               //                    routeName: 'Salvati',
               console.log(post.isTwoHand)
              return (
<View
              style={{
               margin:0.4,
               
                }}>
              <TouchableOpacity 
               onPress={()=>{
                
                props.navigation.navigate({
                    routeName: 'Salvati',
                
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
           {post.isTwoHand===true ? 
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
              : null }
      

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

MyProfile.navigationOptions = navData => {
  return {
    headerTitle: 'TipToBe',

    headerRight: ()=>{ return (
      <IconCart navigation={navData.navigation} isBlack={true}/>
    )},
    headerTitle:()=>{
      return(<Image source={require('../../assets/logo.png')} style={{height:25,width:65}}/>)
    },
  };
};

export default MyProfile;
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
    width:150
    ,height:150,
  },
  imagePosts: {
    margin:0.2,
    width:150
    ,height:150,
  },
});