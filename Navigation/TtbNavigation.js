import { createAppContainer } from 'react-navigation';
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
import Add from '../screens/ShareScreens/Add';
import DirectoryImage from '../screens/ShareScreens/DirectoryImage';
import ImagePickerExample from '../screens/AddScreens/ImagePickerExample';
import PhotoPickerScreen from '../screens/AddScreens/PhotoPickerScreen';
import LoadPostScreen from '../screens/AddScreens/LoadPostScreen';
import HeaderSearch from '../components/HeaderSearch';
import HeaderAdd from '../components/HeaderAdd';
import Header from '../components/Header';
import HeaderCart from '../components/HeaderCart';

import UploadPost from '../screens/AddScreens/UploadPost';
import MyProfile from '../screens/ProfileScreens/MyProfile';
import CartScreen from '../screens/ProfileScreens/CartScreen';
import MyProfilePostScreen from '../screens/ProfileScreens/PostScreen';
import ProfilePostScreen from '../screens/ProfileScreens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreens/NotifcationScreen';
import AlbumScreen from '../screens/AddScreens/AlbumScreen';
import GridScreen from '../screens/AddScreens/GridSelect';
import SelectPositionScreen from '../screens/AddScreens/SelectPositionScreen';

const FeedNavigator = createStackNavigator({
    Feed:{ screen:FeedScreen,
    navigationOptions:{
      
      headerTransparent:true,
     
      title:"TipToBe",
      headerTintColor:"#FFF",
      headerTitleAlign:"center"
  
    }},
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
      
        }}
  
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
    Profile:ProfileSearchScreen,
    PostProfile:{ screen:PostProfileScreen,
        navigationOptions:{
          
          headerTransparent:true,
         // header:null
      
        }},
      Tip : {screen:TipScreen,    navigationOptions:{
          
        title:"TipToBe",
        headerTitleAlign:"center",
        headerBackTitle:""
    
      }}
  
  });
  const AlbumNavigator = createStackNavigator({
  AlbumNav:{screen: AlbumScreen  
    ,
    navigationOptions:{
    header:null
  
    }
  
  }

    ,
    CheckPhotoAlbum :{screen: LoadPostScreen
  
  },
  UploadPost: UploadPost,
  SelGrid : GridScreen,
  Selezione: SelectPositionScreen,
  CheckPost : UploadPost
  });
  const CameraNavigator = createStackNavigator({
    Camera:{screen : PhotoPickerScreen,
    navigationOptions:{
      headerTransparent:true,
      headerTintColor:"#fff",
      title:null
    }
    },
    
    
    CheckPhoto :{screen: LoadPostScreen
  ,
  navigationOptions:{
  

  }
  },
  UploadPost: UploadPost
  });
  const AddNavigation = createStackNavigator({
    Album:{screen:AlbumNavigator,
      navigationOptions:{
        headerTransparent:true,
        headerTintColor:"#fff",
        header:null
      },
      },
    Camera :{screen: CameraNavigator,
      navigationOptions:{
        headerTransparent:true,
        headerTintColor:"#fff",
        header:null
      },
    }
    
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
    PostProfile:ProfilePostScreen 
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
      <Ionicons name="md-heart-outline" size={24} color="black" />
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
  export default createAppContainer(TipToBeNavigator);
  //<Ionicons name="md-person-circle-sharp" size={24} color="black" /> No