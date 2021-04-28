import {  COMMENT } from '../../data/dummy-data';
import Comments from '../../model/Comments';
import { ADD_COMMENT,} from '../actions/Comment'
const initialState = {

    comment:COMMENT,
  
};
export default (state = initialState, action) => {
    switch(action.type){
        
            case ADD_COMMENT:
                console.log("Comment: "+action.content+ "\nUser id:  " +action.user + "\nPost id :" +action.postId)
                
                const c = new Comments(action.postId,Math.random().toString(),action.user,new Date(),action.content);
                return{...state,comment:state.comment.concat(
                    c
                )};
          
        default: return state;
    }




}
