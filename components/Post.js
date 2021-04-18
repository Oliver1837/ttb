import React from 'react'
import {View , Text, StyleSheet, Button ,TouchableOpacity,Dimensions,FlatList,ImageBackground,Image,Alert} from 'react-native'
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import { POSTS, TAGS,TWOHAND,USERS } from '../data/dummy-data';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike, togglePreferred } from '../store/actions/User';
import { useState } from 'react';
const {width, height} = Dimensions.get('window');

const Post = ({post,isTwoHand,onAddCart,onRemoveCart,navigation,me})=>{
 //  const [isAdd,setIsAdd] = useState(false)
    var Tags = TAGS
   // Tags= Tags.filter(tag=> post.nameTag.filter(t => t=== tag.nameTag).length>0)
    const user = USERS.find(u =>  post.userId === u.idUser);
    
    let price ;
    const userSelector = useSelector(state=> state.user)
    const cartSelector = useSelector(state=> state.cart)
   var isCart = 0;
   var idCartPost = 0
   let isAdd=false
    if(cartSelector.cart.length>0){
      const cart = cartSelector.cart.find(c=> c.idUser === userSelector.user.userId)
     // idCartPost = cart.post.find(p => p.postId === ).idPost
      const ps = cart.post
      console.log(ps[0].idPost)

     
    for(var i= 0; i< ps.length ;i++){
      console.log(ps[i].idPost)
       if(ps[i].idPost === post.idPost) {
       isAdd= (true)
        console.log("ENTRO")
      } }
     
    }
    console.log("Post ID:",post.idPost)
    const like = userSelector.likes
    const preferred = userSelector.preferred
    const index = like.findIndex(l => l=== post.idPost)
    const indexPreferedd = preferred.findIndex(p => p=== post)
    const dispatch = useDispatch()
    if(isTwoHand){

       price = TWOHAND.find(tw=> tw.idPost===post.idPost).prezzo;

    }
    return (
        <View>
          <ImageBackground source={{uri:post.urlPost}} repeat style={styles.video} resizeMode={"contain"} resizeMethod="scale"/>
          <View style={styles.mainContainer}>
            <View style={styles.innerLeft}>
              <View style={styles.dataContainer}>
                <TouchableOpacity onPress={()=>{
                  navigation.navigate({
                    routeName: 'Profile',
                
                    params: {
                        userId: user.idUser,
        
                      }});
                }}>
                <Text style={styles.title}>@{user.username}</Text>
                </TouchableOpacity>
                <Text style={styles.description} numberOfLines={4}>
                 {post.descrizione}
                </Text>
                <View style={{
                  flexDirection:"row"
                }}>
                <View style={{
                  color:"#fff",
                  fontSize:16,
                  marginTop:10,
                  flexDirection:"row"
                }}><Text style={{
                  color:"#fff",
                  fontSize:16,
                  marginTop:10
                }}>TipTo</Text> 
                {post.nameTag.map( nt=> {return ( <TouchableOpacity onPress={
                  ()=>{
                    navigation.navigate({
                      routeName: 'Tip',
                  
                      params: {
                          tag: nt, 
                        }});
                  }
                }><Text style={{
                  color:"#fff",
                  fontSize:16,
                  marginTop:10
                }}
                >#{nt}</Text></TouchableOpacity>
                )})}
                </View>
                
                  </View>
                      <View style={styles.music}>
                
                 
                </View>
              </View>
            </View>
  
            <View style={styles.innerRight}>
           <TouchableOpacity onPress={
        ()=>{
          console.log(post.idPost)
          dispatch(toggleLike(post.idPost))
        }
           }>
            <Image source={require('../assets/icons/heart.png')} style={{height:26,width:30,tintColor:index>=0 ?"#FF4343":"#FFF",}} />
           </TouchableOpacity>
            <Text style={{color: '#fff', marginBottom: 25}}>1234</Text>
            <TouchableOpacity onPress={
            ()=> {
              console.log(post.idPost)
              navigation.navigate({routeName:"Comment",params:{
              
                postId: post.idPost
  
              }
            })
            }}>
              
              <Image source={require('../assets/icons/comment.png')} style={{height:30,width:30,tintColor:"#FFF",}} />

          </TouchableOpacity>
            <Text style={{color: '#fff', marginBottom: 25}}>1234</Text>
            <TouchableOpacity onPress={
        ()=>{
          console.log(post.idPost)
          dispatch(togglePreferred(post))
        }
           }>
                <Image source={require('../assets/icons/save.png')} style={{height:30,width:20,tintColor:indexPreferedd >=0 ?"#FF4343":"#FFF",}} />

            </TouchableOpacity>
            <Text style={{color: '#fff', marginBottom: 25}}>1234</Text>
            <Image source={require('../assets/icons/share.png')} style={{height:30,width:31,tintColor:"#FFF",}} />
            <Text style={{color: '#fff', marginBottom: 25}}>1234</Text>
            {me === true ?<MaterialCommunityIcons name="settings-helper" size={24} color="white" /> :null}
            {isTwoHand ? 
            <View>
             <Text style={{
               fontSize:18,
               fontWeight:"bold",
               color:"#FFF"
             }}> {price}$</Text> 
            <TouchableOpacity style={{
              justifyContent:"center",
              alignItems:'center',
              borderRadius:10,
              borderWidth:1,
              borderWidth:2,
              backgroundColor:isAdd?"red": "black",
              height:40,
              margin:1,
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOpacity: 0.9,
              elevation: 20,
              shadowRadius: 100 ,
              shadowOffset : { width: 1, height: 13},
              borderColor:isAdd?"red": "white"
            }}
            onPress={
              ()=>{
               if(isAdd===true){
                Alert.alert( "Rimuovi dal carrello","Sei sicuro di rimuovere l'articolo dal Carrello?",
                [
                  {
                    text: "NO",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "SI", onPress: () =>  onRemoveCart() }
                ],
                { cancelable: false }
              )

               }else{ Alert.alert( "Aggiungi al carrello","Sei sicuro di aggiungere l'articolo dal Carrello?",
                  [
                    {
                      text: "NO",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    { text: "SI", onPress: () => onAddCart() }
                  ],
                  { cancelable: false }
                );}
              }
              
              
              }
            >
              <Text style={{
                color:"white",
                fontSize:15,
                textAlign:"center",
                fontWeight:"bold",
                textAlignVertical:"center"
                ,
                padding:5
    
              }}>{isAdd?"RIMUOVI": "COMPRA"}</Text>
            </TouchableOpacity>
            </View>
            
            : null }
            </View>
          </View>
        </View>
      );
}
export default Post;

const styles = StyleSheet.create({
    video: {
      height: height,
      width: width,
      backgroundColor: '#000',
    },
    header: {
      width: width,
      height: 50,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      flexDirection: 'row',
    },
    text: {
      color: '#fff',
      fontSize: 17,
      marginRight: 15,
    },
    mainContainer: {
      height: '55%',
      flexDirection: 'row',
      width: width,
      position: 'absolute',
      bottom: 0,
    },
    innerLeft: {
      width: '80%',
      height: '100%',
    },
    innerRight: {
      width: '20%',
      height: '100%',
      alignItems: 'center',
    },
    profile: {
      height: 50,
      width: 50,
      alignItems: 'center',
      marginBottom: 25,
    },
    btn: {
      backgroundColor: '#ff5b77',
      width: 20,
      height: 20,
      borderRadius: 10,
      elevation: 5,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: -10,
    },
    dataContainer: {
      height: '45%',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      padding: 5,
    },
    title: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize:18,
    },
    description: {
      color: '#e5e5e5',
    },
    music: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });