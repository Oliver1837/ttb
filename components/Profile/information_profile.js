import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

function information_profile({user,lenght}) {
    return (
        <View style={{
            flexDirection:"row"
     }}>
          
         <View>
           <Text style={styles.textData}>Tips</Text>
           <Text style={styles.textData}>{lenght}</Text>

         </View>
         
         <View>
           <Text style={styles.textData}>Following</Text>
           <Text style={styles.textData}>{user.nFollowing}</Text>

         </View>
         
         <View>
           <Text style={styles.textData}>Follower</Text>
           <Text style={styles.textData}>{user.nFollower}</Text>

         </View>
     </View>
    );
}

export default information_profile;
const styles = StyleSheet.create({
    textData:{
        fontWeight:"bold",
        fontSize:16,
        margin:4,
        textAlign:"center"
  
    },

})