export const UPLOAD_PHOTO_GRID ="UPLOAD_PHOTO_GRID"
export const UPLOAD_PHOTO_TWO_HAND ="UPLOAD_PHOTO_TWO_HAND"
export const DELETE_POST ="DELETE_POST"
export const UPTADE_POST = "UPTADE_POST"
export const UPTADE_POST_TWO_HAND = "UPTADE_POST_TWO_HAND"



export const uploadPost = (uri,tips,descrizione) => {
  console.log("PRemuto")
return { type: UPLOAD_PHOTO_GRID, uri:uri,descrizione:descrizione ,userId:"user10",tips};
  
  };
export const uploadTwoHand = (uri,tips,descrizione,prezzo,taglia,marca,condizione) => {
    return { type: UPLOAD_PHOTO_TWO_HAND, uri:uri,descrizione:descrizione ,userId:"user10",condizione:condizione,prezzo:prezzo,taglia:taglia,tips:tips,marca:marca};
  };
  export const deletePost = (idPost) => {
    return { type: DELETE_POST, idPOst:idPost};
  };
  export const uptadePost = (tips,descrizione,idPost) => {
    console.log("PRemuto")
  return { type: UPTADE_POST,descrizione:descrizione ,id:idPost,tips:tips};
    
    };
    export const uptadeTwoHand = (tips,descrizione,idPost,prezzo,taglia,marca,condizione) => {
      return { type: UPTADE_POST_TWO_HAND,descrizione:descrizione ,id:idPost,condizione:condizione,prezzo:prezzo,taglia:taglia,tips:tips,marca:marca};
    };
  