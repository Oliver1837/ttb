import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { View } from 'react-native';

const NotificationScreen = props =>{

    return (
      <View style={{ 
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text>Notification</Text>
      </View>
    );
  
}
export default NotificationScreen;