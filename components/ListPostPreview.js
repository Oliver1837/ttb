import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Dizionario } from '../data/dummy-data';
import PostPreview from './PostPreview';


function ListPostPreview({posts,navigation,routeName,macro,isMacroList,replace}) {
    let ps = []

    let d = Dizionario.find(d=> d.macro ===macro)
    console.log()
    if(isMacroList===true){
    for (let i = 0; i < posts.length; i++) {
        console.log("Primo fro")
        console.log(posts[i])

        var tags = posts[i].nameTag
        var find = false
        for (let j = 0; j < tags.length; j++) {
            console.log("Secondo fro")

            if(d.dizionario.includes(tags[j]) && find ===false){
                ps =  ps.concat(posts[i]);
                console.log(posts[i])
                find=true;
            }

            
        }
        
    }
    }else{
        ps = posts
    }
    console.log(ps)

    return(
        <FlatList
        data={ps}
        numColumns={3}
        keyExtractor={(item, index) => item.idGrid}
         renderItem={({item})=>{
         return (
           <PostPreview key={item.idPost} post={item} navigation={navigation} routeName={routeName}   />
           )
       }}
       />


    );
}
export default ListPostPreview;