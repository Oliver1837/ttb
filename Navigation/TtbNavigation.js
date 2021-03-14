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
import { Text, TouchableOpacity, View } from 'react-native';
import CommentScreen from '../screens/CommentScreen'
import MacroTipsScreen from '../screens/SearchScreens/MacroTips';

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
      
      headerTransparent:true,
     
      title:"TipToBe",
      headerTintColor:"#FFF",
      headerTitleAlign:"center"
  
    }},Carrello : CartScreen,
    Profile:{screen:ProfileScreen,
      navigationOptions:{
        
        title:"TipToBe",
        headerTitleAlign:"center",
        headerBackTitle:""
       // header:null
    
      }},
    Post : { screen:PostScreen,
        navigationOptions:{
          
          headerTransparent:true,
          title:"TipToBe",
          headerTitleAlign:"center",
          headerBackTitle:""
         // header:null
      
        }},
      Comment : {screen:CommentScreen}
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
  
    }},
    Profile:ProfileScreen,
    PostProfile:{ screen:PostProfileScreen,
        navigationOptions:{
          
          headerTransparent:true,
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
    ,
   
  
  },
    Carrello : CartScreen,
    Salvati:{screen:MyProfilePostScreen,
      navigationOptions:{
        headerTransparent:true,
        headerTintColor:"#fff"
      }},
    PostMyProfile:{screen:MyProfilePostScreen,  navigationOptions:{
      headerTransparent:true,
      headerTintColor:"#fff"
    }} 
  });
  const TipToBeNavigator = createBottomTabNavigator({

    
    Feed : {screen : FeedNavigator,
      navigationOptions:{
        
        tabBarIcon: () => {
            return (
              <Ionicons name={Platform.OS ==="android" ? "md-home" :"ios-home"} size={25} color="black" />
            );
          }
  
    },
  
    
  
  
  },
  Search : {
    screen : SearchNavigator,
    navigationOptions:{
        
      tabBarIcon: () => {
          return (
            <Ionicons name={Platform.OS ==="android" ? "md-search-sharp" :"ios-search-sharp"} size={25} color="black" />
          );
        }

  },
},
Add :{
  screen : AddNavigation,
  navigationOptions:{
    tabBarIcon: () => {
      return (
        <Ionicons name={Platform.OS ==="android" ? "md-add" :"md-add"} size={25} color="black" />
      );
    },
    tabBarVisible:false
    
},
},Notifche : {screen:NotificationScreen,  navigationOptions:{
  tabBarIcon: () => {
    return (
    <Notifica/>
    );
  },
 
  
},},
Profile:{screen:ProfileNavigation,
  navigationOptions:{
    tabBarIcon: () => {
      return (
        <Ionicons name="md-person-circle-sharp" size={24} color="black" />
      );
    },
    
},
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