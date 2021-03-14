import { GRIDPOSTS, GRIDS, POSTS } from "../../data/dummy-data";

import Post from "../../model/Post";
import { UPLOAD_PHOTO_GRID } from "../actions/UploadPost";
const initialState = {
    posts : POSTS,
    grid :GRIDS,
    gridPost:GRIDPOSTS

}
export default (state = initialState, action) => {
    switch (action.type) {
        
      case  UPLOAD_PHOTO_GRID: 
      console.log(action.tips)
      const id = "post" + Math.random();
      var start = action.tips.indexOf("#")
      var end = action.tips.indexOf(" ")
      let subString= action.tips.substring(start+1,end);
      const post =  new Post(id, action.uri,0,0,"user10",[subString],action.descrizione,true,false);
   
        console.log(state.posts)
      return {...state , posts : state.posts.concat(post)}



        default :return state;
  
    }
     
  
  
  
  
  
    
  };
