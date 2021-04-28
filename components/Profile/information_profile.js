import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
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
function information_profile({user,lenght}) {
  let [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
 Manrope_300Light,
 Mandali_400Regular,
 Manrope_400Regular,
 Manrope_500Medium,
 Manrope_600SemiBold,
 Manrope_700Bold
  });
    return (
        <View style={{
            flexDirection:"row",
            marginTop:4.9
     }}>
          
         <View style={{marginRight:20}}>
           <Text style={{ width:25,
           height:19, fontSize:14,fontFamily:"Manrope_500Medium"}}>Tips</Text>
           
           <Text style={styles.textData}>{lenght}</Text>

         </View>
         
         <View  style={{marginRight:20}}>
           <Text style={{ width:62,
           height:19, fontSize:14,fontFamily:"Manrope_500Medium"}}>Following</Text>
           <Text style={styles.textData}>{user.nFollowing}</Text>

         </View>
         
         <View   style={{marginRight:20}}>
           <Text style={{ width:56,
           height:19, fontSize:14,fontFamily:"Manrope_500Medium"}}>Follower</Text>
           <Text style={styles.textData}>{user.nFollower}</Text>

         </View>
     </View>
    );
}

export default information_profile;
const styles = StyleSheet.create({
    textData:{
      width:26,
      height:21,
      fontSize:16,
    fontFamily:"Manrope_700Bold"    },
    text:{
    

      

  },

})