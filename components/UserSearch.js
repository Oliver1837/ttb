import React from 'react'
import {View,Image,Text, TouchableOpacity} from 'react-native'

export default function UserSearch({user,navigation}){
    return(
        <TouchableOpacity style={{flexDirection:"row",padding:10}} onPress={()=>{
            navigation.navigate({routeName:"Profile",params:{
                userId: user.idUser
            }})
        }}>               

            <Image source={{uri:user.urlPhoto}} style={{height:60,width:60,borderRadius:30}}/>
           <Text style={{
                textAlign:"center",
                textAlignVertical:"center",
                marginLeft:10,
                fontSize:18


           }}>{user.username}</Text>
           </TouchableOpacity>
    );
}