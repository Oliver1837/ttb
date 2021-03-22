import { GRIDPOSTS, GRIDS, POSTS, TAGS, TWOHAND } from "../../data/dummy-data";

import Post from "../../model/Post";
import Tag from "../../model/Tag";
import TwoHand from "../../model/TwoHand";
import { UPLOAD_PHOTO_GRID,UPLOAD_PHOTO_TWO_HAND } from "../actions/UploadPost";
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
      let subString= getSubStringTag(action.tips)
      let ts = state.tags;
      if(ts.findIndex(t=> t.nameTag===subString)<0){
        var tag = new Tag(subString, action.uri)
        ts=  ts.concat(tag)

      }


      const post =  new Post(id, action.uri,0,0,"user10",[subString],action.descrizione,true,false);
   
      return {...state , posts : state.posts.concat(post),tags :ts}
    }
      case  UPLOAD_PHOTO_TWO_HAND: {
      const id = "post" + Math.random();
      let subString= getSubStringTag(action.tips)
      let ts = state.tags;
      if(ts.findIndex(t=> t.nameTag===subString)<0){
        var tag = new Tag(subString, action.uri)
        ts=  ts.concat(tag)

      }
      const post =  new Post(id, action.uri,0,0,"user10",[subString],action.descrizione,false,true);
      const idTh = "twohand" + Math.random();
      const th = new TwoHand(idTh,id,action.prezzo,"user10")
      console.log(th)
      return {...state , posts : state.posts.concat(post),tags :ts,ths:state.ths.concat(th)}

    }
        default :return state;
  
    }
     
function getSubStringTag(string){
    var start = string.indexOf("#")
    var end = string.length
    return string.substring(start+1,end);
}
  
  
  
  
    
  };
