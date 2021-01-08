import Grid from "../model/Grid";
import Post from "../model/Post";
import Tag from "../model/Tag";
import User from "../model/User";
import GridPost from "../model/GridPost";
import TwoHand from "../model/TwoHand";



export const POSTS = [

    new Post('post5', "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",1,0,"user1",["Dress","Sunglasses"],"Contenuto Post 1",false,true),
    new Post('post6', "https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",1,0,"user1",["Shirt","Sunglasses"],"Contenuto Post 1",false,true),
    new Post('post7', "https://images.pexels.com/photos/4580470/pexels-photo-4580470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",1,0,"user2",["Shirt",],"Contenuto Post 1",false,true),
    new Post('post8', "https://images.pexels.com/photos/3519656/pexels-photo-3519656.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",2,0,"user4",["Shirt",],"Contenuto Post 1",false,true),
    new Post('post9', "https://images.pexels.com/photos/3103888/pexels-photo-3103888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",2,0,"user5",["Watch","Fashion"],"Contenuto Post 1",false,false),
    new Post('post10',"https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",2,0,"user6",["Watch","Dress"],"Contenuto Post 1",false,true),
    new Post('post11',"http://dummyimage.com/145x211.bmp/ff4444/ffffff",2,0,"user1",["Watch","Dress"],"Contenuto Post 1",false,true),
    new Post('post12',"http://dummyimage.com/195x215.jpg/cc0000/ffffff",2,0,"user1",["Watch","Dress"],"Contenuto Post 1",false,true),
    new Post('post1', 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',0,0,"user1",["Fashion","Dress"],"Contenuto Post 1",false,true),
    new Post('post2', 'https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',0,0,"user1",["Fashion","Sunglasses"],"Contenuto Post 1",false,true),
    new Post('post3', "https://images.pexels.com/photos/789812/pexels-photo-789812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",0,0,"user1",["Fashion","Sunglasses"],"Contenuto Post 1",true,false),
    new Post('post4', "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",1,0,"user1",["Dress","Sunglasses"],"Contenuto Post 1",true,true),
   

];

export const TAGS = [
    new Tag("Fashion","https://firebasestorage.googleapis.com/v0/b/rn-complete-guide-a04a4.appspot.com/o/fashion.png?alt=media&token=60915240-3d5a-45d0-9fb8-1316f8eb9220"),
    new Tag("Dress","https://firebasestorage.googleapis.com/v0/b/rn-complete-guide-a04a4.appspot.com/o/dress.png?alt=media&token=6f7452e5-3704-4150-b727-26bda2b842de"),
    new Tag("Shirt","https://firebasestorage.googleapis.com/v0/b/rn-complete-guide-a04a4.appspot.com/o/shirt.png?alt=media&token=75241608-d7ec-46f9-9bb5-213374153a32"),
    new Tag("Sunglasses","https://firebasestorage.googleapis.com/v0/b/rn-complete-guide-a04a4.appspot.com/o/sunglasses.png?alt=media&token=10474441-9fbe-43da-91f0-3ccef185d32b"),
    new Tag("Watch","https://firebasestorage.googleapis.com/v0/b/rn-complete-guide-a04a4.appspot.com/o/watch.png?alt=media&token=738c1192-a4e9-449d-97dc-9cfd7cdd633a"),
  
];
export const USERS = [
    new User("user1","Prova1","https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",0,0,0),
    new User("user2","Prova2",'https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',0,0,0),
    new User("user3","Prova3","https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",0,0,0),
    new User("user4","Prova4","https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",0,0,0),
    new User("user6","Prova5","https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",0,0,0),
    new User("user5","Prova6","https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",0,0,0),
    new User("user7","Prova7","https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",0,0,0),
  
];
export const GRIDS = [
    new Grid ("grid1",2,"user1"),
 //   new Grid ("grid2",0,"user2"),
]

export const GRIDPOSTS = [
    new GridPost("post3","grid1",0),
    new GridPost("post4","grid1",2),
]
export const TWOHAND =[

    new TwoHand("thowhand1","post1",30,"user1"),
    new TwoHand("thowhand2","post2",18,"user1"),
    new TwoHand("thowhand3","post4",30,"user1"),
    new TwoHand("thowhand4","post5",18,"user1"),
    new TwoHand("thowhand5","post11",30,"user1"),
    new TwoHand("thowhand6","post12",18,"user1"),
    new TwoHand("thowhand7","post7",18,"user2"),
];
export const USEREXAMPLE = new User("user10","MyProfile","https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500er",0,0,0);
