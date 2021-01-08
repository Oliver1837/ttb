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
const MyProfile = (props)=> {
  const userSelector = useSelector(state=> state.user)
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
              borderWidth:2,
              marginRight:20,
              borderColor:"black"
          }}
          source={{uri:userSelector.user.urlPhoto}}
          />
      </View>
     <View style={styles.containerDatauser}>
     <Text  style={{
         fontWeight:"bold",
         fontSize:18,
     }}>@{userSelector.user.username}</Text>
     <View style={{
                 flexDirection:"row",
                
          }}>
     <View style={{
        flexDirection:"row",
     }}>
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
          flexDirection:"row",
          width:150
          
        }}
        >
          <Text style={{
            color:"white",
            fontSize:15,
            textAlign:"center",
            fontWeight:"bold",
            textAlignVertical:"center"
            ,
            padding:5

          }}>Impostazioni </Text>
          <Ionicons name="ios-settings-outline" size={24} color="white" />
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
   

     </View>
          <View style={{
                 flexDirection:"row"
          }}>
               
              <View>
                <Text style={styles.textData}>Post</Text>
                <Text style={styles.textData}>0</Text>

              </View>
              
              <View>
                <Text style={styles.textData}>Following</Text>
                <Text style={styles.textData}>0</Text>

              </View>
              
              <View>
                <Text style={styles.textData}>Follower</Text>
                <Text style={styles.textData}>0</Text>

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
              
           </Tab>
           <Tab   heading="2HAND" tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey'}}
           activeTextStyle={{color:'black'}}>
            
           </Tab>
           <Tab   heading="SALVATI" tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey'}}
           activeTextStyle={{color:'black'}}>
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
      <TouchableOpacity style={{
        marginRight:5
      }} onPress={()=>{
        navData.navigation.navigate("Carrello")
      }}>
        <Ionicons name="cart" size={30} color="black" />      
</TouchableOpacity>
    )},headerTitleAlign:"center"
      
  };
};

export default MyProfile;
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