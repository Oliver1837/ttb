import React, { useState } from 'react';
import {View,Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import { AntDesign ,Ionicons} from '@expo/vector-icons';
const HeaderSearch = ({search,showSearch})=>{
    const[searchText ,setSearchText] = useState('')
    const[pressSearch,setPressSearch] = useState(false)
    return(

    <View style={styles.header}>
    <View style={styles.searchSection}>
    <AntDesign style={styles.icon}  name="search1" size={24} color="black" />
    
{pressSearch?
<View  style={styles.input}>
 <TextInput
 style={{width:"80%"}}
 placeholder="Cerca"
 color="black"
 value={searchText}
 onChangeText={ (text)=>{
     console.log(text)
     setSearchText(text)
     search(text)
 }
 }
 
/>
 <TouchableOpacity onPress={()=>{
    console.log("Premuto sasdas")
    setPressSearch(false)
    showSearch(true)
    setSearchText("")
}}>
 <Text>ANNULLA</Text>
</TouchableOpacity></View>
:<TouchableOpacity    style={styles.input} onPress={()=>{
    console.log("Premuto sasdas")
    setPressSearch(true)
    showSearch(false)


}}>
<Text>Cerca i tips</Text>
</TouchableOpacity>}


   
</View>
</View>
);

}

const styles= StyleSheet.create({
    header:{
        maxWidth:'100%',
        minWidth:'100%',
        height:80,
        paddingTop:30,
        backgroundColor: 'white',
        alignItems : 'center',
        justifyContent  : 'center',

    },
    searchSection: {
        height:80,
        maxWidth:'100%',
        minWidth:'100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor:1,
        borderWidth:1
    },
    icon: {
        padding: 10,
    },
  
    input: {
        flex: 1,
        minWidth:'90%',
        maxWidth:'90%',
        height:40,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: 'black',
    
      
        fontSize:15,
        flexDirection:"row",
        borderColor:1,
        borderWidth:1
    },
    textInput: {
        flex: 1,
        minWidth:400,
        maxWidth:400,
        height:40,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: 'black',
    
      
        fontSize:15,
    },

})

export default HeaderSearch;