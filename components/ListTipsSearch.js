import React from 'react'
import {FlatList,Text,View,Image} from 'react-native'
import TipSearch from './TipSearch';
import UserSearch from './UserSearch';

export default function ListTipsSearch({tips,navigation}){
    return(
        <FlatList
        data={tips}
        renderItem={({item})=>{
           return (
           <TipSearch tip={item} navigation={navigation}/>

           )}}
        />
    );
}