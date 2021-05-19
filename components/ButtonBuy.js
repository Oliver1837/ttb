import React from 'react'
import {View , Text, StyleSheet, Button ,TouchableOpacity,Dimensions,FlatList,ImageBackground,Image,Alert} from 'react-native'
import {primary} from '../config/color'
export default function ButtonBuy({onRemoveCart,onAddCart, isAdd,price}) {
    return(

       <View>
           
            <TouchableOpacity style={{
              justifyContent:"center",
              alignItems:'center',
              borderRadius:30,
              borderWidth:1,
              borderWidth:2,
              backgroundColor:isAdd?primary: primary,
              height:46,
              margin:1,
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOpacity: 0.9,
              elevation: 20,
              shadowRadius: 100 ,
              shadowOffset : { width: 1, height: 13},
              borderColor:isAdd?primary: primary,
              width:82,
              marginRight:40,
              marginTop:20
            }}
            onPress={
              ()=>{
               if(isAdd==true){
                Alert.alert( "Rimuovi dal carrello","Sei sicuro di rimuovere l'articolo dal Carrello?",
                [
                  {
                    text: "NO",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "SI", onPress: () =>  onRemoveCart() }
                ],
                { cancelable: false }
              )

               }else{ Alert.alert( "Aggiungi al carrello","Sei sicuro di aggiungere l'articolo dal Carrello?",
                  [
                    {
                      text: "NO",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    { text: "SI", onPress: () => onAddCart() }
                  ],
                  { cancelable: false }
                );}
              }
              
              
              }
            >
              <Text style={{
               fontSize:16,
           
               color:"#FFF",
               fontFamily:"Manrope_700Bold"
             }}> {price}€</Text> 
              <Text style={{
                color:"white",
                fontSize:16,
                fontFamily:"Manrope_700Bold"
                
                
    
              }}>
                {isAdd?"Remove": "Buy"}</Text>
            </TouchableOpacity>
            </View>


    );
}