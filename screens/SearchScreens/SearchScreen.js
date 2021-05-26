import React, { useState } from 'react';
import {View,Text,StyleSheet, TextInput, ScrollView ,FlatList, TouchableOpacity} from 'react-native';

import HeaderSearch from '../../components/HeaderSearch';
import CardSearch from '../../components/CardSearch';
import { Container, Header, Tab, Tabs } from 'native-base';
import { MACRO, POSTS, TAGS, USERS } from '../../data/dummy-data';
import { useDispatch, useSelector } from 'react-redux';
import MacroList from '../../components/MacroList';
import TabSearch from '../../components/TabSearch';

const SearchScreen = (props) =>{

  console.log("SEARCH")
  const  [tags,setTags]= useState([]);
  const  [viewTags,setViewTags]= useState(false);
  const  [isSearch,setIsSearch] = useState(false);
  const  [users, setUsers] = useState([])
  const post = useSelector(state => state.post);
  const posts = useSelector(state => state.post.posts);
  const tagsUpload = useSelector(state=> state.post.tags)
  const[pressSearchShow,setPressSearchShow] = useState(true)
  function search(val='') {
    console.log(tags)
    setViewTags(false);
    if(val!=''){
       setTags( tagsUpload.filter(t=> t.nameTag.includes(val)===true));
       setUsers( USERS.filter(u=> u.username.includes(val)===true));
    console.log(tags)
  }else{
    setTags([]);
    setUsers([])
    setIsSearch(true)


  }
  }

  function showSearch(val){
    setPressSearchShow(val)
  }
  const macro = MACRO.sort();
return(

      <View style={{backgroundColor:"#FFF",minHeight:"100%",maxHeight:"100%",paddingTop:8}}>
        <HeaderSearch search={search} showSearch={showSearch}/>
  {pressSearchShow===false ?  
  <TabSearch tips={tags} users={users} navigation={props.navigation}/>
            : 
  <View>
 <MacroList macros={macro} navigation={props.navigation}/>
    
        <FlatList
      data={tagsUpload}
      
      renderItem={
      ({item}) => { 
        let  posts = post.posts;
        posts = posts.filter(p=> p.nameTag.filter(t => t=== item.nameTag).length>0 && p.isTwoHand===false )
        if(posts.length>=1){
     return  ( <TouchableOpacity 
        onPress={()=>{
       
         posts = posts.filter(p=> p.nameTag.filter(t => t=== item.nameTag).length>0 && p.isTwoHand===false )
         props.navigation.navigate({
             routeName: 'Tip',
         
             params: {
                 tag: item, 
                 posts: posts
               }});
              }}>
          <CardSearch title={item.nameTag} url={item.urlTag} navigation ={props.navigation}  posts={posts}/>
          </TouchableOpacity>)
            }else{
              return null;
            }
          }
      }
      style={{width:'100%',maxHeight:'86%',minHeight:"86%"}}/>
      
      </View>
      }
      
    
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