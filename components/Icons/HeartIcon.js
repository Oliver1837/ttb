import React from 'react'
import { TouchableOpacity , Image} from 'react-native';
import { useDispatch } from 'react-redux';

import { toggleLike, togglePreferred } from '../../store/actions/User';
import Svg, { G, Path } from "react-native-svg"

const HeartIcon = ({index,id})=>{
    const dispatch = useDispatch();
    return (
        <TouchableOpacity onPress={()=>{
            dispatch(toggleLike(id))        }}>
             
             <Svg
             xmlns="http://www.w3.org/2000/svg"
             width={30}
             height={26.25}
             viewBox="0 0 31.5 27.75"
             
           >
             <G data-name="Raggruppa 81" fill={index>=0?"#FF6969":null} 
            strokeWidth={1.5}

             >
               <Path
                 data-name="Tracciato 72"
                 d="M25.125 18.741c3.031-3.3 5.625-7.111 5.625-10.488 0-5-3.355-7.5-7.5-7.5-.133 0-.267 0-.4.01a8.249 8.249 0 00-4.325 1.48 9.9 9.9 0 00-2.775 2.883 9.7 9.7 0 00-2.2-2.459 8.4 8.4 0 00-4.9-1.9 7.493 7.493 0 00-.4-.01c-4.142 0-7.5 2.5-7.5 7.5 0 8.123 15 18.75 15 18.75s.91-.645 2.281-1.738a64.153 64.153 0 007.094-6.524"
                 stroke="#fffdfd"


               />
               <Path
                 data-name="Tracciato 73"
                 d="M15.75 27.75a.75.75 0 01-.434-.138C14.691 27.169 0 16.664 0 8.25 0 3.238 3.238 0 8.25 0c.149 0 .3 0 .44.011a9.076 9.076 0 015.328 2.068 11.07 11.07 0 011.733 1.742 10.943 10.943 0 012.351-2.2 8.98 8.98 0 014.713-1.61A7.82 7.82 0 0123.25 0c5.012 0 8.25 3.238 8.25 8.25 0 3.092-1.959 6.791-5.822 11a65.135 65.135 0 01-7.179 6.6c-1.372 1.093-2.277 1.736-2.315 1.763a.753.753 0 01-.434.137zM8.25 1.5C4.987 1.5 1.5 3.273 1.5 8.25c0 6.89 11.82 16.017 14.251 17.821.392-.29 1.027-.77 1.813-1.395a63.5 63.5 0 007.008-6.445C28.123 14.367 30 10.916 30 8.25c0-5.159-3.749-6.886-7.111-6.741a7.49 7.49 0 00-3.939 1.349 9.15 9.15 0 00-2.55 2.638.746.746 0 01-.649.376.75.75 0 01-.65-.376 9.084 9.084 0 00-2.02-2.246 7.61 7.61 0 00-4.465-1.741A7.542 7.542 0 008.25 1.5z"
               
               />
             </G>
           </Svg>
             
        </TouchableOpacity>

    );

}

export default HeartIcon;
