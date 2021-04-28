import { Button, Icon, Input, Left, List, ListItem, Right } from 'native-base';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View ,TouchableOpacity, Switch,ScrollView,KeyboardAvoidingView,
  Keyboard,} from 'react-native';
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
      <View style={{flexDirection:"row",
      display:"flex",
      justifyContent:"flex-start",
      width:"100%"}}>
        <Text style={{maxHeight:"100%",textAlignVertical:"center"}}>TipTo#</Text>
      <TextInput
      style={{borderWidth:1}}
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        placeholder={"Scrivi i tuoi tips"}
        placeholderTextColor="gray"
        editable
        maxLength={250}
        onSubmitEditing={Keyboard.dismiss}
      />
       </View>
    );
  };
const  UploadPost =(props)=> {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isTh,setIsTh] = useState(false)
  const toggleSwitch = () =>{ setIsEnabled(!isEnabled)
    setIsTh(!isTh)
  };
    const Tags = TAGS
    const dispatch = useDispatch();
    const [descrizione, onChangeDescrizione] = useState('');
    const [tips,onChangeTips]= useState('');
    const [condizione,onChangeCondizione]= useState('');
    const [prezzo,onChangePrezzo]= useState('');
    const [taglia,onChangeTaglia]= useState('');
    const [marca,onChangeMarca]= useState('');
    const [colore,onChangeColore]= useState('');
  
    console.log(props.navigation.getParam("uri"))
    const uriPhoto = props.navigation.getParam("uri");
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>   
      <HeaderAlbum label={"PUBBLICA"} routeNameBack="CheckPhotoAlbum" navigate={props.navigation} routeNameContinua="Profile" array={[uriPhoto,tips,descrizione,prezzo,taglia,marca,condizione]}  isTh={isTh}/>
     
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
         
          flexDirection:"column",
       
        }}>
       <KeyboardAvoidingView enabled>
    <View style={{
        height:"100%",
        minHeight:"100%",
        maxHeight:"100%",
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
          
        maxWidth:"60%",
        marginLeft:25
      }}
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeTips(text)}
        value={tips}
      />
   

     
      </View>
      <View style={{
        flexDirection:"row",     
        maxWidth:"90%",
        minWidth:"90%",
        justifyContent:"space-between",
        margin:10
      }}>  
        <Text>2HAND</Text>
            <Switch
        trackColor={{ false: '#FF9C9C', true: '#ff4343' }}
        thumbColor={isEnabled ? '#FFF' : '#FFF'}
        ios_backgroundColor="#FF9C9C"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      {isEnabled  ? 
      <View>
      <View style={{
        flexDirection:"row",     
        maxWidth:"90%",
        minWidth:"90%",
        justifyContent:"space-between",
        borderBottomWidth:0.25,        margin:5

      }}>  
        <Text style={{fontSize:16}}>Taglia</Text>
        <Input style={{
              minWidth:120,
              maxWidth:120,
             height:25,
             minHeight:25,
             minHeight:25
             
           }}
           onChangeText={text => onChangeTaglia(text)}
           value={taglia}
           placeholder="Taglia"
           />
      </View>
      <View style={{
        flexDirection:"row",     
        maxWidth:"90%",
        minWidth:"90%",
        justifyContent:"space-between",
        margin:5,
        borderBottomWidth:0.25,      }}>  
        <Text style={{fontSize:16}}>Condizione:</Text>
        <Input style={{
             minWidth:120,
             maxWidth:120,
         
             height:25,
             minHeight:25,
             minHeight:25


           }}
           onChangeText={text => onChangeCondizione(text)}
           value={condizione}
           placeholder="Condizione"
           />
      </View>
      <View style={{
        flexDirection:"row",     
        maxWidth:"90%",
        minWidth:"90%",
        justifyContent:"space-between",
        borderBottomWidth:0.25,        margin:5

      }}>  
        <Text style={{fontSize:16}}>Marca</Text>
        <Input style={{
             minWidth:120,
             maxWidth:120,
             height:25,
             minHeight:25,
             minHeight:25
           }}
           onChangeText={text => onChangeMarca(text)}
           value={marca}
           placeholder="Marca"
           />
      </View>
      <View style={{
        flexDirection:"row",     
        maxWidth:"90%",
        minWidth:"90%",
        justifyContent:"space-between",
        margin:5,
        borderBottomWidth:0.25,
      }}>  
        <Text style={{fontSize:16}}>Colore</Text>
        <Input style={{
             minWidth:120,
             maxWidth:120,
             height:25,
             minHeight:25,
             minHeight:25
           }}
           onChangeText={text => onChangeColore(text)}
           value={colore}
           placeholder="Colore"
           />
      </View>
      <View style={{
        flexDirection:"row",     
        maxWidth:"90%",
        minWidth:"90%",
        justifyContent:"space-between",
        margin:5,
        borderBottomWidth:0.25,
      }}>  
        <Text style={{fontSize:16}}>Prezzo</Text>
           <Input style={{
              minWidth:120,
              maxWidth:120,
          
              height:25,
              minHeight:25,
              minHeight:25
           }}
           onChangeText={text => onChangePrezzo(text)}
           value={prezzo}
           placeholder="Prezzo"
           />
      </View>
      </View>
      : null}
    </View>
    </KeyboardAvoidingView>
    
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