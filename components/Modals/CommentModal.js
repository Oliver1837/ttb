import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ListComments from "../ListComments";
import React, { useState } from  'react'
import { USEREXAMPLE } from "../../data/dummy-data";
const {width, height} = Dimensions.get('window');
import * as actionComment from '../../store/actions/Comment'
import {primary,secodary} from '../../config/color'



const CommentModal = ({modalVisible,setModalVisible,postId})=>{
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comment.comment.filter(comment=>comment.idPost===postId ));
    const [enterdComment,setEnteredComment] =useState("");
    const meComment = USEREXAMPLE

     const commentInputHandler=enteredText=>{
         setEnteredComment(enteredText);
     }
       const  addCommentHandler=(postId,meComment,enterdComment)=>{
         if(enterdComment!=null){
            
             dispatch(actionComment.addComment(postId ,enterdComment,meComment.idUser));
        
             setEnteredComment(null);
         }
     }
    return (

    <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          
          setModalVisible(!modalVisible)
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
                 console.log("Premuto")
           setModalVisible(!modalVisible)
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
                backgroundColor:primary,
                height:45,
                margin:1,
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowOpacity: 0.9,
                elevation: 20,
                shadowRadius: 100 ,
                shadowOffset : { width: 1, height: 13},
                borderColor:primary,
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
      <ListComments comments={comments}/>
                   </ScrollView>
 
 </View>
          
          </View>
        </View>
      </Modal>

    );


}

export default CommentModal;

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
        padding:10,
        textAlignVertical:"center",
        paddingTop:15
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