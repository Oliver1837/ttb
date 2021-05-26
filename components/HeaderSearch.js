import React, { useState } from 'react';
import {View,Text,StyleSheet, TextInput,TouchableOpacity, Image} from 'react-native';
import { AntDesign ,Ionicons} from '@expo/vector-icons';
import {primary,secodary} from '../config/color'

const HeaderSearch = ({search,showSearch})=>{
    const[searchText ,setSearchText] = useState('')
    const[pressSearch,setPressSearch] = useState(false)
    return(

    <View style={styles.header}>
    <View style={styles.searchSection}>
{pressSearch?
<View  style={styles.input}>
<Image source={require('../assets/icons/search.png')} style={{width:25,height:25}}/>
 <TextInput
 style={{width:250,fontSize:16,fontFamily:"Manrope_500Medium"}}
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
 <TouchableOpacity 
 
 style={{
 }}
 onPress={()=>{
    console.log("Premuto sasdas")
    setPressSearch(false)
    showSearch(true)
    setSearchText("")
}}>
 <Text style={{
     fontWeight:"bold"
 }}>X</Text>
</TouchableOpacity></View>
:<TouchableOpacity    style={styles.input} onPress={()=>{
    console.log("Premuto sasdas")
    setPressSearch(true)
    showSearch(false)


}}>
<Image source={require('../assets/icons/search.png')} style={{width:25,height:25}}/>
<Text style={{
height:40,
fontSize:16,
marginLeft:5,
paddingVertical:8,
fontFamily:"Manrope_600SemiBold"}}>Search</Text>
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
        minWidth:'99%',
        maxWidth:'99%',
        height:40,
        backgroundColor: '#fff',
        color: 'black',
        fontSize:15,
        flexDirection:"row",
        borderColor:secodary,
        borderWidth:1.5,
        borderRadius:25,
        alignItems:"center",
        paddingLeft:5
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
    inputSearch: {
        flex: 1,
        minWidth:'90%',
        maxWidth:'90%',
        height:40,
        
        backgroundColor: '#fff',
        color: 'black',
    
      
        fontSize:15,
        flexDirection:"row",
        borderColor:secodary,
        borderWidth:1,
        borderRadius:25,
        marginLeft:13
    },

})

export default HeaderSearch;