import React from 'react'
import {FlatList,Text,View,Image} from 'react-native'
import UserSearch from './UserSearch';

export default function ListUserSearch({users,navigation}){
    return(
        <FlatList
        data={users}
        renderItem={({item})=>{
           return (
           <UserSearch user={item} navigation={navigation}/>

           )}}
        />
    );
}