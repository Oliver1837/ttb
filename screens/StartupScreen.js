import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Image

} from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as userAction from '../store/actions/User'


const StartupScreen = props => {

  const dispatch = useDispatch();
 // AsyncStorage.clear();
  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('UserData');
      if (!userData) {
        props.navigation.navigate('Auth');
        return;
      }
      const transformedData = JSON.parse(userData);
    //  const { token , username } = transformedData;
   //   dispatch(userAction.getUserDetails(transformedData.userid));

      props.navigation.navigate('TipToBeHome');
     // dispatch(authActions.authenticate( token, userName));
    };
setTimeout(()=>{
  tryLogin();
},6000)
   
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <Image source={require('../assets/logo.png')} style={{width:135}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StartupScreen;
