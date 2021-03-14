import { Button, Icon, Left, List, ListItem, Right } from 'native-base';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View ,TouchableOpacity, Switch,ScrollView, Keyboard} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HeaderAlbum from '../../components/HeaderAlbum';
import { TAGS } from '../../data/dummy-data';
import { uploadPost } from '../../store/actions/UploadPost';
const Descrizione = props => {
    return (
      <TextInput
    
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        placeholder={"Inserisci una descrizione"}
        placeholderTextColor="gray"
        editable
        maxLength={250}
        onSubmitEditing={Keyboard.dismiss}
      />
    );
  };
  const TipsDescription = props => {
    return (
      <TextInput
    
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        placeholder={"TipTo#"}
        placeholderTextColor="gray"
        editable
        maxLength={250}
        onSubmitEditing={Keyboard.dismiss}
      />
    );
  };
const  UploadPost =(props)=> {
    const Tags = TAGS
    const dispatch = useDispatch();
    const [descrizione, onChangeDescrizione] = useState('');
    const [tips,onChangeTips]= useState('');
    console.log(props.navigation.getParam("uri"))
    const uriPhoto = props.navigation.getParam("uri");
  return (
    <View  style={{
      minHeight:"100%",
      
      backgroundColor:"#fff"
  }}>   
      <HeaderAlbum label={"PUBBLICA"} routeNameBack="CheckPhotoAlbum" navigate={props.navigation} routeNameContinua="Profile" array={[uriPhoto,tips,descrizione]}/>
      <ScrollView>
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
             <Descrizione
       style={{
          
        width:"100%",
        
      }}
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeDescrizione(text)}
        value={descrizione}
      />
      </View>
      </View>
      <View style={styles.containerTip}>
      
         
      <TipsDescription
       style={{
          
        width:"100%",
        
      }}
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeTips(text)}
        value={tips}
      />
   

     
      </View>
     
      
    </View>
    </ScrollView>
    </View>
 
  );
}
export default UploadPost;
UploadPost.navigationOptions = (navData)=>{

  const urlPhoto =   navData.navigation.getParam("uri");
  return{
  headerRight: ()=>{
      return(<TouchableOpacity style={{  marginRight:5}}
      onPress={()=>{
              console.log("Clicca")
         
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
    minHeight:150
  },
  containerTip: {
  
    backgroundColor: '#fff',
    flexDirection:"row",
    padding : 20,
    borderBottomColor:"gray",
    borderBottomWidth:0.5,
    maxWidth:"100%",
    minHeight:160,
    marginTop:5,
    
  },
});
/*

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
       <ListItem>
              <Left>
                <Text>TAGLIA</Text>
              </Left>
              <Right>
              <Text>M</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>CONDIZIONE</Text>
              </Left>
              <Right>
              <Text>OTTIMO </Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>MARCA</Text>
              </Left>
              <Right>
              <Text>ZARA </Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>PREZZO</Text>
              </Left>
              <Right>
              <Text>30$ </Text>
              </Right>
            </ListItem>


*/