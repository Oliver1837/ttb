import Grid from "../model/Grid";
import Post from "../model/Post";
import Tag from "../model/Tag";
import User from "../model/User";
import GridPost from "../model/GridPost";
import TwoHand from "../model/TwoHand";
import Comment from "../model/Comments"
import DizionarioMacro from "../model/DizionarioMacro";



export const POSTS = [

    new Post('post8', "https://images.pexels.com/photos/3519656/pexels-photo-3519656.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",2,0,"user4",["Shirt",],"Contenuto Post 1",false,true),
    new Post('post10',"https://images.pexels.com/photos/2689401/pexels-photo-2689401.jpeg?cs=srgb&dl=pexels-dazzle-jam-2689401.jpg&fm=jpg",2,0,"user6",["Watch","Dress"],"Contenuto Post 1",false,true),
    new Post('post1', 'https://images.pexels.com/photos/6731908/pexels-photo-6731908.jpeg?cs=srgb&dl=pexels-thirdman-6731908.jpg&fm=jpg',0,0,"user5",["Arte","Pennelli","Pittura"],"Contenuto TwoHand 1",false,true),
    new Post('post2', 'https://images.pexels.com/photos/4490130/pexels-photo-4490130.jpeg?cs=srgb&dl=pexels-dominika-roseclay-4490130.jpg&fm=jpg',0,0,"user5",["Arte","Quadro"],"Contenuto user TwoHand 2",false,true),
    new Post('post13', "https://images.pexels.com/photos/2825749/pexels-photo-2825749.jpeg?cs=srgb&dl=pexels-valeriia-miller-2825749.jpg&fm=jpg",0,0,"user5",["Arte","Fiori","Primavera"],"Contenuto user5 Post 1",true,false),
    new Post('post14', "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?cs=srgb&dl=pexels-valeriia-miller-3685523.jpg&fm=jpg",1,0,"user5",["Bellezza","Fashion","Fiori"],"Contenuto user5 Post 2",true,false),
    new Post('post15', "https://images.pexels.com/photos/5591722/pexels-photo-5591722.jpeg?cs=srgb&dl=pexels-daniela-constantini-5591722.jpg&fm=jpg",0,0,"user5",["Fotografia","Vintage","Libri"],"Contenuto user 5  Post 3",true,false),
    new Post('post16', "https://images.pexels.com/photos/4068151/pexels-photo-4068151.jpeg?cs=srgb&dl=pexels-lisa-fotios-4068151.jpg&fm=jpg",1,0,"user5",["Fiori","Primavera","Piante"],"Contenuto user 5 Post 4",true,false),
    new Post('post17', "https://images.pexels.com/photos/6732542/pexels-photo-6732542.jpeg?cs=srgb&dl=pexels-thirdman-6732542.jpg&fm=jpg",1,0,"user5",["Arte","Pittura","Fiori"],"Contenuto user5 Post 5",true,false),
    new Post('post18', "https://images.pexels.com/photos/3817570/pexels-photo-3817570.jpeg?cs=srgb&dl=pexels-rfstudio-3817570.jpg&fm=jpg",1,0,"user5",["Arte","Pittura"],"Contenuto user5 Post 6",true,false),
    /** utente 2  post */
    new Post('post19', 'https://images.pexels.com/photos/3876324/pexels-photo-3876324.jpeg?cs=srgb&dl=pexels-tomas-anunziata-3876324.jpg&fm=jpg',0,0,"user2",["Sport",],"Contenuto Post 1",true,false),
    new Post('post20', 'https://images.pexels.com/photos/9752/taking-photo-hiking-sport-adventure.jpg?cs=srgb&dl=pexels-creative-vix-9752.jpg&fm=jpg',0,0,"user2",["Sport",],"Contenuto Post 1",true,false),
    new Post('post21', 'https://images.pexels.com/photos/4146246/pexels-photo-4146246.jpeg?cs=srgb&dl=pexels-gantas-vai%C4%8Diul%C4%97nas-4146246.jpg&fm=jpg',0,0,"user2",["Sport"],"Contenuto Post 1",true,false),
    new Post('post22', 'https://images.pexels.com/photos/6149484/pexels-photo-6149484.jpeg?cs=srgb&dl=pexels-daniel-torobekov-6149484.jpg&fm=jpg',0,0,"user2",["Sport"],"Contenuto Post 1",true,false),
    new Post('post23', 'https://images.pexels.com/photos/5262741/pexels-photo-5262741.jpeg?cs=srgb&dl=pexels-anna-shvets-5262741.jpg&fm=jpg',0,0,"user2",["Sport"],"Contenuto Post 1",true,false),
    new Post('post24', 'https://images.pexels.com/photos/5262942/pexels-photo-5262942.jpeg?cs=srgb&dl=pexels-anna-shvets-5262942.jpg&fm=jpg',0,0,"user2",["Sport"],"Contenuto Post 1",true,false),
    /** utente 2  2hand */
    new Post('post7', "https://images.pexels.com/photos/4498605/pexels-photo-4498605.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4498605.jpg&fm=jpg",1,0,"user2",["Sport",],"Contenuto Post 1",false,true),
    new Post('post25', "https://images.pexels.com/photos/4397838/pexels-photo-4397838.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4397838.jpg&fm=jpg",1,0,"user2",["Sport",],"Contenuto Post 1",false,true),
    /**utente 3 post */
    new Post('post27', 'https://images.pexels.com/photos/4947567/pexels-photo-4947567.jpeg?cs=srgb&dl=pexels-maria-orlova-4947567.jpg&fm=jpg',0,0,"user1",["Fotografia",],"Contenuto Post 1",true,false),
    new Post('post28', 'https://images.pexels.com/photos/4846574/pexels-photo-4846574.jpeg?cs=srgb&dl=pexels-rachel-claire-4846574.jpg&fm=jpg',0,0,"user1",["Fotografia"],"Contenuto Post 1",true,false),
    new Post('post29', 'https://images.pexels.com/photos/4450393/pexels-photo-4450393.jpeg?cs=srgb&dl=pexels-nataliya-vaitkevich-4450393.jpg&fm=jpg',0,0,"user1",["Fotografia"],"Contenuto Post 1",true,false),
    new Post('post30', 'https://images.pexels.com/photos/2110858/pexels-photo-2110858.jpeg?cs=srgb&dl=pexels-juliana-stein-2110858.jpg&fm=jpg',0,0,"user1",["Fotografia"],"Contenuto Post 1",true,false),
    new Post('post31', 'https://images.pexels.com/photos/3082256/pexels-photo-3082256.jpeg?cs=srgb&dl=pexels-alexandro-david-3082256.jpg&fm=jpg',0,0,"user1",["Fotografia"],"Contenuto Post 1",true,false),
    new Post('post32', 'https://images.pexels.com/photos/1544880/pexels-photo-1544880.jpeg?cs=srgb&dl=pexels-sunyu-kim-1544880.jpg&fm=jpg',0,0,"user1",["Fotografia"],"Contenuto Post 1",true,false),
    /**utente 3 2hand */
    new Post('post33', 'https://images.pexels.com/photos/1366927/pexels-photo-1366927.jpeg?cs=srgb&dl=pexels-rodolfo-clix-1366927.jpg&fm=jpg',0,0,"user1",["Fotografia"],"Contenuto Post 1",false,true),
    /**utente 4 post */
    new Post('post34', 'https://images.pexels.com/photos/5728327/pexels-photo-5728327.jpeg?cs=srgb&dl=pexels-any-lane-5728327.jpg&fm=jpg',0,0,"user3",["Cucina",],"Contenuto Post 1",true,false),
    new Post('post35', 'https://images.pexels.com/photos/1271940/pexels-photo-1271940.jpeg?cs=srgb&dl=pexels-lisa-fotios-1271940.jpg&fm=jpg',0,0,"user3",["Cucina"],"Contenuto Post 1",true,false),
    new Post('post36', 'https://images.pexels.com/photos/5941/food-healthy-plant-fruits.jpg?cs=srgb&dl=pexels-kaboompics-com-5941.jpg&fm=jpg',0,0,"user3",["Cucina"],"Contenuto Post 1",true,false),
    new Post('post37', 'https://images.pexels.com/photos/533389/pexels-photo-533389.jpeg?cs=srgb&dl=pexels-pixabay-533389.jpg&fm=jpg',0,0,"user3",["Cucina"],"Contenuto Post 1",true,false),
    new Post('post38', 'https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?cs=srgb&dl=pexels-pixabay-277253.jpg&fm=jpg',0,0,"user3",["Cucina"],"Contenuto Post 1",true,false),
    new Post('post39', 'https://images.pexels.com/photos/3780469/pexels-photo-3780469.jpeg?cs=srgb&dl=pexels-lucas-guizo-3780469.jpg&fm=jpg',0,0,"user3",["Cucina"],"Contenuto Post 1",true,false),
    new Post('post40', 'https://images.pexels.com/photos/4262417/pexels-photo-4262417.jpeg?cs=srgb&dl=pexels-august-de-richelieu-4262417.jpg&fm=jpg',0,0,"user3",["Cucina"],"Contenuto Post 1",true,false),
    /**utente 4 2hand */
    new Post('post41', 'https://images.pexels.com/photos/952478/pexels-photo-952478.jpeg?cs=srgb&dl=pexels-lukas-952478.jpg&fm=jpg',0,0,"user3",["Cucina"],"Contenuto Post 1",false,true),
    new Post('post42', 'https://images.pexels.com/photos/6708895/pexels-photo-6708895.jpeg?cs=srgb&dl=pexels-rodnae-productions-6708895.jpg&fm=jpg',0,0,"user3",["Cucina"],"Contenuto Post 1",false,true),
    new Post('post43', 'https://images.pexels.com/photos/42257/flowerful-flowery-flowerly-42257.jpeg?cs=srgb&dl=pexels-jill-wellington-42257.jpg&fm=jpg',0,0,"user3",["Cucina"],"Contenuto Post 1",false,true),
    new Post('post43', 'https://images.pexels.com/photos/3730953/pexels-photo-3730953.jpeg?cs=srgb&dl=pexels-ksenia-chernaya-3730953.jpg&fm=jpg',0,0,"user3",["Cucina"],"Contenuto Post 1",false,true),

];

export const TAGS = [
    new Tag("Arte","https://images.pexels.com/photos/6731908/pexels-photo-6731908.jpeg?cs=srgb&dl=pexels-thirdman-6731908.jpg&fm=jpg"),
    new Tag("Sport","https://images.pexels.com/photos/3876324/pexels-photo-3876324.jpeg?cs=srgb&dl=pexels-tomas-anunziata-3876324.jpg&fm=jpg"),
    new Tag("Fotografia","https://images.pexels.com/photos/4947567/pexels-photo-4947567.jpeg?cs=srgb&dl=pexels-maria-orlova-4947567.jpg&fm=jpg"),
    new Tag("Cucina","https://images.pexels.com/photos/5728327/pexels-photo-5728327.jpeg?cs=srgb&dl=pexels-any-lane-5728327.jpg&fm=jpg"),
  
];
export const USERS = [
    new User("user1","Elisa","https://images.pexels.com/photos/5870335/pexels-photo-5870335.jpeg?cs=srgb&dl=pexels-jasmin-chew-5870335.jpg&fm=jpg",0,0,0),
    new User("user2","Anna",'https://images.pexels.com/photos/5262903/pexels-photo-5262903.jpeg?cs=srgb&dl=pexels-anna-shvets-5262903.jpg&fm=jpg',0,0,0),
    new User("user3","MasterChef","https://images.pexels.com/photos/3622643/pexels-photo-3622643.jpeg?cs=srgb&dl=pexels-rfstudio-3622643.jpg&fm=jpg",0,0,0),
    new User("user4","Prova4","https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",0,0,0),
    new User("user6","Prova5","https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",0,0,0),
    new User("user5","Katia","https://images.pexels.com/photos/2689401/pexels-photo-2689401.jpeg?cs=srgb&dl=pexels-dazzle-jam-2689401.jpg&fm=jpg",0,0,0),
    new User("user10","MyProfile","https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500er",0,0,0),
];
export const GRIDS = [
]

export const GRIDPOSTS = [
]
export const TWOHAND =[
    new TwoHand("thowhand1","post1",10,"user5"),
    new TwoHand("thowhand1","post2",20,"user5"),
    new TwoHand("thowhand2","post7",25,"user2"),
    new TwoHand("thowhand3","post25",10,"user2"),
    new TwoHand("thowhand4","post33",50,"user1"),
    new TwoHand("thowhand5","post41",20,"user3"),
    new TwoHand("thowhand6","post42",12,"user3"),
    new TwoHand("thowhand7","post43",15,"user3"),
];
export const USEREXAMPLE = new User("user10","MyProfile","https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500er",0,0,0);
export const COMMENT=[
    new Comment ("post13","comment1","user2","","Ujg31ctOU49tvL9zFqkX5LsCaTFYt1S3MJgzQ4E38uvvyXHpTG2ZFAAtMBWax5CT1tEm36BIk4AsyX9mjMGxEzxMWDP6KvcdMQ0u"),
    new Comment ("post13","comment2","user1","","eeALKAAIZ3TIkYgubpblRRMx3W4uoSKZtkiH4rk3wtRkSRVM3Q98RMx2R06UHhnmTZoXbbCZ1hOjt8tvPbM7HnYjkhw7MHPpzgfX"),
    new Comment ("post13","comment3","user3","","mzC9b4ukHtkxeZImY8YIklEY8SvVxaAwvejTVxWmN16K6ECCJHwI1xoOuzDSfwDnAcZqvSJDbKcb5Pd4oMZ9D64Q9Vkt0F407dEE"),
    new Comment ("post1","comment1","user2","","8vMSM9GwIaPTpcGBZbYnIeCcwHlhGxbFs4TvHmhHcAq1Vixx95HlW0haxt0BEW8foF1TR7ocdocPHPewwfPItIQOCSzbM8pbyVHm"),
    new Comment ("post3","comment1","user5","","5uuUe4BTAd9sCD0MfhCxlMVailbo2Gos7EZphUgLhjdvDEa2WRuDe4dSm6wrgIzaKiLloeUOoZqruknCnLAbooRWOEQKvrNOGT6H"),
    new Comment ("post2","comment1","user2","","8vMSM9GwIaPTpcGBZbYnIeCcwHlhGxbFs4TvHmhHcAq1Vixx95HlW0haxt0BEW8foF1TR7ocdocPHPewwfPItIQOCSzbM8pbyVHm "),
  
  
  ]
export const MACRO = ["2HAND","Viaggi","Cibo","Arte","Bellezza","Musica","Sport","Elettronica","Casa"]
export const Dizionario = [
    new DizionarioMacro("Viaggi",["Aereo","Viaggio","Albergo","Hotel"]),
    new DizionarioMacro("Cibo",["Cibo","Pasta","Sugo","Chef","Cucina"]),
    new DizionarioMacro("Arte",["Arte","Statua","Fiori","Primavera","Pittura","Vintage"]),
    new DizionarioMacro("Musica",["Rock","Jazz","Chitarra","Batteria"]),
    new DizionarioMacro("Sport",["Calcio","Corsa","Pesi","Fitness","Sport"])

]