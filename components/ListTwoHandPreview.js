import React from 'react'
import { FlatList } from 'react-native'
import { POSTS, TWOHAND } from '../data/dummy-data';
import TwoHandPreview from './TwoHandPreview';
function ListTwoHandPreview({ths,routeName,navigation}){
    return(
        <FlatList
        data={ths }
        numColumns={3}
        keyExtractor={(item, index) => item.idTwoHand}
        renderItem={({item})=>{
        const post = POSTS.find(p => p.idPost===item.idPost) 
        const prezzo = TWOHAND.find(tw=>tw.idPost===post.idPost).prezzo
         return (
           <TwoHandPreview navigation ={navigation} price={prezzo} post={post} routeName={routeName} />
           )
       }}
       />
    );
}
export default ListTwoHandPreview;