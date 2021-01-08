import React from 'react'
import {View} from 'react-native'

const GridFour = ()=>{
    return (
        <View style={{
            flexDirection:"row",
        width:200,
        height:150,
        justifyContent:"center",
    }}>
        <View style={{
            flexDirection:"row",
        width:150,
        height:150,
        borderWidth:1
    }}></View></View>
    );
}
export default GridFour