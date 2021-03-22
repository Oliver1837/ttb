export const UPLOAD_PHOTO_GRID ="UPLOAD_PHOTO_GRID"
export const UPLOAD_PHOTO_TWO_HAND ="UPLOAD_PHOTO_TWO_HAND"



export const uploadPost = (uri,tips,descrizione) => {
  console.log("PRemuto")
return { type: UPLOAD_PHOTO_GRID, uri:uri,descrizione:descrizione ,userId:"user10",tips};
  
  };
export const uploadTwoHand = (uri,tips,descrizione,prezzo,taglia,marca,condizione) => {
    return { type: UPLOAD_PHOTO_TWO_HAND, uri:uri,descrizione:descrizione ,userId:"user10",condizione:condizione,prezzo:prezzo,taglia:taglia,tips:tips,marca:marca};
  };


  