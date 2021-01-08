export const TOGGLE_LIKE = "TOGGLE_LIKE"
export const TOGGLE_PREFERRED ="TOGGLE_PREFERRED"
export const TOGGLE_FOLLOW ="TOGGLE_FOLLOW"
export const TOGGLE_TAG_PREFERRED ="TOGGLE_TAG_PREFERRED"
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