import React from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native';
import { AntDesign ,Ionicons} from '@expo/vector-icons';
const HeaderSearch = props=>{

return(

    <View style={styles.header}>
    <View style={styles.searchSection}>
        <AntDesign style={styles.icon}  name="search1" size={24} color="black" />
    <TextInput
        style={styles.input}
        placeholder="Search "
        color="black"
    />
</View>
</View>
);

}

const styles= StyleSheet.create({
    header:{
        width:'100%',
        height:70,
        paddingTop:30,
        backgroundColor: 'white',
        alignItems : 'center',
        justifyContent  : 'center',

        shadowColor:'black',
        shadowOffset:{width:1,height:2},
        shadowRadius:0,
        shadowOpacity:0.26,
        elevation:8,
    },
    searchSection: {
        height:80,
        width:"100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    icon: {
        padding: 10,
    },
  
    input: {
        flex: 1,
        width:'80%',
        height:40,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: 'black',
    
      
        fontSize:15
    },


})

export default HeaderSearch;