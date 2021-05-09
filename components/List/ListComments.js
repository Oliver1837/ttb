import React from 'react'
import { FlatList } from 'react-native';
import { USERS } from '../data/dummy-data';
import Comment from './Comment';

const ListComments = ({comments}) => {


    return (
        <FlatList
         data={comments}
        keyExtractor={(item,index)=> item.id}
        renderItem={({item})=>{
        const user = USERS.find(user => user.idUser === item.idCommentAuthor)
        let like= false;
        return(
          <Comment user={user} comment={item}/>
       )
 
 
    }}
   style={{width:"100%"}}
    />
    );


}

export default ListComments;

