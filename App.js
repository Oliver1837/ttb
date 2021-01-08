import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Post from './components/Post';
import FeedScreen from './screens/HomeScreens/FeedScreen';
import Tiptobe from './Navigation/TtbNavigation'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import userReducer from './store/reducers/User';
import cartReducer from './store/reducers/Cart';

import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  user : userReducer,
  cart : cartReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
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
