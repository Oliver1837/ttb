import React from 'react'
import { StyleSheet,View,Text} from 'react-native';
import ButtonBuy from './ButtonBuy';
import CommentICon from './Icons/CommentIcon';
import EllipsisIcon from './Icons/EllipsisIcon';
import HeartIcon from './Icons/HeartIcon';
import SaveIcon from './Icons/SaveIcon';
import ShareICon from './Icons/ShareIcon';


const ContainerIconsPost = ({post,index,comments,setModalVisiblePunti,onAddCart,onRemoveCart,price,isAdd,isTwoHand,me,indexPreferedd,setModalVisible})=>{

    return(
        <View style={styles.innerRight}>
            <HeartIcon id={post.idPost} index={index}/>
            <Text style={{color: '#fff', marginBottom: 15, fontFamily:"Manrope_500Medium" }}>{"0"}</Text>
            <SaveIcon post={post} indexPrefered={indexPreferedd}/>
            <Text style={{color: '#fff', marginBottom: 15, fontFamily:"Manrope_500Medium"}}>{"0"}</Text>

            <CommentICon setModalVisible={setModalVisible}/>
            <Text style={{color: '#fff', marginBottom: 15,  fontFamily:"Manrope_500Medium"}}>{comments.length}</Text>
            <ShareICon/>
            {me ==="true" ?
            <EllipsisIcon setModalVisiblePunti={setModalVisiblePunti}/>
            :null}
            {(isTwoHand=="true" || isTwoHand==true)
             ? 
            <ButtonBuy onAddCart={onAddCart} onRemoveCart={onRemoveCart} isAdd={isAdd} price={price}/>            
            : null 
            }
        </View>

    )

}
export default ContainerIconsPost;

const styles = StyleSheet.create({
    innerRight: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
        paddingLeft:30
      },
})