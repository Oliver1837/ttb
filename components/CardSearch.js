import React, {useState} from 'react';
import { StyleSheet, Text, View ,Image, FlatList, TouchableOpacity} from 'react-native';
import { } from 'native-base';
import {  POSTS} from '../data/dummy-data';
import Button from './UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTagFollow } from '../store/actions/User';
const CardSearch = props =>{
console.log(props.url)

let  posts = POSTS;
const preferredTag = useSelector(state => state.user.preferredTag)
var isPreferred = preferredTag.filter(tag=> tag.nameTag === props.title).length ;
//console.log(postTips)
posts = posts.filter(p=> p.nameTag.filter(t => t=== props.title).length>0 )
      console.log(posts)
const dispatch= useDispatch()

return (

<View style={styles.card}>
    <View style={styles.tips}>
        <View style={styles.tipContaneir}> 
        <View style={styles.tipsBoh}>
          <Image   source={{ uri:props.url}}
                  style={styles.tipsImage}  resizeMode='cover'
                  
                  />

        </View>
        <Text style={styles.tipsTitle}>{props.title}</Text>
        </View> 
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
    <View style={styles.tipsListImage}>
    <FlatList 
     horizontal={true}
     data={(posts)}
     renderItem={
     ({item}) =>(
      
      <TouchableOpacity 
      onPress={()=>{
       
       props.navigation.navigate({
           routeName: 'Post',
       
           params: {
               post : item,

             }});
    

}} style={styles.item}>
     <Image style={styles.title} source={{uri:item.urlPost}} resizeMode='cover' />
     </TouchableOpacity>)
     
    }
     keyExtractor={(item) => item.idPost}
    

    >
    </FlatList>


    </View>
</View>


);












}


export default CardSearch;


const styles = StyleSheet.create({
    

    card:{
        width:'100%',
        height: 240,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        backgroundColor:'white',
        
    
        },

    tips:{
       
        width:'100%',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        padding: 10,
        paddingRight:30,


    },
    tipsBoh:{
       
        borderRadius:25,
    
        height:50,
        width:50
        

    },
    tipsImage:{
       
      borderRadius:25,
  
      height:50,
      width:50,
      borderWidth:2,
      borderColor:"black"
      

  },
    tipContaneir:{
              width:'80%',
        height:60,
        flexDirection:"row",
        justifyContent:'flex-start',
        alignItems:"center",
       

    },
    tipsTitle:{
     
        fontSize:20,
        marginLeft:15
    },
    tipsListImage:{
              height:200,
   
        width:'100%',
        borderRadius:10,

    },
    item: {
     
        padding: 5,
        
        width:100
        ,height:200,
        borderRadius:10,
      },
      title: {
                width:'100%'
        ,height:140,
        borderRadius:10,
      },


});