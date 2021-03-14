import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,

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

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color="black" />
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
