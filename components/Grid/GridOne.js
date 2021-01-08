import React, { useState } from 'react'
import {Image, TouchableOpacity, View} from 'react-native'
const GridOne =(props)=>{
const image= (<Image
source={{uri:props.uri}}
style={{
    height:"100%",
    width:"100%"
}}
/>)
const [selectd,setSelected] = useState(false);


    return (
        
        <View style={{
            flexDirection:"row",
        width:200,
        height:150,
        justifyContent:"center",
   

    }}>
        <View  style={{
          flexDirection:"column",
        width:50,
        height:150,
    }}>
<TouchableOpacity  style={{
         height:75,
        width:51,
        borderWidth:1,
        borderBottomWidth:0
        
    }}
    
    onPress={()=>{
        setSelected(true);
    }}
    >
        {selectd ?image :null}
</TouchableOpacity> 
<View  style={{
        width:51,
        height:75.5,
        borderWidth:1,
    }}>

</View> 
        </View>
        <View style={{
                     borderWidth:1,
       flexDirection:"column",
        width:100,
        height:150,
        justifyContent:"center",
    }}>

        </View>

    </View>
    );
}
export default GridOne;