import { USEREXAMPLE } from "../../data/dummy-data";
import { TOGGLE_FOLLOW, TOGGLE_LIKE, TOGGLE_PREFERRED, TOGGLE_TAG_PREFERRED } from "../actions/User";

const initialState = {
    likes:[],
    preferred: [],
    follow:[],
    preferredTag:['Fashion'],
    user:USEREXAMPLE
  };
  export default (state = initialState, action) => {
    switch (action.type) {
        
        case TOGGLE_FOLLOW:
            const follow =action.idUser
            const indexFollow = state.follow.findIndex(f => f ===follow);
            console.log(state.follow)
            console.log(follow)
            if(indexFollow >=0){
                console.log("Esiste")
                let updateFollow = [...state.follow]
                updateFollow = updateFollow.filter(f => f !== follow);
                return{...state,follow:updateFollow}

            }else{
                
                console.log(" Nonc Esiste")
                let updateFollow = [...state.follow]
                return{...state,follow:updateFollow.concat(follow)}

            }
        case TOGGLE_LIKE:
            const like =action.idPost
            const index = state.likes.findIndex(l => l ===like);
            if(index >=0){
                let updateLikes = [...state.likes]
                updateLikes = updateLikes.filter(l => l !== like);
                return{...state,likes:updateLikes}

            }else{
                let updateLikes = [...state.likes]
                return{...state,likes:updateLikes.concat(like)}

            }
            return state;
        case TOGGLE_PREFERRED:
            const preferred =action.idPost
            const indexP = state.preferred.findIndex(p=> p ===preferred);
            if(indexP >=0){
                let updatePreferred = [...state.preferred]
                updatePreferred = updatePreferred.filter(p => p !== preferred);
                return{...state,preferred:updatePreferred}

            }else{
                let updatePreferred = [...state.preferred]
                return{...state,preferred:updatePreferred.concat(preferred)}

            }
            return state;
            case TOGGLE_TAG_PREFERRED:
                const tag =action.nameTag
                const indexT = state.preferredTag.findIndex(t=> t ===tag);
                console.log("Toggle tag ")
                console.log(tag)
                if(indexT >=0){
                    console.log("Non esiste")
                    let updatePreferredTag = [...state.preferredTag]
                    updatePreferredTag = updatePreferredTag.filter(p => p !== tag);
                    return{...state,preferredTag:updatePreferredTag}
    
                }else{
                    console.log("Non esiste")
                    let updatePreferredTag = [...state.preferredTag]
                    return{...state,preferredTag:updatePreferredTag.concat(tag)}
    
                }
                return state;

        default :return state;
  
    }
     
  
  
  
  
  
    
  };
