import React from 'react'
import {View} from 'react-native'
const GridTwo =()=>{
    return(  <View style={{
        flexDirection:"row",
    width:200,
    height:150,
    justifyContent:"center",


}}>
 
    <View style={{
                 borderWidth:1,
    width:100,
    height:150,
    justifyContent:"center",
}}>

    </View>
    <View  style={{
      flexDirection:"column",
    width:50,
    height:150,
}}>
<View  style={{
     height:75,
    width:50,
    borderRightWidth:1,
    borderTopWidth:1,
   
    
}}>
</View> 
<View  style={{
    width:50,
    height:75.5,
    borderTopWidth:1,
    borderRightWidth:1,
    borderBottomWidth:1
}}>

</View> 
    </View>

</View>
);
}
export default GridTwo;