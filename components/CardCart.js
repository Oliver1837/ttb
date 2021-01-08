import React, {useState} from 'react';
import { StyleSheet, Text, View ,Image, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import { } from 'native-base';
import {  POSTS, TWOHAND} from '../data/dummy-data';
import Button from './UI/Button';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
const CardCart = props =>{
console.log(props.url)

const  posts =props.post;
const dispatch = useDispatch();

return (

<View style={styles.card}>
    <View style={styles.tips}>
        <View style={styles.tipContaneir}> 
        <View style={styles.tipsBoh}>
          <Image   source={{ uri:props.url}}
                  style={styles.tipsImage}  resizeMode='cover' />

        </View>
        <Text style={styles.tipsTitle}>{props.title}</Text>
        </View>    
        <Text style={styles.tipsTitle}>Tot:{props.total}$</Text>
   


    </View>
    <View style={styles.tipsListImage}>
    <FlatList 
     horizontal={true}
     data={(posts)}
     renderItem={
     ({item}) =>{
const price = TWOHAND.find(t => t.idPost === item.idPost).prezzo;
console.log(price)
      return(
      <TouchableOpacity 
      onPress={()=>{
       
       props.navigation.navigate({
           routeName: 'Post',
       
           params: {
               post : item,

             }});
    

}} style={styles.item}>
     <ImageBackground style={styles.title} source={{uri:item.urlPost}} resizeMode='cover' >
         <View
         style={{

            width:"100%",
            flexDirection:"row",
            justifyContent:"space-between"             
         }}><Text style={{
             fontWeight:"bold",
             color:"#fff",
             fontSize:18
         }}>{price}$</Text>
       <Ionicons name="close-sharp" size={20} color="red" />
         </View>
     </ImageBackground>
     </TouchableOpacity>)
     }
    }
     keyExtractor={(item) => item.idPost}
    

    >
    </FlatList>


    </View>
</View>


);












}


export default CardCart;


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
      width:50
      

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