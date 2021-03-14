import AsyncStorage from '@react-native-async-storage/async-storage';
export const TOGGLE_LIKE = "TOGGLE_LIKE"
export const TOGGLE_PREFERRED ="TOGGLE_PREFERRED"
export const TOGGLE_FOLLOW ="TOGGLE_FOLLOW"
export const TOGGLE_TAG_PREFERRED ="TOGGLE_TAG_PREFERRED"
export const LOGIN = "LOGIN"

export const toggleLike = (idPost) => {
    return { type: TOGGLE_LIKE, idPost: idPost };
  };
  export const togglePreferred = (idPost) => {
    return { type: TOGGLE_PREFERRED, idPost: idPost };
  };
  export const toggleFollow = (idUser) => {
    return { type: TOGGLE_FOLLOW, idUser: idUser };
  };
  export const toggleTagFollow = (nameTag) => {
    return { type: TOGGLE_TAG_PREFERRED, nameTag: nameTag };
  };



//email è email o password
export const login=(email,password)=>{
    return async dispatch => {
     /*   const response = await fetch('http://192.168.1.3:8080/public/signIn', {
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
          body: JSON.stringify({
            email: email,
            password: password
          })
        
        });
    
        const resData = await response.json();
        console.log(resData)
        if(resData.status ===404){
          throw new Error('Username o password sono errati')
        }
*/
        var token = "BLABLA";
        var username = "BLABLA";
        var id = "BLABLA"
        saveDataToStorage(token, username,id);
      //  dispatch(authenticate(username,token ,id))
     
}
}
export const authenticate = (username, token,id) => {
  return dispatch  => {
    dispatch({ type: LOGIN, username: username, token: token ,userid:id});
  };
};

const saveDataToStorage = (token,username,id )=> {
    AsyncStorage.setItem(
      'UserData',
      JSON.stringify({
        token: token,
        username:username,
        userid:id


      })
    );
  };