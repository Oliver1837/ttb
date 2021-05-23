import { Button, Icon, List } from 'native-base';
import React from 'react'
import { FlatList } from 'react-native';
import { USERS } from '../data/dummy-data';
import Comment from './Comment';

const ListComments = ({comments}) => {


    return (
        <List
         dataArray={comments}
         leftOpenValue={75}
         rightOpenValue={-75}
        renderRow={({item})=>{
        const user = USERS.find(user => user.idUser === item.idCommentAuthor)
        return(
          <Comment user={user} comment={item}/>
        );
 
 
    }}
    renderLeftHiddenRow={data =>
        <Button full onPress={() => alert(data)}>
          <Icon active name="information-circle" />
        </Button>}
      renderRightHiddenRow={(data, secId, rowId, rowMap) =>
        <Button full danger onPress={() => alert(data)}>
          <Icon active name="trash" />
        </Button>}
    />
    );


}

export default ListComments;

