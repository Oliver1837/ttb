import React, { useState } from 'react'
import {View ,Text,StyleSheet, FlatList, Button, Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import {COMMENT, USEREXAMPLE,USERS} from '../data/dummy-data'
import * as actionComment from '../store/actions/Comment'
const CommentScreen = props=>{

    const me = USEREXAMPLE
    

    const dispatch = useDispatch();
    const postId=props.navigation.getParam("postId");
    console.log(postId)
   // const [comments,setComment] = useState(COMMENT.filter(comment=>comment.idPost===postId ));
   const comments = useSelector(state => state.comment.comment.filter(comment=>comment.idPost===postId ));
   console.log(comments)
   const [enterdComment,setEnteredComment] =useState("");
    const commentInputHandler=enteredText=>{
        setEnteredComment(enteredText);
    }
      const  addCommentHandler=(postId,me,enterdComment)=>{
        if(enterdComment!=null){
           
            dispatch(actionComment.addComment(postId ,enterdComment,me.idUser));
         /*   setComment((currentComment) => [...currentComment,
                {id: Math.random().toString(), value:enterdComment}]);*/
            setEnteredComment(null);
        }
    }
    return (

            <View style={styles.screen}>
                  <View style={styles.commentHeader}>
                       <Image style={styles.image} source={{

                           uri:me.urlPhoto

                       }}/>
                       <TextInput 
                        multiline={true}
                       placeholder="Add comment"
                       style={styles.contentComment}
                       onChangeText={commentInputHandler}
                       value={enterdComment}
                       >


                           
                       </TextInput>
                       <Button color={'black'} style={styles.buttonPost} title="POST" onPress={()=>{

                           addCommentHandler(postId,me,enterdComment)

                       }}/>
                       </View>
            <FlatList
            
            data={comments}
            keyExtractor={(item,index)=> item.id}
            renderItem={({item})=>{
                
                const user = USERS.find(user => user.idUser === item.idCommentAuthor)
                
                return(
            
                      <View style={styles.comment}>
                       <Image style={styles.image} source={{
                           uri:user.urlPhoto

                       }} />
                       <Text style={styles.showCommnet}
                       
                       
                        >{item.description}</Text>
                      
                       </View>)


            }}
           
            
            />
        </View>

        );


}
export default CommentScreen;
const styles = StyleSheet.create({
    screen:{
        width:'100%',
        height:'100%'

    }
    ,
    comment:{
        margin:0.6,
        flexDirection:'row'
        ,width:"100%",
        backgroundColor:'white'
        ,alignItems:'center',
    
        minHeight:100      
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
        width:50,
        height:50
    ,   borderRadius:50 
    ,padding:10,
        margin: 10
    },
    contentComment:{
        backgroundColor:'#EFEFEF',
        width:'60%',
        minHeight: 50
        ,borderRadius:25
        ,margin:5,marginRight:10,
        padding:10
    }
    ,buttonPost:{
        
     backgroundColor:'white'
    
    },
    showCommnet:{
        width:'80%',
        padding:10,
        margin:10
    }





})


