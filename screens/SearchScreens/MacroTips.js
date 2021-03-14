import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import ListPostPreview from '../../components/ListPostPreview'
import ListTwoHandPreview from '../../components/ListTwoHandPreview'
import {Dizionario, POSTS,TWOHAND} from '../../data/dummy-data'
import DizionarioMacro from '../../model/DizionarioMacro'

const MacroTipsScreen =(props) =>{
    
    const th = props.navigation.getParam("th")
    const macro = props.navigation.getParam("macro")
    let posts = POSTS
    if(th===false){
    posts = POSTS.filter(p => p.isTwoHand===false )
  
    return (
    
    <ListPostPreview posts = {posts} navigation={props.navigation} routeName="Post" key={1} macro={macro} isMacroList={true}/>

    )
    }else{
        const ths = TWOHAND;
        return (  <ListTwoHandPreview ths= {ths} navigation={props.navigation} routeName="Post"/>)
    }   
}
export default MacroTipsScreen;

