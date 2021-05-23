import React from 'react'
import { TouchableOpacity , Image} from 'react-native';


const CommentICon = ({setModalVisible})=>{
    return (
    <TouchableOpacity onPress={
        ()=> {
          setModalVisible(true);
        
        }}>
          <Image 
          fadeDuration={0}
          source={require('../../assets/icons/comment.png')} 
          style={{height:30,width:30,tintColor:"#FFF",}} />

      </TouchableOpacity>
      );
}
export default CommentICon 