import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TimeUtils from '../Utils/TimeUtils';
const {width, height} = Dimensions.get('window');
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Comment = ({user,comment})=>{
    
    const [settings,setSettings] = useState(false);

    return (
        <Swipeable  renderRightActions={()=>{
            console.log("Right")
            }}>
        <TouchableOpacity 
        onLongPress={()=>{
        console.log("Prova")
          setSettings(!settings)
        }}
        activeOpacity={0.6}
        style={styles.comment}>
         <Image style={styles.image} source={{
            uri:user.urlPhoto

         }} />
         <View style={styles.showCommnet}>               
         <Text style={{width:"100%"}}>{ <Text style={{fontStyle:"italic",fontWeight:"bold"}}>{user.username+" "}</Text>}{comment.description}</Text>
        <View style={{
          
         
          flexDirection:"row",
          
        }}>
         <Text style={{
           color:"grey",
           margin:5
         }}>{TimeUtils.renderPeriod$3(new Date(comment.date),new Date(),"Now",1)}</Text>
          <Text style={{
           color:"grey",
           margin:5

         }}>Rispondi</Text>
         
         </View>
        </View>
        {settings?(
        <View style={{
          height:50,
          justifyContent:"center",
          flexDirection:"row",
          alignItems:"center", padding:5
        }}>
        <AntDesign name="delete" size={16} color="black" style={{margin:1}}/>
        
        <AntDesign name="exclamationcircleo" size={16} color="black"  style={{margin:1}} />
        </View>
        ):(
        <View style={{
          height:50,
          justifyContent:"center",
          flexDirection:"column",
          alignItems:"center", padding:5
        }}>
        <AntDesign name="hearto" size={16} color="black" />
        </View>
        )}

       
         </TouchableOpacity>
         
         </Swipeable>
        
         );
}

export default Comment;

const styles = StyleSheet.create({
    video: {
      height: height,
      width: width,
      backgroundColor: '#000',
    },
    header: {
      width: width,
      height: 40,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      flexDirection: 'row',
    },
    text: {
      color: '#fff',
      fontSize: 17,
      marginRight: 15,
    },
    mainContainer: {
      height: '55%',
      flexDirection: 'row',
      width: width,
      position: 'absolute',
      bottom: 0,
    },
    innerLeft: {
      width: '80%',
      height: '100%',
    },
    innerRight: {
      width: '20%',
      height: '100%',
      alignItems: 'center',
    },
    profile: {
      height: 50,
      width: 50,
      alignItems: 'center',
      marginBottom: 25,
    },
    btn: {
      backgroundColor: '#ff5b77',
      width: 20,
      height: 20,
      borderRadius: 10,
      elevation: 5,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: -10,
    },
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
      fontFamily:"Manrope_400Regular"
      }, screen:{
        width:'100%',
        height:'92%'

    }
    ,
    comment:{
        margin:0.6,
        flexDirection:'row'
        ,width:350,
        backgroundColor:'white',
       
    
        minHeight:60    ,
        borderBottomWidth:0.150 ,
        paddingTop:10
    }
    ,
    commentHeader:{
        flexDirection:'row'
        ,width:"100%",
        backgroundColor:'white'
        ,alignItems:'center',
        borderColor:"grey"
        ,borderBottomWidth:0.2,
    },
    image:{
        backgroundColor:'black',
        width:45,
        height:45
    ,   borderRadius:50 
    ,
    },
    contentComment:{
        backgroundColor:'#EFEFEF',
        width:200,
        minHeight: 50
        ,borderRadius:25
        ,margin:5,
        marginRight:10,
        padding:10
    }
    ,buttonPost:{
        
     backgroundColor:'white'
    
    },
    showCommnet:{
        width:"78%",
       
        flexDirection:"column",
        marginLeft:10,
        marginRight:5
    },
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      height:"100%"
    },
    modalView: {
      backgroundColor: 'white',
      borderTopRightRadius: 25,
         borderTopLeftRadius: 25,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      height:"60%",
      width:"100%",
      maxWidth:"100%",
      maxHeight:"100%"
    },
    openButton: {
      backgroundColor: '#FFF',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      maxHeight:45,
      flexDirection:"row",
      borderColor:"black",
      borderWidth:2,
      margin:10
    },
    textStyle: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    }, centeredViewPunti: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      height:350
    },
    modalViewPunti: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 25,
         
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      height:150,
      width:"90%",
      maxWidth:"90%",
      maxHeight:"90%",
      justifyContent:"center",
      alignItems:"center"
    },
   
  });