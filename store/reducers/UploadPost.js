import { GRIDPOSTS, GRIDS, POSTS, TAGS, TWOHAND } from "../../data/dummy-data";

import Post from "../../model/Post";
import Tag from "../../model/Tag";
import TwoHand from "../../model/TwoHand";
import { UPLOAD_PHOTO_GRID,UPLOAD_PHOTO_TWO_HAND,deletePost, DELETE_POST, UPTADE_POST_TWO_HAND,UPTADE_POST } from "../actions/UploadPost";
const initialState = {
    posts : POSTS,
    grid :GRIDS,
    gridPost:GRIDPOSTS
    ,
    tags: TAGS,
    ths: TWOHAND

}
export default (state = initialState, action) => {
    switch (action.type) {
        
      case  UPLOAD_PHOTO_GRID: {
      console.log(action.tips)
      const id = "post" + Math.random();
      let subString= getSubStringTag(action.tips.replace(new RegExp(' ', 'g'),""))
      console.log(subString)
      let ts = state.tags;

        
     for(var i = 0; i<subString.length; i++){
      if(ts.findIndex(t=> t.nameTag===subString[i])<0){
        var tag = new Tag(subString[i], action.uri)
        ts=  ts.concat(tag)

      }
     }

      const post =  new Post(id, action.uri,0,0,"user10",subString,action.descrizione,true,false);
   
      return {...state , posts : state.posts.concat(post),tags :ts}
    }
      case  UPLOAD_PHOTO_TWO_HAND: {
      const id = "post" + Math.random();
      let subString= getSubStringTag(action.tips)
      let ts = state.tags;

        
     for(var i = 0; i<subString.length; i++){
      if(ts.findIndex(t=> t.nameTag===subString[i])<0){
        var tag = new Tag(subString[i], action.uri)
        ts=  ts.concat(tag)

      }
     }
    
      const post =  new Post(id, action.uri,0,0,"user10",subString,action.descrizione,false,true);
      const idTh = "twohand" + Math.random();
      const th = new TwoHand(idTh,id,action.prezzo.replace("$",""),"user10")
      console.log(th)
      return {...state , posts : state.posts.concat(post),tags :ts,ths:state.ths.concat(th)}

    }
    case  DELETE_POST:{
      const id = action.idPost;
      console.log(id)
      const posts = state.posts;
      const indexPost = posts.findIndex(p=> p.idPost===id)
      posts.splice(indexPost,1);
      return {...state , posts : posts}
    } 
    case UPTADE_POST :{
      console.log("Inizio Modifica")
      const id = action.id;
      console.log(id)
      const posts = state.posts;
      const indexPost = posts.findIndex(p=> p.idPost===id)
      let subString= getSubStringTag(action.tips)
      let ts = state.tags;

        
     for(var i = 0; i<subString.length; i++){
      if(ts.findIndex(t=> t.nameTag===subString[i])<0){
        var tag = new Tag(subString[i], action.uri)
        ts=  ts.concat(tag)

      }
     }
      posts[indexPost].descrizione= action.descrizione
      posts[indexPost].nameTag=subString
      console.log( posts[indexPost])
     

      return {...state , posts : posts,tags :ts}
    } 
        default :return state;
  
  }
     
function getSubStringTag(string){
    var start = string.indexOf("#")
    var end = string.length
    var words = []
    let word= ""
    for(var i = 0;i<=end ; i++ ){
      var char = string.charAt(i)
      if(char!='#' && i!=end){
        word = word + char;
       
      }else if((char==='#' || i===end)&& word!==""){
      
        start= i;
        words= words.concat(word)
        word=""

      }

    }
    
    return words;
}
  
  
  
  
    
  };
