import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,LogBox} from 'react-native';
import Tiptobe from './Navigation/TtbNavigation'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import userReducer from './store/reducers/User';
import cartReducer from './store/reducers/Cart';
import commentReducer from './store/reducers/Comment';
import postReducer from './store/reducers/UploadPost'
import { Provider } from 'react-redux';
import * as Permissions from 'expo-permissions';
import {
  useFonts,
 Manrope_200ExtraLight,
 Manrope_300Light,
 Mandali_400Regular,
 Manrope_400Regular,
 Manrope_500Medium,
 Manrope_600SemiBold,
 Manrope_700Bold

} from "@expo-google-fonts/dev";
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
const rootReducer = combineReducers({
  user : userReducer,
  cart : cartReducer,
  post : postReducer,
  comment: commentReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

async function checkMultiPermissions() {
  const { status, expires, permissions } = await Permissions.getAsync(
    Permissions.CAMERA_ROLL
    
  );
  if (status !== 'granted') {
    console.log('Hey! You have not enabled selected permissions');
  }
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
 Manrope_300Light,
 Mandali_400Regular,
 Manrope_400Regular,
 Manrope_500Medium,
 Manrope_600SemiBold,
 Manrope_700Bold
  });
 
  const [permission, askPermission, getPermission] = Permissions.usePermissions(Permissions.MEDIA_LIBRARY,{ask:true});
  askPermission()
    checkMultiPermissions();
  return (
    <Provider store={store}>

    <Tiptobe/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
