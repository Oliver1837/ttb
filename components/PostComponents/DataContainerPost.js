import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const DataContainerPost = ({navigation,user,tags,descrizione})=>{

    return (
        <View style={styles.innerLeft}>
        <View style={styles.dataContainer}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate({
            routeName: 'Profile',
        
            params: {
                userId: user.idUser,

              }});
        }}>
        <Text style={styles.title}>@{user.username}</Text>
        </TouchableOpacity>
        <Text style={styles.description} numberOfLines={4}>
         {descrizione}
        </Text>
        <View style={{
          flexDirection:"row"
        }}>
        <View style={{
          color:"#fff",
          fontSize:16,
         
          flexDirection:"row"
        }}><Text style={styles.description} >TipTo</Text> 
        {tags.map( nt=> {return ( <TouchableOpacity onPress={
          ()=>{
            navigation.navigate({
              routeName: 'Tip',
          
              params: {
                  tag: nt, 
                  posts: posts
                }});
          }
        }><Text style={{
          color:"#fff",
fontSize:16,
fontFamily:"Manrope_500Medium"

        }}
        >#{nt}</Text></TouchableOpacity>
        )})}
        </View>
        
          </View>
              
      </View>
      </View>
    );
}
export default DataContainerPost;

const styles = StyleSheet.create({
   
    dataContainer: {
      height: '45%',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      padding: 5,
    },
    title: {
      
      color: '#fff',
      fontSize:16,
      height:21,
      minWidth:68,
      fontFamily:"Manrope_700Bold"
    },
    description: {
      color:"#fff",
      fontSize:14,
      fontFamily:"Manrope_500Medium"
      }, screen:{
        width:'100%',
        height:'92%'

    },
    innerLeft: {
        width: '80%',
        height: '100%',
      },
   
   
  });