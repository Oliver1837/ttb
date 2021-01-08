import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, View ,TouchableOpacity, Switch} from 'react-native';
import { TAGS } from '../../data/dummy-data';
const UselessTextInput = props => {
    return (
      <TextInput
    
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        placeholder={"Inserisci una descrizione"}
        placeholderTextColor="gray"
        editable
        maxLength={250}
      />
    );
  };
const  UploadPost =(props)=> {
    const Tags = TAGS

    const [value, onChangeText] = useState('');
    const [select,setSelect] = useState([])
    const [isTwoHand, setIsTwoHand] = useState(false);
    const toggleSwitchTwoHand = () => setIsTwoHand(previousState => !previousState);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    console.log(props.navigation.getParam("uri"))
    const uriPhoto = props.navigation.getParam("uri");
  return (
    <View style={{
        height:"100%",
        alignItems:"center",
        backgroundColor:"#fff"
    }}>
    <View style={styles.container}>
        <Image source ={{uri:uriPhoto}} 
            style={{
                height:100,
                width:80,
                borderColor:"black",
                borderWidth:1,
          
            }}
        />
        <View 
         style={{
          
            width:"70%",
            minHeight :35,
            marginLeft:20,
            maxHeight :150,
         
    
          }}
        >       
             <UselessTextInput
       style={{
          
        width:"100%",
        
      }}
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      </View>
      </View>
      <View style={styles.containerTip}>
      <Text>Seleziona uno o più Tips :</Text>
      <FlatList
                  style={{ marginBottom: 15}}
                  data={Tags}
                 numColumns={3}
                 showsVerticalScrollIndicator={false}

                     renderItem={({item})=>{
                      return(<TouchableOpacity style={{
                     flexDirection:'row',
                     padding:4,
                    borderColor:"black",
                     borderWidth:1,
                     alignItems:"center",
                     borderRadius:25,
                     margin:2,
                     minHeight:25,
          minWidth:25,
          backgroundColor:select.findIndex(t => t ===item.nameTag )>=0 ?"#66FF66": "white",
        }}
        onPress={()=>{
            const index = select.findIndex(t => t ===item.nameTag );
            console.log(index)
            if(index>=0){

                var newSelect = select
                newSelect = newSelect.filter(t => t !== item.nameTag);
               setSelect(newSelect);   
             
              }else{
             
                  setSelect(select.concat(item.nameTag))
    
        }

            console.log(select)
        }}
        >
          <Image source={{uri:item.urlTag}} style={{height:25,width:25,padding:2}}/>
          <Text  style={{color: 'black', fontWeight: 'bold', textAlign:"center",padding:2,}}>{item.nameTag}</Text></TouchableOpacity>)
       }}
                  
                  />
      </View>
      <View style={styles.containerTip}>

      <Text> Tipo di Post:</Text>
      <View style={
          {
              width:100,
              alignItems:"center"
              ,height:70,
        
              borderColor:"black",
              borderWidth:1
          }
      }>
      <View style={
          {
              width:100,
              alignItems:"center"
              ,height:35,
              flexDirection:"row",
              borderColor:"black",
              borderWidth:1
          }
      }>
       <Text>2Hand</Text>  
       <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isTwoHand ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchTwoHand}
        value={isTwoHand}
      />
      </View>
      <View style={
          {
              width:100,
              alignItems:"center"
              ,height:35,
              flexDirection:"row"
          }
      }>
       <Text>Griglia</Text>  
       <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      </View>
      </View>
    </View>
  );
}
export default UploadPost;
const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#fff',
    flexDirection:"row",
    padding : 20,
    borderBottomColor:"gray",
    borderBottomWidth:0.5,
    width:"90%",
    height:150
  },
  containerTip: {
  
    backgroundColor: '#fff',
    flexDirection:"column",
    padding : 20,
    borderBottomColor:"gray",
    borderBottomWidth:0.5,
    width:"90%",
    height:160,
    marginTop:5
  },
});
