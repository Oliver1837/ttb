import React from 'react'
import { Text, View } from 'react-native';

const WelcomePage = ()=>{
    return (
        <View style={{ 
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            height:height
          }}
          >
            <Text style={{
              fontWeight:'bold',
              fontSize:30
            }}>Benvenuto in TipTobe </Text>
            
          </View>
    );
}
export default WelcomePage;