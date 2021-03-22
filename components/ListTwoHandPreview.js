import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import { POSTS, TWOHAND } from '../data/dummy-data';
import TwoHandPreview from './TwoHandPreview';
function ListTwoHandPreview({ths,routeName,navigation}){
    const postSelector = useSelector(state => state.post.posts)

    const th= useSelector(state=> state.post.ths);
    return(
        <FlatList
        data={ths }
        numColumns={3}
        keyExtractor={(item, index) => item.idTwoHand}
        renderItem={({item})=>{
        const post = postSelector.find(p => p.idPost===item.idPost) 
        const prezzo = th.find(tw=>tw.idPost===post.idPost).prezzo
         return (
           <TwoHandPreview navigation ={navigation} price={prezzo} post={post} routeName={routeName} />
           )
       }}
       />
    );
}
export default ListTwoHandPreview;