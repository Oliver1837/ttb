class Post{

    constructor(idPost,urlPost,nLike,nComment,userId,nameTag=[],descrizione,isGrid,isTwoHand){
        this.idPost= idPost;
        this.urlPost=urlPost;
        this.nLike= nLike;
        this.nComment = nComment;
        this.userId = userId;
        this.nameTag= nameTag;
        this.descrizione= descrizione;
        this.isGrid=isGrid;
        this.isTwoHand = isTwoHand
    }

}
export default Post;