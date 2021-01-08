import React from 'react'
import {View , Text, StyleSheet,Image ,TouchableOpacity, Dimensions} from 'react-native'
import { GRIDPOSTS, POSTS } from '../data/dummy-data'
import Post from '../model/Post'

const DeviceWidth = Dimensions.get('window').width



const GridEnzo = (props)=>{


    const grid = props.grid
    const isSearch = props.isSearch;


    const gridPosts = GRIDPOSTS.filter(gp=> gp.idGrid===grid.idGrid);
    if(grid.tipo===0){
      var posts =  [];
      var j = 0;
      for(var i = 0 ; i < 6; i++){
        if(j ===gridPosts.length){
             j=0;
        }
        if(i === gridPosts[j].posizione ){

          posts[i] = POSTS.find(p => p.idPost===gridPosts[j].idPost);
          j++;
        }else{
          posts[i] =  new Post('', '',0,0,"0",[],"",false,true)

        }

      }
     console.log(  gridPosts[0].posizione )
        return ( <View style={{
          flex: 1,
         
        }}>
          <View style={{
        flexDirection: 'row',
       }}>
        <View>
          <Image 
          style={{width: (DeviceWidth/3)-2, height: DeviceWidth/2, margin:1, backgroundColor: 'powderblue'}} 
          source={{uri:posts[0].urlPost}}
          />
        </View>
        <View>
        <Image 
          style={{width: (DeviceWidth/3)-2, height: DeviceWidth/2, margin:1, backgroundColor: 'powderblue'}} 
          source={{uri:posts[1].urlPost}}
          />      
        </View>
        <View >
        <Image 
          style={{width: (DeviceWidth/3)-2, height: DeviceWidth/2, margin:1, backgroundColor: 'powderblue'}} 
          source={{uri:posts[2].urlPost}}
          />

        </View>
      
      </View>
      <View style={{
        flexDirection: 'row',
       }}>
        <View>

        <Image 
          style={{width: (DeviceWidth/3)-2, height: DeviceWidth/2, margin:1, backgroundColor: 'powderblue'}} 
          source={{uri:posts[3].urlPost}}
          />
        </View>
        <View>
        <Image 
          style={{width: (DeviceWidth/3)-2, height: DeviceWidth/2, margin:1, backgroundColor: 'powderblue'}} 
          source={{uri:posts[4].urlPost}}
          />      
          </View>
        <View style={{}}>
        <Image 
          style={{width: (DeviceWidth/3)-2, height: DeviceWidth/2, margin:1, backgroundColor: 'powderblue'}} 
          source={{uri:posts[5].urlPost}}
          />       
      </View>
      
      </View>
        </View>);

    }else if(grid.tipo===1){
      var posts =  [];
      var j = 0;
      for(var i = 0 ; i < 3; i++){
        if(j ===gridPosts.length){
             j=0;
        }
        if(i === gridPosts[j].posizione ){

          posts[i] = POSTS.find(p => p.idPost===gridPosts[j].idPost);
          j++;
        }else{
          posts[i] =  new Post('', '',0,0,"0",[],"",false,true)

        }

      }
        return (<View
            style={{
              
              flex:1,
              flexDirection:"row"
            ,  
            }} >
             
              <View
              
          
              >
              <Image
style={{width:(Dimensions.get('window').width/3-1), height:(Dimensions.get('window').height/4 ), backgroundColor: 'skyblue', margin:1,}}             
               resizeMode='cover'
               source={{uri:posts[0].urlPost}}
            />
                  
              <Image
style={{width:(Dimensions.get('window').width/3-1), height:(Dimensions.get('window').height/4 ), backgroundColor: 'skyblue', margin:1,}}             
               resizeMode='cover'
               source={{uri:posts[1].urlPost}}
            />




              


              </View>
              <View>
            
                      <Image
                  style={{
                    margin:1,
                    width:((Dimensions.get('window').width/3 )* 2)
                    ,height:(Dimensions.get('window').height/2  +2 ), backgroundColor: 'steelblue'}}
                    source={{uri:posts[2].urlPost}}
                resizeMode='cover'
            />
                      </View>



       </View>
        );
    }else if(grid.tipo===2){
      var posts =  [];
      var j = 0;
      for(var i = 0 ; i < 3; i++){
        if(j ===gridPosts.length){
             j=0;
        }
        if(i === gridPosts[j].posizione ){

          posts[i] = POSTS.find(p => p.idPost===gridPosts[j].idPost);
          j++;
        }else{
          posts[i] =  new Post('', '',0,0,"0",[],"",false,true)

        }

      }
      console.log(posts[0])
        return (<View
            style={{
              
              flex:1,
              flexDirection:"row"
            ,  
            }} >
             
              
             <TouchableOpacity 
               onPress={()=>{
                
                props.navigation.navigate({
                  routeName:  'Post' ,
                
                    params: {
                        post : posts[0],
                        isTwoHand : false
        
                      }});
             

         }}>
                <Image
                style={{
                  margin:1,
                  width:((Dimensions.get('window').width/3 )* 2) 
                  ,height:(Dimensions.get('window').height/2 + 1.5 ), backgroundColor: 'steelblue'}}
                  source={{uri:posts[0].urlPost}}
                  />
                      
                      
                      
                      
                      
                      </TouchableOpacity>
                      <View
                      
                
                      >
                          <TouchableOpacity 
               onPress={()=>{
                if(post[1].idPost===""){
                props.navigation.navigate({
                    routeName: isSearch ? 'PostProfile' : 'Post',
                
                    params: {
                        post : posts[1],
                        isTwoHand : false
        
                      }});
                    }
             

         }}>
              <Image 
              source={{uri:posts[1].urlPost}}
              style={{width:(Dimensions.get('window').width/3-1), height:(Dimensions.get('window').height/4 )  , backgroundColor: 'skyblue',margin:1,}} />
            </TouchableOpacity>
            <TouchableOpacity 
               onPress={()=>{
                
                props.navigation.navigate({
                    routeName: 'Post',
                
                    params: {
                        post : posts[2],
                        isTwoHand : false
        
                      }});
             

         }}>
              <Image 
              source={{uri:posts[2].urlPost}}
              style={{width:(Dimensions.get('window').width/3-1), height:(Dimensions.get('window').height/4 ), backgroundColor: 'steelblue',margin:1,}} />
                          </TouchableOpacity>



              </View>


       </View>
        );
    }


   




}
export default GridEnzo;
/*<View
              style={{
                
                flex:1,
                flexDirection:"row"
              ,  
              }}
                
                
                >
               
                <View>
                <View>
                <Image
               style={styles.imageThumbnail}
               source={{uri:itemData.item.url} }
               resizeMode='cover'
                />
                </View>
                <View>
                <Image
               style={styles.imageThumbnail}
               source={{uri:itemData.item.url} }
               resizeMode='cover'
                />
                  
                </View>
                


                </View>
                <View>
                  <Image
                  style={{
                    margin:0.4,
                    width:(Dimensions.get('window').width/1.4)
                    ,height:(Dimensions.get('window').height/2 ),



                  }}
                  source={{uri:itemData.item.url} }
                  resizeMode='cover'
                />

                  </View>



         </View>
      */
     //GRID 0
     /*
        return (
            <View
            style={{ margin:0.2,}}
                >
               <View  style={{
                flexDirection:"row"
              ,  
              }}>
                <View>
                <Image
               style={styles.imageThumbnail}
               source={{uri:itemData.item.url} }
               resizeMode='cover'
                />
                </View>
                <View>
                <Image
               style={styles.imageThumbnail}
               source={{uri:itemData.item.url} }
               resizeMode='cover'
                />
                </View>
                <View>
                <Image
               style={styles.imageThumbnail}
               source={{uri:itemData.item.url} }
               resizeMode='cover'
                />
                </View>
                </View>
                <View  style={{
                flexDirection:"row"
              ,  
              }}>
                <View>
                <Image
               style={styles.imageThumbnail}
               source={{uri:itemData.item.url} }
               resizeMode='cover'
                />
                </View>
                <View>
                <Image
               style={styles.imageThumbnail}
               source={{uri:itemData.item.url} }
               resizeMode='cover'
                />
                </View>
                <View>
                <Image
               style={styles.imageThumbnail}
               source={{uri:itemData.item.url} }
               resizeMode='cover'
                />
                </View>
                </View>
               
             



         </View>
       
       ); */ 


       /*
        <View
            style={{ margin:0.4,}}
                >
               <View  style={{
               
               
              }}>
                <Image
               style={{width:'100%',height:(Dimensions.get('window').height/2 )}}
               source={{uri:itemData.item.url} }
               resizeMode='cover'
                />
              
                </View>
               
             



         </View>
       
       
       */
      /*<View
          style={{
            
            flex:1,
            flexDirection:"row"
          ,  
          }}
            
            
            >
              <View>
              <Image
              style={{
                margin:0.4,
                width:(Dimensions.get('window').width/1.5)
                ,height:(Dimensions.get('window').height/2 ),



              }}
              source={{uri:itemData.item.url} }
              resizeMode='cover'
            />

              </View>
            <View>
            <View>
            <Image
           style={styles.imageThumbnail}
           source={{uri:itemData.item.url} }
           resizeMode='cover'
            />
            </View>
            <View>
            <Image
           style={styles.imageThumbnail}
           source={{uri:itemData.item.url} }
           resizeMode='cover'
            />
              
            </View>



            </View>




     </View> */

     /**
      * 
      * <View
          style={{
            flexDirection:"column"
          
          }}
                >
               <View  style={{
                flexDirection:"row"
              
              }}>
          <View style={{width:(Dimensions.get('window').width/3), height:(Dimensions.get('window').height/4),  }} >
            <Image
               style={{width:(Dimensions.get('window').width/3-1),height:'100%',  margin :0.5}}
               source={{uri: url[0].url }}
               resizeMode='cover'
            />
          </View>
          <View style={{width:(Dimensions.get('window').width/3), height:(Dimensions.get('window').height/4),  margin:0.1 }} >
          <Image
               style={{width:(Dimensions.get('window').width/3 ),height:'100%',  margin:0.5}}
               source={{uri: url[0].url }}
               resizeMode='cover'
            />
          </View>
          <View style={{width:(Dimensions.get('window').width/3 -1), height:(Dimensions.get('window').height/4),  margin:0.1 }} >
          <Image
               style={{width:(Dimensions.get('window').width/3-2),height:'100%',  margin :0.5}}
               source={{uri: url[0].url }}
               resizeMode='cover'
            />
          </View>


                </View>
                <View  style={{
                flexDirection:"row"
              ,  margin:0.2,

              }}>
                <View style={{width:(Dimensions.get('window').width/3), height:(Dimensions.get('window').height/4), margin:0.1}} >
           <Image
               style={{width:(Dimensions.get('window').width/3),height:'100%'}}
               source={{uri: url[3].url }}
               resizeMode='cover'
            />
          </View>
             <View style={{width:(Dimensions.get('window').width/3), height:(Dimensions.get('window').height/4),margin:0.1}} >
              <Image
               style={{width:(Dimensions.get('window').width/3),height:'100%'}}
               source={{uri: url[4].url }}
               resizeMode='cover'
              />
              </View>

              <View style={{width:(Dimensions.get('window').width/3), height:(Dimensions.get('window').height/4),margin:0.2}} >
              <Image
               style={{width:(Dimensions.get('window').width/3),height:'100%'}}
               source={{uri: url[5].url }}
               resizeMode='cover'
              />
              </View>
                </View>
        </View>
                        
      * 
      */