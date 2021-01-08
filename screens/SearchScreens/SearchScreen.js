import React from 'react';
import {View,Text,StyleSheet, TextInput, ScrollView ,FlatList, TouchableOpacity} from 'react-native';

import HeaderSearch from '../../components/HeaderSearch';
import CardSearch from '../../components/CardSearch';
import { Container, Header, Content, Tab, Tabs,Item,Icon,Input,Button, List, ListItem,Left,Right,Body, Switch} from 'native-base';
import { TAGS } from '../../data/dummy-data';
import { useDispatch } from 'react-redux';

const SearchScreen = (props) =>{
  
   const tags= TAGS;
   const macro = ["Sport","Fashion","Casual","Rock","Utenti"]
return(

      <View style={{backgroundColor:"#FFF"}}>
        <HeaderSearch/>
  <FlatList
  style={{
  
    height:60,
    backgroundColor:"#FFF"
    
  }}
  showsHorizontalScrollIndicator={false}
  data={macro}
  horizontal={true}
  renderItem={
({item})=>{
return(<TouchableOpacity
  style={{
    justifyContent:"center",
    alignItems:'center',
    borderRadius:10,
    borderWidth:1,
    borderWidth:2,
    height:40,
    margin:5,
    elevation: 20,
    shadowRadius: 100 ,
    shadowOffset : { width: 1, height: 13},
    minWidth: 100,
    backgroundColor:"black"
  }}

>
  <Text style={{
            color:"#FFF",
            fontSize:20,
            textAlign:"center",
            fontWeight:"bold",
            textAlignVertical:"center"
            ,
            padding:5

          }}>{item}</Text>
</TouchableOpacity>)
}
  }
  />

        <FlatList
      data={tags}
      
      renderItem={
      ({item}) =>  (
        <TouchableOpacity 
        onPress={()=>{
         
         props.navigation.navigate({
             routeName: 'Tip',
         
             params: {
                 tag: item, 
               }});
      

  }}>
          <CardSearch title={item.nameTag} url={item.urlTag} navigation ={props.navigation} />
          </TouchableOpacity>
        )
      }
      style={{width:'100%',height:'88%'}}>
      </FlatList>
      </View>
    
      
      
    





)




}
export default SearchScreen;
const styles = StyleSheet.create({
  container:{
  height:'100%',
  width:'100%'
  
  },
  
  
  });