import React, { useState } from 'react'
import {View,Text,TouchableOpacity, Image} from 'react-native'
import { Container, Header, Tab, Tabs } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import { TAGS, USERS } from '../data/dummy-data';
import ListUserSearch from './ListUserSearch';
import ListTipsSearch from './ListTipsSearch';
import {primary,secodary} from '../config/color'
export default function TabSearch ({tips,users,navigation}){
    const [pressUtenti,setPressUtenti] = useState(true)
    const [pressTips,setPressTips] = useState(false)
    const [pressLuogi,setPressLuogi] = useState(false)

    return (
        <Container style={{minHeight:"100%",maxHeight:"100%"}}>
      
      <Tabs tabBarUnderlineStyle={{backgroundColor:primary , height:3,}} tabContainerStyle={{borderBottomColor:primary,borderBottomWidth:1}}>
      <Tab  heading="Utenti"  tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey'}}
           activeTextStyle={{color:'black',fontWeight:"bold"}}>
           <ListUserSearch users={users} navigation={navigation}/>
           </Tab>
           <Tab   heading="Tips" tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey'}}
           activeTextStyle={{color:'black',fontWeight:"bold"}}>
            <ListTipsSearch tips={tips} navigation={navigation}/>
           </Tab>
           <Tab   heading="Luoghi"  tabStyle={{backgroundColor:'white'}} 
           activeTabStyle={{backgroundColor:'white'}}	
           textStyle={{color:'grey'}}
           activeTextStyle={{color:'black',fontWeight:"bold"}}>
            
           </Tab>
         </Tabs>
         </Container>
    );
}

/*<View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            padding:10

        }}>
         <TouchableOpacity style={
             {
                 borderBottomColor:"black",
                 borderBottomWidth:2,
                 
             }
         }>
         <Text>Utenti</Text>
         </TouchableOpacity>
         <Text>Tips</Text>
         <Text>Luoghi</Text>
        </View>*/