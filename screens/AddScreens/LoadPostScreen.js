import React, { Component, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ImagePostUpload from '../../components/ImageUploadPost'
import HeaderAdd from '../../components/HeaderAdd';
import SelectGrid from '../../components/SelectGrid';
const LoadPostScreen = props =>{
    const uri = props.navigation.getParam("uri");
    const [griglia,setGriglia] = useState(false);
    const [tw,setTw] = useState(false);
    console.log(uri)

    
    return (
        <View  style={{flexDirection:"column",justifyContent:"center" ,alignItems:"center",backgroundColor:"#FFF"}}>        
     
     <ImagePostUpload uri = {uri.uri} navigation = {props.navigation} style={{      marginTop:50}}/>

 <View style={{
  flexDirection:"row",
 height:250,

  width:"90%",
  padding:10,
  justifyContent:"space-between"}}>

      <TouchableOpacity style={{
borderColor:"grey",
borderWidth:1,
height:100,
width:100,
alignContent:"center",
borderRadius:10,
justifyContent:"center",
flexDirection:"column"

}}

>
<Text style={{textAlign:"center",color:"grey",}}>Filtri</Text>
</TouchableOpacity>
<TouchableOpacity style={{
borderColor:griglia?"green":"grey",
borderWidth:1,
height:100,
width:100,
alignContent:"center",
borderRadius:10,
justifyContent:"center",
flexDirection:"column"

}}
onPress={()=>{
  props.navigation.navigate({routeName:"SelGrid",params:{
    uri :uri
  }});
}}
>
<Text style={{textAlign:"center",color:griglia?"green":"grey",}}>GRIGLIA</Text>
</TouchableOpacity>
<TouchableOpacity style={{
borderColor:tw?"green":"grey",
borderWidth:1,
height:100,
width:100,
alignContent:"center",
borderRadius:10,
justifyContent:"center",
flexDirection:"column"
}}

onPress={()=>{
if(griglia!==true ){  setTw(!tw); }
}}
>
<Text style={{textAlign:"center",color:tw?"green":"grey",}}>2HAND</Text>
</TouchableOpacity>
</View>



    
     </View>

    );
  
}

export default LoadPostScreen;

/*
<TouchableOpacity style={{
  borderColor:griglia?"green":"grey",
  borderWidth:1,
  height:100,
  width:100,
  alignContent:"center",
  borderRadius:10,
  justifyContent:"center",
  flexDirection:"column"

}}
  onPress={()=>{
      if(tw!==true ){      setGriglia(!griglia);
      }
  }}
>
  <Text style={{textAlign:"center",color:griglia?"green":"grey",}}>2HAND</Text>
</TouchableOpacity>
<TouchableOpacity style={{
  borderColor:tw?"green":"grey",
  borderWidth:1,
  height:100,
  width:100,
  alignContent:"center",
  borderRadius:10,
  justifyContent:"center",
  flexDirection:"column"
}}

onPress={()=>{
    if(griglia!==true ){  setTw(!tw); }
}}
>
  <Text style={{textAlign:"center",color:tw?"green":"grey",}}>GRIGLIA</Text>
</TouchableOpacity>



*/
/*


*/