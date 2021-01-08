import { Button, Icon, Left, List, ListItem, Right } from 'native-base';
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
      <Text>Tips:</Text>
         
      <UselessTextInput
       style={{
          
        width:"100%",
        
      }}
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={"Inserisci i tuoi tips"}
      />
        <List>
      <ListItem>
              <Left>
                <Text>Tag I tuoi amici</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Aggiungi Luogo</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
      </List>
     
      </View>
    
    </View>
  );
}
export default UploadPost;
UploadPost.navigationOptions = (navData)=>{
  return{
  headerRight: ()=>{
      return(<TouchableOpacity style={{  marginRight:5}}
      onPress={()=>{
              navData.navigation.navigate({routeName:"UploadPost",
                  params:{
                      uri : navData.navigation.getParam("uri")
                  }
          
          
          })
      }} >
       <Text style={{
           fontWeight:"bold",
           color:"black"
       }}>Publica</Text>    
      </TouchableOpacity>)
  }
}

        }
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
