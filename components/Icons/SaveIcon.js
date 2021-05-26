import React from 'react'
import { TouchableOpacity , Image} from 'react-native';
import { useDispatch } from 'react-redux';
import Svg, { G, Path } from "react-native-svg"

import { togglePreferred } from '../../store/actions/User';
const SaveIcon = ({post,indexPrefered})=>{
    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={
            ()=>{
              dispatch(togglePreferred(post))
            }
               }>
                   
                   <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20.25}
                    height={31.5}
                    viewBox="0 0 20.25 31.5"
                   

                  >
                    <G data-name="Raggruppa 80" fill={indexPrefered>=0?"#FF6969":null}>
                      <Path
                        data-name="Tracciato 70"
                        d="M.745 15.75V2.622A1.874 1.874 0 012.62.747h15a1.874 1.874 0 011.875 1.875v28.125l-8.789-7.033a.938.938 0 00-1.172 0L.745 30.747v-15"
                        stroke="#fffdfd"
                        strokeWidth={1.5}

                      />
                      <Path
                        data-name="Tracciato 71"
                        d="M19.5 31.5a.754.754 0 01-.469-.164l-8.789-7.033a.159.159 0 00-.235 0l-8.788 7.033A.751.751 0 010 30.75V2.622A2.628 2.628 0 012.625-.003h15a2.628 2.628 0 012.625 2.625v28.125a.752.752 0 01-.75.75zm-9.374-8.739a1.693 1.693 0 011.055.371l7.569 6.057V2.622a1.126 1.126 0 00-1.125-1.125h-15A1.126 1.126 0 001.5 2.622v26.564l7.57-6.058a1.7 1.7 0 011.056-.367z"
                                       strokeWidth={1.5}

                      />
                    </G>
                  </Svg>
                 
    
    </TouchableOpacity>
    );
}
export default SaveIcon;