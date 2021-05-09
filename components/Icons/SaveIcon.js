import React from 'react'
import { TouchableOpacity , Image} from 'react-native';
import { useDispatch } from 'react-redux';

import { togglePreferred } from '../../store/actions/User';
const SaveIcon = ({post,indexPrefered})=>{
    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={
            ()=>{
              dispatch(togglePreferred(post))
            }
               }>
                   
                    {indexPrefered>=0?
                    <Image source={require('../../assets/icons/savefull.png')} style={{height:30,width:18.75,tintColor:"#FF6969",}} />: 
                    <Image source={require('../../assets/icons/save.png')} style={{height:30,width:20,tintColor:indexPrefered >=0 ?"#ff6969":"#FFF",}} />
                      }
    
    </TouchableOpacity>
    );
}
export default SaveIcon;