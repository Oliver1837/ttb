import React from 'react'
import {View , Text, StyleSheet, Button ,TouchableOpacity,Dimensions,FlatList,ImageBackground,Image,Alert,TextInput, Modal, Pressable} from 'react-native'
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import { POSTS, TAGS,TWOHAND,USERS,COMMENT, USEREXAMPLE } from '../data/dummy-data';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike, togglePreferred } from '../store/actions/User';
import { useState } from 'react';
const {width, height} = Dimensions.get('window');
import * as actionComment from '../store/actions/Comment'
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import TimeUtils from '../Utils/TimeUtils';
import { deletePost } from '../store/actions/UploadPost';
import * as FileSystem from 'expo-file-system';
import shorthash  from 'short-hash'
const Post = ({post,isTwoHand,onAddCart,onRemoveCart,navigation,me,replace})=>{
    const user = USERS.find(u =>  post.userId === u.idUser);
    const posts = useSelector(state=>state.post.posts)
    
    if(navigation.getParam("isTwoHand")!='undefined'){
      isTwoHand==navigation.getParam("isTwoHand")
      
    }
    const [url,setUrl] =useState(post.urlPost)

    useEffect(()=>{
      
     const preload = async () => {
       console.log("Provc")
        const uri =url;
        const name = shorthash.unique(uri);
        const path = `${FileSystem.cacheDirectory}${name}`;
        const image = await FileSystem.getInfoAsync(path);
        if (image.exists) {
          console.log('read image from cache');
           setUrl(image.uri)
          return;
        }
    
        console.log('downloading image to cache');
        const newImage = await FileSystem.downloadAsync(uri, path);
      
        
        setUrl(newImage.uri)
       
      };
      preload()

    },[])

    let price ;
    const userSelector = useSelector(state=> state.user)
    const cartSelector = useSelector(state=> state.cart)
   let isAdd=false
   let postUseSelector = useSelector(state=> state.post)
    if(cartSelector.cart.length>0){
      const cartIndex = cartSelector.cart.findIndex(c=> c.user.idUser === user.idUser)
    
     if(cartIndex>=0){
    
      const ps = cartSelector.cart[cartIndex].post
     
    for(var i= 0; i< ps.length ;i++){
       if(ps[i].idPost === post.idPost) {
       isAdd= (true)
      } }
  }   // idCartPost = cart.post.find(p => p.postId === ).idPost
    /*  const ps = cart.post
     
    for(var i= 0; i< ps.length ;i++){
      console.log(ps[i].idPost)
       if(ps[i].idPost === post.idPost) {
       isAdd= (true)
      } }
     */
    }
    const [modalVisible,setModalVisible]= useState(false)
    const [modalVisiblePunti,setModalVisiblePunti]= useState(false)

 
    const like = userSelector.likes
    const preferred = userSelector.preferred
    const index = like.findIndex(l => l=== post.idPost)
    const indexPreferedd = preferred.findIndex(p => p=== post)
    const dispatch = useDispatch()
    const meComment = USEREXAMPLE
    

    const postId=post.idPost
  
   const comments = useSelector(state => state.comment.comment.filter(comment=>comment.idPost===postId ));
   const [enterdComment,setEnteredComment] =useState("");
    const commentInputHandler=enteredText=>{
        setEnteredComment(enteredText);
    }
      const  addCommentHandler=(postId,meComment,enterdComment)=>{
        if(enterdComment!=null){
           
            dispatch(actionComment.addComment(postId ,enterdComment,meComment.idUser));
         /*   setComment((currentComment) => [...currentComment,
                {id: Math.random().toString(), value:enterdComment}]);*/
            setEnteredComment(null);
        }
    }
    if(isTwoHand=="true" || isTwoHand==true){

       price = postUseSelector.ths.find(tw=> tw.idPost===post.idPost).prezzo;
    }
    let [isComment,setIsComment] = useState(false);
    if(isComment===true){

      return(
     null
      )

    }else{
    return (
        <View>
          <ImageBackground source={{uri:url, cache:"force-cache"}} repeat style={styles.video} resizeMode={"contain"} resizeMethod="scale"/>
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
                 
                  flexDirection:"row"
                }}><Text style={styles.description} >TipTo</Text> 
                {post.nameTag.map( nt=> {return ( <TouchableOpacity onPress={
                  ()=>{
                    navigation.navigate({
                      routeName: 'Tip',
                  
                      params: {
                          tag: nt, 
                          posts: posts
                        }});
                  }
                }><Text style={{
                  color:"#fff",
      fontSize:14,
      fontFamily:"Manrope_400Regular"
       
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
             {index>=0? <Image source={require('../assets/icons/heartfull.png')} style={{height:26.25,width:30,tintColor:"#FF6969",}} />: <Image source={require('../assets/icons/heart.png')} style={{height:26,width:30,tintColor:"#FFF",}} />}
           
           </TouchableOpacity>
           <Text style={{color: '#fff', marginBottom: 25, fontFamily:"Manrope_500Medium" }}>{"0"}</Text>
            <TouchableOpacity onPress={
            ()=> {
              setModalVisible(true);
            /*  navigation.navigate({routeName:"Comment",params:{
              
                postId: post.idPost
  
              }
            })*/
            }}>
              
              <Image source={require('../assets/icons/comment.png')} style={{height:30,width:30,tintColor:"#FFF",}} />

          </TouchableOpacity>
            <Text style={{color: '#fff', marginBottom: 25,  fontFamily:"Manrope_500Medium"}}>{comments.length}</Text>
            <TouchableOpacity onPress={
        ()=>{
          console.log(post.idPost)
          dispatch(togglePreferred(post))
        }
           }>
               
                {indexPreferedd>=0? <Image source={require('../assets/icons/savefull.png')} style={{height:30,width:18.75,tintColor:"#FF6969",}} />:  <Image source={require('../assets/icons/save.png')} style={{height:30,width:20,tintColor:indexPreferedd >=0 ?"#ff6969":"#FFF",}} />}

            </TouchableOpacity>
            <Text style={{color: '#fff', marginBottom: 25, fontFamily:"Manrope_500Medium"}}>1234</Text>
            <Image source={require('../assets/icons/share.png')} style={{height:30,width:31.71,tintColor:"#FFF",}} />
            <Text style={{color: '#fff', marginBottom: 25, fontFamily:"Manrope_500Medium"}}>1234</Text>
            {me ==="true" ?
            <TouchableOpacity 
              onPress={()=>{
                setModalVisiblePunti(true)
              }}
            >           
               <Text style={{color: '#fff',fontWeight:"bold",fontSize:18}}>...</Text> 
            </TouchableOpacity>
:null}
            {(isTwoHand=="true" || isTwoHand==true)
             ? 
            <View>
           
            <TouchableOpacity style={{
              justifyContent:"center",
              alignItems:'center',
              borderRadius:30,
              borderWidth:1,
              borderWidth:2,
              backgroundColor:isAdd?"#ff9c9c": "#ff6969",
              height:46,
              margin:1,
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOpacity: 0.9,
              elevation: 20,
              shadowRadius: 100 ,
              shadowOffset : { width: 1, height: 13},
              borderColor:isAdd?"#ff9c9c": "#ff6969",
              width:82,
              marginRight:50
            }}
            onPress={
              ()=>{
               if(isAdd==true){
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
               fontSize:16,
           
               color:"#FFF",
               fontFamily:"Manrope_700Bold"
             }}> {price}€</Text> 
              <Text style={{
                color:"white",
                fontSize:16,
                fontFamily:"Manrope_700Bold"
                
                
    
              }}>
                {isAdd?"Remove": "Buy"}</Text>
            </TouchableOpacity>
            </View>
            
            : null }
            </View>
          </View>

          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          
          setModalVisible(false)
        }}
        
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           
          <View style={styles.screen}>
         <View style={{
           width:"100%",
           flexDirection:"row",
           justifyContent:"center"
         }}>
             <TouchableOpacity onPress={()=>{
           setModalVisible(false)
         }}>
             <Text style={{color:"black"}}>Close Comments</Text>
           </TouchableOpacity>
            </View>
             <View style={styles.commentHeader}>
               <Image style={styles.image} source={{
 
                   uri:meComment.urlPhoto
 
               }}/>
               <TextInput 
                multiline={true}
               placeholder="Add comment"
               style={styles.contentComment}
               onChangeText={commentInputHandler}
               value={enterdComment}
               >
 
 
                   
               </TextInput>
               <TouchableOpacity style={{
  justifyContent:"center",
  alignItems:'center',
  borderRadius:25,
  borderWidth:1,
  borderWidth:2,
  backgroundColor:"#FF6969",
  height:45,
  margin:1,
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  shadowOpacity: 0.9,
  elevation: 20,
  shadowRadius: 100 ,
  shadowOffset : { width: 1, height: 13},
  borderColor:"#FF6969",
  width:80,
  flexDirection:"row"
 }}
 onPress={()=>  addCommentHandler(postId,meComment,enterdComment)}
 
 >
   <Text style={{
    color:"white",
    fontSize:15,
    textAlign:"center",
    fontWeight:"bold",
    textAlignVertical:"center"
    ,
    padding:5
 
  }}>Post</Text>
 </TouchableOpacity>
            
               </View>
               <ScrollView>     
    <FlatList
    data={comments}
    keyExtractor={(item,index)=> item.id}
    renderItem={({item})=>{
        
        const user = USERS.find(user => user.idUser === item.idCommentAuthor)
        let like= false;
        return(
    
              <View style={styles.comment}>
               <Image style={styles.image} source={{
                   uri:user.urlPhoto
 
               }} />
               <View style={styles.showCommnet}>               
               <Text style={{width:"100%"}}>{ <Text style={{fontStyle:"italic",fontWeight:"bold"}}>{user.username+" "}</Text>}{item.description}</Text>
               <Text>{TimeUtils.renderPeriod$3(new Date(item.date),new Date(),"Now",1)}</Text>
              </View>
             
               </View>)
 
 
    }}
   style={{width:"100%"}}
    
    />
    </ScrollView>
 
 </View>
          
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblePunti}
        onRequestClose={() => {
setModalVisiblePunti(false)        }}>
        <View style={styles.centeredViewPunti}>
          <View style={styles.modalViewPunti}>
          <Pressable onPress={()=>{
           navigation.navigate({routeName:"Update",params:{
            id:postId,
            uri: post.urlPost,
            isTwoHand:isTwoHand
           }})
          
          }}>
          <Text style={{
            fontSize:16,
            margin:5
          }}>Modifica</Text>
          </Pressable>
          <Pressable onPress={()=>{
            dispatch(deletePost(post.idPost))
            navigation.replace('Profile')
            
          }}>
          <Text  style={{
            fontSize:16,
            margin:5
          }}>Elimina</Text>
          </Pressable>
          
          
          <Pressable onPress={()=>{
            setModalVisiblePunti(false)
          }}>
            <Text  style={{
            fontSize:16,
            margin:5,
            color:"red"
          }}>Annulla</Text>
          </Pressable>
            
          </View>
        </View>
      </Modal>
        </View>
      );}
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
      
      color: '#fff',
      fontSize:16,
      height:21,
      minWidth:68,
      fontFamily:"Manrope_700Bold"
    },
    description: {
      color:"#fff",
      fontSize:14,
      fontFamily:"Manrope_400Regular"
      }, screen:{
        width:'100%',
        height:'92%'

    }
    ,
    comment:{
        margin:0.6,
        flexDirection:'row'
        ,width:350,
        backgroundColor:'white',
       
    
        minHeight:60    ,
        borderBottomWidth:0.150 
    }
    ,
    commentHeader:{
        flexDirection:'row'
        ,width:"100%",
        backgroundColor:'white'
        ,alignItems:'center',
        borderColor:"grey"
        ,borderBottomWidth:0.2,
    },
    image:{
        backgroundColor:'black',
        width:45,
        height:45
    ,   borderRadius:50 
    ,
    },
    contentComment:{
        backgroundColor:'#EFEFEF',
        width:200,
        minHeight: 50
        ,borderRadius:25
        ,margin:5,
        marginRight:10,
        padding:10
    }
    ,buttonPost:{
        
     backgroundColor:'white'
    
    },
    showCommnet:{
        width:"80%",
       
        margin:5,
        flexDirection:"row",
        paddingTop:10
    },
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      height:"100%"
    },
    modalView: {
      backgroundColor: 'white',
      borderTopRightRadius: 25,
         borderTopLeftRadius: 25,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      height:"60%",
      width:"100%",
      maxWidth:"100%",
      maxHeight:"100%"
    },
    openButton: {
      backgroundColor: '#FFF',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      maxHeight:45,
      flexDirection:"row",
      borderColor:"black",
      borderWidth:2,
      margin:10
    },
    textStyle: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    }, centeredViewPunti: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      height:350
    },
    modalViewPunti: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 25,
         
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      height:150,
      width:"90%",
      maxWidth:"90%",
      maxHeight:"90%",
      justifyContent:"center",
      alignItems:"center"
    },
   
  });