import React from 'react'
import {View,Image,Text, TouchableOpacity} from 'react-native'
import { POSTS } from '../data/dummy-data';

export default function TipSearch({tip,navigation}){
    console.log(tip)
    let  posts = POSTS;
    posts = posts.filter(p=> p.nameTag.filter(t => t=== tip.nameTag).length>0 && p.isTwoHand==false )
    return(
        <TouchableOpacity style={{flexDirection:"row",padding:10}} onPress={()=>{
            navigation.navigate({
                routeName: 'Tip',
            
                params: {
                    tag: tip, 
                    posts: posts
                  }});
        }}>                 


            <Image source={{uri:tip.urlTag}} style={{height:60,width:60,borderRadius:30}}/>
           <Text style={{
                textAlign:"center",
                textAlignVertical:"center",
                marginLeft:10,
                fontSize:18


           }}>{tip.nameTag}</Text>
           </TouchableOpacity>
    );
}