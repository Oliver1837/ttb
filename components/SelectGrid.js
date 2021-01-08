import React from 'react'
import {View,StyleSheet,ScrollView} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import GridFour from './Grid/GridFour';
import GridThree from './Grid/GridThree';
import GridTwo from './Grid/GridTwo';
import GridOne from './Grid/GridOne';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SelectGrid = (props)=>{
    return (
        <View style={{
            flexDirection:"row",
           height:250,
            width:"100%",
            }}>

<ScrollView horizontal={true}  style={{
                    height:250,
                    width:"100%",
                    marginTop:25
                }}>
     <TouchableOpacity onPress={()=>{
         props.navigation.navigate({routeName:"Selezione",
        params:{uri:props.uri}
        });
     }}>
     <GridOne/>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{
         props.navigation.navigate({routeName:"Selezione",
         params:{uri:props.uri}
         });
     }}>
     <GridTwo/>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{
         props.navigation.navigate({routeName:"Selezione",
         params:{uri:props.uri}
         });
     }}>
     <GridThree/>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{
         props.navigation.navigate({routeName:"Selezione",
         params:{uri:props.uri}
         });
     }}>
     <GridFour/>
     </TouchableOpacity>

     </ScrollView>

     </View>

    );
}

export default SelectGrid;