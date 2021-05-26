import React from 'react'
import { TouchableOpacity , Image} from 'react-native';
import Svg, { G, Path } from "react-native-svg"


const CommentICon = ({setModalVisible})=>{
    return (
    <TouchableOpacity onPress={
        ()=> {
          setModalVisible(true);
        
        }}>
          <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={31.5}
      height={31.5}
      viewBox="0 0 31.5 31.5"
    >
      <G
        data-name="Raggruppa 36"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <Path
          data-name="Tracciato 50"
          d="M29.313 17.501a11.251 11.251 0 10-4.312 4.312l5.749 1.437z"
        />
        <Path
          data-name="Tracciato 51"
          d="M6.375 9.755a11.25 11.25 0 00-4.187 15.246L.75 30.75l5.75-1.437a11.251 11.251 0 0015.245-4.188"
        />
      </G>
    </Svg>
      </TouchableOpacity>
      );
}
export default CommentICon 