import React from 'react'

import {Text,ScrollView,View,StyleSheet, Image, ImageBackground, FlatList, TouchableOpacity, Dimensions} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import CardCart from '../../components/CardCart';
import { TAGS } from '../../data/dummy-data';
import { useSelector } from 'react-redux';
import Button from '../../components/UI/Button'


const {width, height} = Dimensions.get('window');

const CartScreen = props =>{
const tags = TAGS;
const cart = useSelector(state=> state.cart);
console.log(cart.cart)
//const twoHand = TWOHAND.filter(t => t.id ===itemData.item.productId)
 return (
<FlatList
      data={cart.cart}
      ListEmptyComponent={()=>{

        return (
          <View style={{ 
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            height:height/2
          }}
          >
            <Text style={{
              fontWeight:'bold',
              fontSize:30
            }}>Il carrello è vuoto</Text>
             <Text style={{
              fontWeight:'bold',
              
            }}>Inizia a seguire qualche tips e aggiungi al carrello i 2HAND  </Text>
            <Button  title="INZIA" follow={true}/>
          </View>
        );
      }}
      renderItem={
      ({item}) =>  (
        
          <CardCart title={item.user.username} url={item.user.urlPhoto} navigation ={props.navigation} post ={item.post} total = {item.total}/>
        )
      }
      style={{width:'100%',height:'90%' ,backgroundColor:"#fff"}}>
      </FlatList>

 )

}
export default CartScreen;
const styles = StyleSheet.create({
screen:{
flex:1,
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
backgroundColor:"white"

},
    
    cartItem: {
        margin :4,
        height:300,
        width:"100%",
        backgroundColor: 'white',
        flexDirection: 'column',
       
        marginHorizontal: 5
      },
      
      quantity: {
        fontFamily: 'open-sans',
        color: '#888',
        fontSize: 16
      },
      mainText: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
      },
      deleteButton: {
        marginLeft: 20
      },contentCart:{
        flexDirection:"column"
        ,
        paddingHorizontal:10
      }
    });


/*
   <ImageBackground source={{uri:itemData.item.url}} style={
            {
                height:150,
                width:100,
                borderRadius:50
            }
        }>
        <Ionicons
          name='md-trash' 
          size={23}
          color="red"
        />
        <Text>{itemData.item.price}</Text>
        </ImageBackground>

*/ 