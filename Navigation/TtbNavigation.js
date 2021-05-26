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
import Svg, { SvgProps, G, Path } from "react-native-svg"

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
     
      
    }},Carrello :{screen: CartScreen, navigationOptions:{
      title:"Cart",
    
     
      
    }},
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
              <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={27.618}
              height={26.5}
              viewBox="0 0 27.618 26.5"
            >
              <G
                fill="none"
                stroke={tintColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
              >
                <Path d="M26.56 11.68L13.808.75 1.058 11.68" />
                <Path d="M23.808 9.43v16.32h-20V9.43" />
                <Path d="M10.476 25.75v-6.668a3.334 3.334 0 016.667 0v6.668M18.808 2.416h3.334v5.477" />
              </G>
            </Svg>            );
          },
          tabBarLabel:() => {return null},
          
    },
  
    
  
  
  },
  Search : {
    screen : SearchNavigator,
    navigationOptions:{
        
      tabBarIcon: ({ tintColor }) => {
          return (
            <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={26.509}
            height={26.608}
            viewBox="0 0 26.509 26.608"
          >
            <G
              data-name="Raggruppa 201"
              fill="none"
              stroke={tintColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            >
              <Path
                data-name="Tracciato 185"
                d="M14.154 3.051a7.851 7.851 0 11-11.1 0 7.853 7.853 0 0111.1 0z"
              />
              <Path
                data-name="Tracciato 186"
                d="M12.948 15.166l1.937 1.938 8.154 8.153a1.57 1.57 0 002.22-2.221l-9.967-9.967"
              />
            </G>
          </Svg>          );
        },
        tabBarLabel:() => {return null},

  },
},
Add :{
  screen : AddNavigation,
  navigationOptions:{
    tabBarIcon: ({ tintColor }) => {
      return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={26.5}
        height={26.5}
        viewBox="0 0 26.5 26.5"
      >
        <G
          data-name="Raggruppa 199"
          fill="none"
          stroke={tintColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <Path data-name="Tracciato 180" d="M13.248.75v25" />
          <Path data-name="Linea 91" d="M25.75 13.25h-25" />
        </G>
      </Svg>
        );
    },
    tabBarLabel:() => {return null},
    tabBarVisible:false
    
},
},Notifche : {screen:NotificationScreen,  navigationOptions:{
  tabBarIcon: ({ tintColor }) => {
    return (

      <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30.072}
      height={26.5}
      viewBox="0 0 30.072 26.5"
    >
      <Path
        data-name="Tracciato 160"
        d="M23.964 17.883c2.888-3.143 5.358-6.774 5.358-9.99 0-4.764-3.2-7.143-7.143-7.143-.127 0-.255 0-.381.01a7.872 7.872 0 00-4.119 1.409 9.387 9.387 0 00-2.642 2.746 9.255 9.255 0 00-2.1-2.342A8 8 0 008.272.76a6.844 6.844 0 00-.381-.01C3.946.75.747 3.129.747 7.893c0 7.736 14.287 17.857 14.287 17.857s.867-.614 2.171-1.654a61.33 61.33 0 006.756-6.213"
        fill="none"
        stroke={tintColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>      );

  }, tabBarLabel:() => {return null},
  headerTitleAlign:"center",
  headerBackTitle:""
 
  
},},
Profile:{screen:ProfileNavigation,
  navigationOptions:{
    tabBarIcon: ({ tintColor }) => {
      return (
<Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23.411}
      height={26.499}
      viewBox="0 0 23.411 26.499"
         color={tintColor}
      style={"fill:"+tintColor}
  
    >
      <Path
        data-name="Tracciato 152"
        d="M21.466 16.232a10.984 10.984 0 00-6.473-5.472 5.546 5.546 0 10-6.576 0A10.946 10.946 0 00.75 21.211c0 6.051 21.911 6.051 21.911 0a10.92 10.92 0 00-1.195-4.979z"
        fill={"none"}
        stroke={tintColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>      
    );
    },
    tabBarLabel:() => {
      return null},
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