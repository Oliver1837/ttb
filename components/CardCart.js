import React, {useState} from 'react';
import { StyleSheet, Text, View ,Image, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import { } from 'native-base';
import {  POSTS, TWOHAND, USERS} from '../data/dummy-data';
import Button from './UI/Button';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addCart, removeCart } from '../store/actions/Cart';

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
  
        
     <FlatList 
     horizontal={true}
     data={(posts)}
     styles={{
        marginBottom:19.3
    }}
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
     <ImageBackground style={styles.title} imageStyle={{ borderRadius: 6}} source={{uri:item.urlPost}} resizeMode='cover' >
         <View
         style={{

            width:"100%",
            flexDirection:"row",
            justifyContent:"space-between"             
         }}><Text style={{
             color:"#fff",
             fontSize:16
         }}>{price}$</Text>
         <TouchableOpacity onPress={()=>{
                console.log(item.userId+ " "+item.idPost)
                
               dispatch(removeCart(USERS.find(u => u.idUser===item.userId),item))

         }}>     
              <Ionicons name="close-sharp" size={20} color="#fff" />
         </TouchableOpacity>
 
         </View>
     </ImageBackground>
     </TouchableOpacity>)
     }
    }
     keyExtractor={(item) => item.idPost}
    ListFooterComponent={()=> {
        return(
            <View style={{
                width: 100
                ,height:150,
                borderRadius:10,
                borderWidth:1,
                margin:5,
                borderColor:"#ff6969",
                alignItems:"center",
                justifyContent:"center"
            }}>

            <Ionicons name="add-outline" size={50} color="#ff4343" />


            </View>
        )
    }}

    />
   

    <View style={{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        maxWidth:"100%",
        minWidth:"100%",
       
    }}>
    <TouchableOpacity style={{
        maxWidth:352.25,
        minWidth:352.25,
        justifyContent:"center",
        
        alignItems:"center",
        backgroundColor:"#ff6969",
        borderRadius:20,
        height:45}}>
    <Text style={{
        color:"#fff",
        fontWeight:"bold"
    }}>Check Out</Text>
    </TouchableOpacity>
    </View>
</View>


);












}


export default CardCart;


const styles = StyleSheet.create({
    

    card:{
        width:'100%',
        height: 300,
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
       
      borderRadius:30,
  
      height:60,
      width:60
      

  },
    tipContaneir:{
              width:'80%',
        height:60,
        flexDirection:"row",
        justifyContent:'flex-start',
        alignItems:"center",
       

    },
    tipsTitle:{
     
        fontSize:16,
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
        marginRight:14.7,
      },
      title: {
        width:100
        ,height:148,
        marginRight:14.7,
        borderRadius:10,
      },


});