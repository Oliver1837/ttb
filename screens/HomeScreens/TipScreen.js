import React, { Component } from 'react';
import { View ,Text, Image,StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Header, Tab, Tabs } from 'native-base';
import Button from '../../components/UI/Button';
import { Ionicons } from '@expo/vector-icons';
import ListPostPreview from '../../components/ListPostPreview';
import { POSTS, TWOHAND } from '../../data/dummy-data';
import ListTwoHandPreview from '../../components/ListTwoHandPreview';
import { useSelector } from 'react-redux';
import IconCart from '../../components/IconCart';

const TipScreen = (props) =>{
    const tagName = props.navigation.getParam("tag");
    const tags = useSelector(state => state.post.tags)
    const tag = tags.find(t=> t.nameTag === tagName)
    let posts = useSelector(state => state.post.posts)
    posts = posts.filter( p=> p.nameTag.includes(tag.nameTag) === true) 
    const ths = TWOHAND.filter(t =>  posts.filter( p=> p.idPost === t.idPost && (p.nameTag.includes(tag.nameTag) === true) ).length>0)

    return (
      <View style={{ 
        flex: 1,
        backgroundColor: 'white',
     
      }}>
          <View   style={{
                height:150,
                width:"100%",
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center"
            }}>
          
          <Image
          style={{
              height:80,
              width:80,
              borderRadius:40,
              borderColor:"black",
              borderWidth:2,
              padding:15
          }}
        source={{uri:tag.urlTag}}
          /> 
          <View style={{
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center"
          }}>
          <View style={{
              flexDirection:"row",
              justifyContent:"center",
              alignItems:"center"
          }}>                                 
            <Text  style={styles.textNameTip}>#{tag.nameTag}</Text>
            <TouchableOpacity style={{
          justifyContent:"center",
          alignItems:'center',
          borderRadius:10,
          borderWidth:1,
          borderWidth:2,
          backgroundColor:"#0095f6",
          height:40,
          margin:1,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.9,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          borderColor:"#0095f6"
        }}
        onPress={()=>{
        //    dispatch(toggleTagFollow(props.title))
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

          }}>FOLLOW</Text>
        </TouchableOpacity>  
                             
        </View>
        <Text style={{
          fontSize:18
        }}>Numero di post {posts.length}</Text>
        </View>
 
       
         
          </View>
          <Container style={styles.tabs}>
      
      <Tabs tabBarUnderlineStyle={{backgroundColor:'black' , height:1}}>
      <Tab  heading="POPOLARI" tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey'}}
           activeTextStyle={{color:'black'}}>
             <ListPostPreview posts={posts} navigation={props.navigation} routeName='PostProfile' key="1"/>
           </Tab>
           <Tab   heading="RECENTI" tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey'}}
           activeTextStyle={{color:'black'}}>
              <ListPostPreview posts={posts} navigation={props.navigation} routeName='PostProfile' key="1"/>
           </Tab>
           <Tab   heading="2HAND" tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey'}}
           activeTextStyle={{color:'black'}}>
              <ListTwoHandPreview routeName="PostProfile" ths={ths} navigation={props.navigation} />

           </Tab>
         </Tabs>
         </Container>



              </View>
    );
  
}
TipScreen.navigationOptions = navData => {
  return {
  

    headerRight: (navData)=>{ return (
      <IconCart navigation={navData.navigation}/>
    )}
      
  };
};
export default TipScreen;
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor:"white",
  
      
     },
    textData:{
        fontWeight:"bold",
        fontSize:16,
        margin:4,
        textAlign:"center"
  
    },
    textNameTip:{
        fontWeight:"bold",
        fontSize:18,
        margin:4,
        textAlign:"center"
  
    },

  });