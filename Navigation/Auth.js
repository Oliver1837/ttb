import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';


const AuthNavigation = createStackNavigator({//Home

    Auth : {
    screen:  LoginScreen,
    navigationOptions:{
        headerTitleAlign:"center",
        headerTransparent:true,
       
    headerTitle:"Benvenuto"
    },
},
   
});
export default createAppContainer(AuthNavigation);