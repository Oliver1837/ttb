import React from 'react'
import { TouchableOpacity , Image} from 'react-native';
import { useDispatch } from 'react-redux';

import { toggleLike, togglePreferred } from '../../store/actions/User';

const HeartIcon = ({index,id})=>{
    const dispatch = useDispatch();
    return (
        <TouchableOpacity onPress={()=>{
            dispatch(toggleLike(id))        }}>
             {index>=0? <Image source={require('../../assets/icons/heartfull.png')} style={{height:26.25,width:30,tintColor:"#FF6969",}} />: 
             <Image source={require('../../assets/icons/heart.png')} style={{height:26,width:30,tintColor:"#FFF",}} />
             }
        </TouchableOpacity>

    );

}

export default HeartIcon;
