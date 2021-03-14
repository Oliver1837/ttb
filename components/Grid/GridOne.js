import React, { useState } from 'react'
import {Image, TouchableOpacity, View} from 'react-native'
import { useSelector } from 'react-redux';
const GridOne =(props)=>{
const image= (<Image
source={{uri:props.uri}}
style={{
    height:"100%",
    width:"100%"
}}
/>)
const [selectd,setSelected] = useState(false);
const [posizione,setPosizione] = useState(null);
    if(props.isSelection){
    const userSelector = useSelector(state => state.user)
    const postSelector = useSelector(state => state.post)
    const user = userSelector.user
    const grid = postSelector.grid.filter(g => g.userId===user.idUser && g.isComplete ===false);
    const GRIDPOSTS =   postSelector.gridPost
    const POSTS = postSelector.posts
    const gridPosts = GRIDPOSTS.filter(gp=> gp.idGrid===grid.idGrid); 
    var posts =  [];
        console.log(grid.lenght)
    if(grid.lenght>0){
       var j = 0;
       for(var i = 0 ; i < 3; i++){
        if(j ==gridPosts.length){
             j=0;
        }
      if(i === gridPosts[j].posizione ){

        posts[i] = POSTS.find(p => p.idPost===gridPosts[j].idPost);
        j++;
      }else{
          posts[i] =  new Post('', '',0,0,"0",[],"",false,true)

        }

      }
    
}}
    return (
        
        <View style={{
            flexDirection:"row",
        width:200,
        height:150,
        justifyContent:"center",
   

    }}>
        <View  style={{
          flexDirection:"column",
        width:50,
        height:150,
    }}>
<TouchableOpacity  style={{
         height:75,
        width:51,
        borderWidth:1,
        borderBottomWidth:0
        
    }}
    
    onPress={()=>{
        setSelected(true);
        setPosizione(0)
    }}
    >
        {(selectd && posizione) ===0 && posts.lenght!=0  ?image :null}
</TouchableOpacity> 
<TouchableOpacity  style={{
         height:75,
        width:51,
        borderWidth:1,
        borderBottomWidth:1
        
    }}
    
    onPress={()=>{
        setSelected(true);
        setPosizione(1)
    }}
    >
        {selectd && posizione ===1 ?image :null}

</TouchableOpacity> 
        </View>
        <TouchableOpacity style={{
                     borderWidth:1,
       flexDirection:"column",
        width:100,
        height:150,
        justifyContent:"center",

    }}
    onPress={()=>{
        setSelected(true);
        setPosizione(2)
    }}
    >
        {selectd && posizione ===2 ?image :null}
    

        </TouchableOpacity>

    </View>
    );
}
export default GridOne;