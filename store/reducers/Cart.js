import Carrello from "../../model/Cart";
import { ADD_CART, CLEAR_CART, REMOVE_CART } from "../actions/Cart";

const initialState = {
    cart:[],
    number:0
  
  };
  export default (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_CART:{
            console.log("ADD Reducer")
            const user = action.user
            const cart = [...state.cart]
            if(cart.length===0){
                var posts = []
                var carrello = new Carrello(user ,posts.concat(action.post) ,action.price);
                return {...state,cart:cart.concat(carrello),number:state.number+1}
            } else{
                console.log(cart)
                var price = action.price
                var indexCart = cart.findIndex(c => c.user === user );
                if(indexCart>=0){
                    var updateCart = cart.find(c => c.user ===user);
                    if(updateCart.post.findIndex(p => p === action.post)>=0){
                        return {...state , cart : cart,number:state.number+1}
                    }
                    var post =updateCart.post.concat(action.post)
                    updateCart.post = post
                    updateCart.total = updateCart.total +action.price;
                    cart[indexCart] = updateCart;
                    return {...state , cart : cart,number:state.number+1}
                }else{
                    console.log("NON Esiste");

                    var posts = []
                    var carrello = new Carrello(user ,posts.concat(action.post),action.price );                                       
                     return {...state , cart : cart.concat(carrello),number:state.number+1}
                }
                }

        }
        case REMOVE_CART:{  
         console.log("Remove Reducer")
            const user = action.user
            const cart = [...state.cart]
            if(cart.length===0){
                return state
            } else{
              //  var price = action.price
              
                var indexCart = cart.findIndex(c => c.user === user );
                console.log(indexCart)
                if(indexCart>=0){
                    var updateCart = cart.find(c => c.user ===user);
                    var indexPost = updateCart.post.findIndex(p => p === action.post)>=0
                    if(indexPost>=0){
                         updateCart.post.splice(indexPost,1)
                        if(updateCart.post.lenght>0){
                            return {...state , cart : updateCart,number:state.number-1}
                        }else{
                            let newCart = cart.splice(indexCart,0)
                            console.log(newCart)

                            return {...state , cart : newCart,number:state.number-1}
                        }
                      
                    }else{
                        return state
                    }
               
                    
                }else{
                    return state
                }
                }
            } 
            case CLEAR_CART:
            return state

        default :return state;
  
    }
     
  
  
  
  
  
    
  };
