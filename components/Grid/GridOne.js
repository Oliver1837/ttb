import React from 'react'
import {View} from 'react-native'
const GridOne =()=>{
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
<View  style={{
         height:75,
        width:51,
        borderWidth:1,
        borderBottomWidth:0
        
    }}>
</View> 
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