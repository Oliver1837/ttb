import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FeedScreen from '../screens/HomeScreens/FeedScreen';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screens/HomeScreens/ProfileScreen';
import PostScreen from '../screens/HomeScreens/PostScreen';
import SearchScreen from '../screens/SearchScreens/SearchScreen';
import PostSearchScreen from '../screens/SearchScreens/PostScreen';
import ProfileSearchScreen from '../screens/SearchScreens/ProfileScreen';
import PostProfileScreen from '../screens/SearchScreens/PostProfileScreen';
import TipScreen from '../screens/SearchScreens/TipScreen';
import PhotoPickerScreen from '../screens/AddScreens/PhotoPickerScreen';
import LoadPostScreen from '../screens/AddScreens/LoadPostScreen';
import TipFeedScreen from '../screens/HomeScreens/TipScreen';

import UploadPost from '../screens/AddScreens/UploadPost';
import MyProfile from '../screens/ProfileScreens/MyProfile';
import CartScreen from '../screens/ProfileScreens/CartScreen';
import MyProfilePostScreen from '../screens/ProfileScreens/PostScreen';
import ProfilePostScreen from '../screens/ProfileScreens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreens/NotifcationScreen';
import AlbumScreen from '../screens/AddScreens/AlbumScreen';
import GridScreen from '../screens/AddScreens/GridSelect';
import SelectPositionScreen from '../screens/AddScreens/SelectPositionScreen';
import StartupScreen from '../screens/StartupScreen';
import AuthNavigator from '../Navigation/Auth'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import CommentScreen from '../screens/CommentScreen'
import MacroTipsScreen from '../screens/SearchScreens/MacroTips';
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/core';
import UptadeScreen from '../screens/UptadeScreen';
import {primary,secodary} from '../config/color'
class Notifica extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value : false,
      go:true
    }
  }
  
  componentDidMount(){
    
    this.state.go = setInterval(()=>  { 
      this.state.go=!this.state.go },5000)

   // this.state.value = setInterval(()=>   console.log("1") ,200)
  }

  render(){

 return ( 
  <View>
 <Ionicons name="md-heart-outline" size={24} color="black"  />
 </View>
 )
}

}









const FeedNavigator = createStackNavigator({
    Feed:{ screen:FeedScreen,
    navigationOptions:{
      title:"TipToBe",
      headerTransparent:true,
     
      headerTintColor:"#FFF",
      headerTitleAlign:"center"
     
      
    }},Carrello : CartScreen,
    Profile:{screen:ProfileScreen,
      navigationOptions:{
        
        title:null,
        headerTitleAlign:"center",
        headerBackTitle:""
       // header:null
    
      }},
    Post : { screen:PostScreen,
        navigationOptions:{
          headerTransparent:true,
          
          headerTitleAlign:"center",
          headerBackTitle:"",
          headerTintColor:"#FFF",
          title:null,
     
      
        }},
      Comment : {screen:CommentScreen},
      Tip : {screen:TipFeedScreen,    navigationOptions:{
          
        title:"TipToBe",
        headerTitleAlign:"center",
        headerBackTitle:""
    
      }},
  });
  const SearchNavigator = createStackNavigator({
    Search:{ screen:SearchScreen,
    navigationOptions:{
      
      headerTransparent:true,
      header:null
  
    }},
    Post : { screen:PostSearchScreen,
    navigationOptions:{
      
      headerTransparent:true,
      headerTintColor:"#fff",
      headerTitleAlign:"center",
      title:null
    }},
    Profile:ProfileScreen,
    PostProfile:{ screen:PostProfileScreen,
        navigationOptions:{
          
          headerTransparent:true,
          headerTitleAlign:"center",
         // header:null
      
        }},
      Tip : {screen:TipScreen,    navigationOptions:{
          
        title:"TipToBe",
        headerTitleAlign:"center",
        headerBackTitle:""
    
      }},
      MacroTips : {screen:MacroTipsScreen,    navigationOptions:{
          
        title:null,
        headerTitleAlign:"center",
        headerBackTitle:""
    
      }},
      Comment : {screen:CommentScreen}
      ,Carrello : CartScreen,
  
  });
  const AlbumNavigator = createStackNavigator({
  AlbumNav:{screen: AlbumScreen  
    ,
    navigationOptions:{
    header:null
  
    }
  
  }

    ,
    CheckPhotoAlbum :{screen: LoadPostScreen ,
      navigationOptions:{
      header:null
    
      }
  
  },
  UploadPost: {screen:UploadPost ,
    navigationOptions:{
    header:null
  
    }},
  Camera:{screen : PhotoPickerScreen,
    navigationOptions:{
      headerTransparent:true,
      headerTintColor:"#fff",
      title:null
    }
    },
 
  });
  const CameraNavigator = createStackNavigator({
  
    
    
    CheckPhoto :{screen: LoadPostScreen
  ,
  navigationOptions:{
  

  }
  },
  UploadPost: UploadPost,
  
  });
  const AddNavigation = createStackNavigator({
    Album:{screen:AlbumNavigator,
      navigationOptions:{
        headerTransparent:true,
        headerTintColor:"#fff",
        header:null
      },
      },
  
    
  })
  const ProfileNavigation = createStackNavigator({
    Profile:{screen: MyProfile
    ,    navigationOptions:{
          
      title:null,
      headerTitleAlign:"center",
      headerBackTitle:""
  
    }
   
  
  },
    Carrello : CartScreen,
    Salvati:{screen:MyProfilePostScreen,
      navigationOptions:{
        headerTransparent:true,
        headerTintColor:"#fff"
      }},
    PostMyProfile:{screen:MyProfilePostScreen,  navigationOptions:{
      headerTransparent:true,
      headerTintColor:"#fff",
       title:null,
    }},
    Update:{
      screen:UptadeScreen,
      navigationOptions:{
        headerTransparent:true,
        headerTintColor:"#fff"
      }
    }
  });
  const TipToBeNavigator = createBottomTabNavigator({
    
    Feed : {screen : FeedNavigator,
      navigationOptions:{
        
        tabBarIcon: ({ tintColor }) => {
            return (
            <Image source={require('../assets/icons/home.png')} style={{height:25,width:25,tintColor:tintColor}}/>
            );
          },
          tabBarLabel:() => {return null},
          
    },
  
    
  
  
  },
  Search : {
    screen : SearchNavigator,
    navigationOptions:{
        
      tabBarIcon: ({ tintColor }) => {
          return (
             <Image source={require('../assets/icons/search.png')} style={{width:25,height:25,tintColor:tintColor}}/>
          );
        },
        tabBarLabel:() => {return null},

  },
},
Add :{
  screen : AddNavigation,
  navigationOptions:{
    tabBarIcon: ({ tintColor }) => {
      return (
         <Image source={require('../assets/icons/add.png')} style={{width:25,height:25,tintColor:tintColor}}/>
      );
    },
    tabBarLabel:() => {return null},
    tabBarVisible:false
    
},
},Notifche : {screen:NotificationScreen,  navigationOptions:{
  tabBarIcon: ({ tintColor }) => {
    return (
       <Image source={require('../assets/icons/heart.png')} style={{width:28,height:25,tintColor:tintColor}}/>
    );

  }, tabBarLabel:() => {return null},
  headerTitleAlign:"center",
  headerBackTitle:""
 
  
},},
Profile:{screen:ProfileNavigation,
  navigationOptions:{
    tabBarIcon: ({ tintColor }) => {
      return (
         <Image source={require('../assets/icons/profile.png')} style={{width:27,height:30,tintColor:tintColor}}/>
      );
    },
    tabBarLabel:() => {return null},
},
}
  }, {
    tabBarOptions: {
      activeTintColor: primary,
      inactiveTintColor: "black"
    }
  }
  );
  const MainNavigator = createSwitchNavigator({
    Startup: StartupScreen,
    Auth: AuthNavigator,
    TipToBeHome: TipToBeNavigator
  });
  export default createAppContainer(MainNavigator);
  //<Ionicons name="md-person-circle-sharp" size={24} color="black" /> No