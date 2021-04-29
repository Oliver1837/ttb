import React, { Component } from 'react';
import { View ,Text, Image,StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Header, Tab, Tabs } from 'native-base';
import Button from '../../components/UI/Button';
import { Ionicons } from '@expo/vector-icons';
import ListPostPreview from '../../components/ListPostPreview';
import { POSTS, TWOHAND } from '../../data/dummy-data';
import ListTwoHandPreview from '../../components/ListTwoHandPreview';
import IconCart from '../../components/IconCart';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTagFollow } from '../../store/actions/User';
const TipScreen = props =>{
    const tag = props.navigation.getParam("tag");
    const post = props.navigation.getParam("posts")
    const postSelector = useSelector(state=> state.post)
    const ths = postSelector.ths.filter(t =>  postSelector.posts.filter( p=> p.idPost === t.idPost && (p.nameTag.includes(tag.nameTag) === true) ).length>0)
    const preferredTag = useSelector(state => state.user.preferredTag)

    var  isPreferred = preferredTag.findIndex(t=> t== tag.nameTag);
    const dispatch= useDispatch()
    return (
      <View style={{ 
        flex: 1,
        backgroundColor: 'white',
     
      }}>
          <View   style={{
                height:150,
                width:"100%",
                flexDirection:"row",
                marginLeft:11.7,
                alignItems:"center",
               
            }}>
          
          <Image
          style={{
              height:100,
              width:100,
              borderRadius:50,
              padding:15
          }}
        source={{uri:tag.urlTag}}
          /> 
          <View style={{
           
             
          }}>
          <View style={{
        marginLeft:14.7
              
          }}>                                 
            <Text  style={styles.textNameTip}>#{tag.nameTag}</Text>
            <TouchableOpacity style={{
          justifyContent:"center",
          alignItems:'center',
          borderRadius:25,
          borderWidth:1,
          borderWidth:2,
          backgroundColor:isPreferred <0 ?"#ff6969":"#fff",
          height:45,
          margin:1,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.9,
          elevation: 20,
          shadowRadius: 100 ,
          shadowOffset : { width: 1, height: 13},
          borderColor:isPreferred <  0 ?"#ff6969":"#ff6969",
          width:100
        }}
        onPress={()=>{
        dispatch(toggleTagFollow(tag.nameTag))
        }}
        >
          <Text style={{
            color:"white",
            fontSize:16,
            textAlign:"center",
           fontFamily:"Manrope_700Bold",
           color:isPreferred <  0 ?"#fff":"#ff6969",

          }}>{isPreferred <  0 ?"Follow":"Following"}</Text>
        </TouchableOpacity>  
                             
        </View>
        <Text style={{
          fontSize:14,
          marginLeft:14.7,
          fontFamily:"Manrope_500Medium"
        }}>Numero di post</Text>
         <Text style={{
          fontSize:14,
          marginLeft:14.7,
          fontFamily:"Manrope_500Medium"
        }}>{post.length}</Text>
        </View>
 
       
         
          </View>
          <Container style={styles.tabs}>
      
          <Tabs tabBarUnderlineStyle={{backgroundColor:'#FF4343' , height:3,}} tabContainerStyle={{borderBottomColor:"#ff9c9c",borderBottomWidth:1}}
      
      
      >
      <Tab  heading="Popolari"  tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey',fontSize:16,fontFamily:"Manrope_400Regular"}}
           activeTextStyle={{color:'black',fontWeight:"bold",fontSize:16,fontFamily:"Manrope_700Bold"}}>
             <ListPostPreview posts={post} navigation={props.navigation} routeName='PostProfile' key="1"/>
           </Tab>
           <Tab   heading="Recenti"tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey',fontSize:16,fontFamily:"Manrope_400Regular"}}
           activeTextStyle={{color:'black',fontWeight:"bold",fontSize:16,fontFamily:"Manrope_700Bold"}}>
              <ListPostPreview posts={post} navigation={props.navigation} routeName='PostProfile' key="1"/>
           </Tab>
           <Tab   heading="2Hand"tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey',fontSize:16,fontFamily:"Manrope_400Regular"}}
           activeTextStyle={{color:'black',fontWeight:"bold",fontSize:16,fontFamily:"Manrope_700Bold"}}>
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
        fontSize:16,
        margin:4,
       fontFamily:"Manrope_700Bold"
  
    },

  });