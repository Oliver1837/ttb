export const UPLOAD_PHOTO_GRID ="UPLOAD_PHOTO_GRID"
export const UPLOAD_PHOTO_TWO_HAND ="UPLOAD_PHOTO_TWO_HAND"



export const uploadPost = (uri,tips,descrizione) => {
  console.log("PRemutp")
return { type: UPLOAD_PHOTO_GRID, uri:uri,descrizione:descrizione ,userId:"user10",tips:tips};
  
  };
export const uploadTwoHand = (uri,tips,descrizione,prezzo,taglia,marca) => {
    return { type: UPLOAD_PHOTO_GRID, uri:uri,posizione:posizione,descrizione:descrizione ,userId:"user10"};
  };


  