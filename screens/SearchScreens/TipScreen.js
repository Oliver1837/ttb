import React, { Component } from 'react';
import { View ,Text, Image,StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Header, Tab, Tabs } from 'native-base';
import Button from '../../components/UI/Button';
import { Ionicons } from '@expo/vector-icons';
import ListPostPreview from '../../components/ListPostPreview';
import { POSTS, TWOHAND } from '../../data/dummy-data';
import ListTwoHandPreview from '../../components/ListTwoHandPreview';
import IconCart from '../../components/IconCart';
import { useSelector } from 'react-redux';

const TipScreen = props =>{
    const tag = props.navigation.getParam("tag");
    const post = props.navigation.getParam("posts")
    const postSelector = useSelector(state=> state.post)
    const ths = postSelector.ths.filter(t =>  postSelector.posts.filter( p=> p.idPost === t.idPost && (p.nameTag.includes(tag.nameTag) === true) ).length>0)

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
          borderRadius:25,
          borderWidth:1,
          borderWidth:2,
          backgroundColor:"#ff9c9c",
          height:50,
          margin:1,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.9,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          borderColor:"#ff9c9c",
          width:100
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
        }}>Numero di post {post.length}</Text>
        </View>
 
       
         
          </View>
          <Container style={styles.tabs}>
      
          <Tabs tabBarUnderlineStyle={{backgroundColor:'#FF4343' , height:3,}} tabContainerStyle={{borderBottomColor:"#ff9c9c",borderBottomWidth:1}}
      
      
      >
      <Tab  heading="POPOLARI"  tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey'}}
           activeTextStyle={{color:'black',fontWeight:"bold"}}>
             <ListPostPreview posts={post} navigation={props.navigation} routeName='PostProfile' key="1"/>
           </Tab>
           <Tab   heading="RECENTI"tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey'}}
           activeTextStyle={{color:'black',fontWeight:"bold"}}>
              <ListPostPreview posts={post} navigation={props.navigation} routeName='PostProfile' key="1"/>
           </Tab>
           <Tab   heading="2HAND"tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey'}}
           activeTextStyle={{color:'black',fontWeight:"bold"}}>
              <ListTwoHandPreview routeName="PostProfile" ths={ths} navigation={props.navigation} />

           </Tab>
         </Tabs>
         </Container>



              </View>
    );
  
}
TipScreen.navigationOptions = navData => {
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