import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';


const EllipsisIcon = ({setModalVisiblePunti})=>{

return(

    <TouchableOpacity 
    onPress={()=>{
      setModalVisiblePunti(true)
    }}
  >           
     <Text style={{color: '#fff',fontWeight:"bold",fontSize:18}}>...</Text> 
  </TouchableOpacity>

);

}
export default EllipsisIcon;

