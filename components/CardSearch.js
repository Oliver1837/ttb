import React, {useState} from 'react';
import { StyleSheet, Text, View ,Image, FlatList, TouchableOpacity} from 'react-native';
import { } from 'native-base';
import {  POSTS} from '../data/dummy-data';
import Button from './UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTagFollow } from '../store/actions/User';
import ImageSearchCard from './ImageSearchCard';
const CardSearch = ({title,url,navigation,posts}) =>{
const preferredTag = useSelector(state => state.user.preferredTag)
var isPreferred = preferredTag.findIndex(tag=> tag=== title);
posts = posts.filter(p=> p.nameTag.filter(t => t=== title).length>0 && p.isTwoHand===false )
      
const dispatch= useDispatch()

return (

<View style={styles.card}>
    <View style={styles.tips}>
        <View style={styles.tipContaneir}> 
        <View style={styles.tipsBoh}>
          <Image   source={{ uri:url,cache: 'reload',}}
                  style={styles.tipsImage}  resizeMode='cover'
                  
                  />

        </View>
        <Text style={styles.tipsTitle}>{title}</Text>
        </View> 
        <TouchableOpacity style={{
          justifyContent:"center",
          alignItems:'center',
          borderRadius:40,
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
          borderColor:isPreferred <  0 ?"#ff6969":"#ff6969"
          ,
          width:100,
     
        }}
        onPress={()=>{
           dispatch(toggleTagFollow(title))
        }}
        >
          <Text style={{
            color:isPreferred <  0 ?"#fff":"#ff6969",
            fontSize:16,
            textAlign:"center",
            fontWeight:"bold",
            textAlignVertical:"center"
            ,
            padding:5,
            fontFamily:"Manrope_700Bold"

          }}>{isPreferred <  0 ?"Follow":"Following"}</Text>
        </TouchableOpacity>   
    


    </View>
    <View style={styles.tipsListImage}>
    <FlatList 
     horizontal={true}
     data={(posts)}
     initialNumToRender={3}
     renderItem={
     ({item}) =>(
      <ImageSearchCard post={item} navigation={navigation} key={item.idPost}/>
     )
     
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
        height: 250,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        backgroundColor:'white',
        
    
        },

    tips:{
       
        width:'90%',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        padding: 10,
      


    },
    tipsBoh:{
       
        borderRadius:25,
    
        height:50,
        width:50
        

    },
    tipsImage:{
       
      borderRadius:40,
  
      height:60,
      width:60,
     
      

  },
    tipContaneir:{
        width:'80%',
        height:60,
        flexDirection:"row",
        justifyContent:'flex-start',
        alignItems:"center",
        fontFamily:"Manrope_500Medium"
       

    },
    tipsTitle:{
     
        fontSize:16,
        marginLeft:25,
        marginTop:5
    },
    tipsListImage:{
              height:200,
   
        width:'100%',
        borderRadius:10,

    },
   


});