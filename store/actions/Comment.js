export const ADD_COMMENT = 'COMMENT'
export const addComment =(idPost,content,idUser)=>{

    return{type : ADD_COMMENT ,postId : idPost ,content:content , user:idUser}

}