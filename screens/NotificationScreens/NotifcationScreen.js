import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { Image, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const NotificationScreen = props =>{
    const notifica =[{
      name:"Elisa",
      url:"https://images.pexels.com/photos/5870335/pexels-photo-5870335.jpeg?cs=srgb&dl=pexels-jasmin-chew-5870335.jpg&fm=jpg",
      tipo:"Ha messo mi piace al tuo post"
      ,
      data:"5min fa"
    },
    {
      name:"Elisa",
      url:"https://images.pexels.com/photos/5870335/pexels-photo-5870335.jpeg?cs=srgb&dl=pexels-jasmin-chew-5870335.jpg&fm=jpg",
      tipo:"Ha messo mi piace al tuo post"
      ,
      data:"5min fa"

    }
  ,{
    name:"Elisa",
    url:"https://images.pexels.com/photos/5870335/pexels-photo-5870335.jpeg?cs=srgb&dl=pexels-jasmin-chew-5870335.jpg&fm=jpg",
    tipo:"Ha messo mi piace al tuo post"
    ,
    data:"5min fa"
  }
,
{
  name:"Elisa",
  url:"https://images.pexels.com/photos/5870335/pexels-photo-5870335.jpeg?cs=srgb&dl=pexels-jasmin-chew-5870335.jpg&fm=jpg",
  tipo:"Ha messo mi piace al tuo post"
  ,
  data:"5min fa"
}
,{
  name:"Elisa",
  url:"https://images.pexels.com/photos/5870335/pexels-photo-5870335.jpeg?cs=srgb&dl=pexels-jasmin-chew-5870335.jpg&fm=jpg",
  tipo:"Ha messo mi piace al tuo post"
  ,
  data:"5min fa"
}]
    return (
      <View style={{ 
        flex: 1,
        backgroundColor: 'white',
     marginTop:50
      }}><View style={{ 
      
        backgroundColor: 'white',
        justifyContent:"center",
        alignItems:"center",
        borderBottomColor:"grey",
        borderBottomWidth:0.5,
        paddingBottom:20
      }}>
       <Image source={require('../../assets/logo.png')} style={{height:25,width:65}}/>
        </View>
       <FlatList
       data={notifica}
        renderItem={
    ({item})=>{
      return (
      <View style={{flexDirection:"row",margin:10}}> 

        <Image source={{uri:item.url}} style={{height:60,width:60, borderRadius:30}}/>
      
      <View
      style={{margin:10}}
      ><Text>{item.name}</Text>
      <Text>{item.tipo}</Text>
      </View>
      <View
      style={{margin:10}}
      >
      <Text>{item.data}</Text>
      </View>
      </View>);
    }
        }
       />
      </View>
    );
  
}
NotificationScreen.navigationOptions = navData => {
  return {
  

    headerTitle:()=>{
      return(<Image source={require('../../assets/logo.png')} style={{height:25,width:65}}/>)
    },
   
    
      
  };
};
export default NotificationScreen;