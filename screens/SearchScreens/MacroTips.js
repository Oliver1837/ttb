import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import IconCart from '../../components/IconCart'
import ListPostPreview from '../../components/ListPostPreview'
import ListTwoHandPreview from '../../components/ListTwoHandPreview'
import {Dizionario, POSTS,TWOHAND} from '../../data/dummy-data'
import DizionarioMacro from '../../model/DizionarioMacro'

const MacroTipsScreen =({navigation}) =>{
    
    const th = navigation.getParam("th")
    const macro = navigation.getParam("macro")
    let postUseSelector = useSelector(state=> state.post)
    let posts = postUseSelector.posts
    if(th===false){
    posts = POSTS.filter(p => p.isTwoHand===false )
  
    return (
    
    <ListPostPreview posts = {posts} navigation={navigation} routeName="Post" key={1} macro={macro} isMacroList={true} />

    )
    }else{
        
        const ths = postUseSelector.ths;
        return (  <ListTwoHandPreview ths= {ths} navigation={navigation} routeName="Post"/>)
    }   
}
MacroTipsScreen.navigationOptions = navData => {
    //var isTw = navData.navigation.getParam("isTwoHand")
  
    return {
      
  
      headerRight: ()=>{ return (
        <IconCart navigation={navData.navigation} isBlack={true}/>
      )}
        
    };

  };
export default MacroTipsScreen;

