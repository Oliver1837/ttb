import React from 'react'
import {View} from 'react-native'
const GridThree =()=>{
    return(   <View style={{
        flexDirection:"column",
    width:200,
    height:150,
    justifyContent:"center"
}}>
<View style={{
        flexDirection:"row",
    width:200,
    height:75,
    justifyContent:"center"
}}>
     <View  style={{
    borderWidth:1,
    width:51,
    height:75
    ,borderRightWidth:0

}}>

</View> 
<View  style={{
    borderWidth:1,
    width:51,
    height:75
    ,borderRightWidth:0

}}>

</View> 
<View  style={{
    borderWidth:1,
    width:50,
    height:75
}}>

</View> 
</View>
<View style={{
        flexDirection:"row",
    width:200,
    height:75,
    justifyContent:"center"
    
}}>
     <View  style={{
    borderWidth:1,
    width:51,
    height:75
    ,borderTopWidth:0
    ,borderRightWidth:0
}}>

</View> 
<View  style={{
    borderWidth:1,
    width:51,
    height:75,borderTopWidth:0
    ,borderRightWidth:0

}}>

</View> 
<View  style={{
    borderWidth:1,
    width:50,
    height:75,borderTopWidth:0
}}>

</View> 
</View>

</View>
);
}
export default GridThree;