import React from 'react'
import {Modal, Pressable,  StyleSheet, Text,  View } from "react-native";
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/actions/UploadPost';


const OptionPostModal = ({modalVisiblePunti,setModalVisiblePunti,navigation,postId,urlPost,isTwoHand})=>{
    const dispatch = useDispatch();

    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblePunti}
        onRequestClose={() => {
        setModalVisiblePunti(!modalVisiblePunti)        
        }}>
        <View style={styles.centeredViewPunti}>
          <View style={styles.modalViewPunti}>
          <Pressable onPress={()=>{
           navigation.navigate({routeName:"Update",params:{
            id:postId,
            uri: urlPost,
            isTwoHand:isTwoHand
           }})
          
          }}>
          <Text style={{
            fontSize:16,
            margin:5
          }}>Modifica</Text>
          </Pressable>
          <Pressable onPress={()=>{
            dispatch(deletePost(postId))
            navigation.goBack(null)
            
          }}>
          <Text  style={{
            fontSize:16,
            margin:5
          }}>Elimina</Text>
          </Pressable>
          
          
          <Pressable onPress={()=>{
            setModalVisiblePunti(!modalVisiblePunti)
          }}>
            <Text  style={{
            fontSize:16,
            margin:5,
            color:"red"
          }}>Annulla</Text>
          </Pressable>
            
          </View>
        </View>
      </Modal>
    );
}

export default OptionPostModal;

const styles = StyleSheet.create({
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
      alignItems: 'center',
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