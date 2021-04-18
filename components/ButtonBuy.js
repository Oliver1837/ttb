/*import React from 'react'
import {View , Text, StyleSheet, Button ,TouchableOpacity,Dimensions,FlatList,ImageBackground,Image,Alert} from 'react-native'

export default function ButtonBuy({onRemoveCart,onAddCart}) {
    return(

        <View>
             <Text style={{
               fontSize:18,
               fontWeight:"bold",
               color:"#FFF"
             }}> {price}$</Text> 
            <TouchableOpacity style={{
              justifyContent:"center",
              alignItems:'center',
              borderRadius:10,
              borderWidth:1,
              borderWidth:2,
              backgroundColor:isCart!=0 ?"red": "#0095f6",
              height:40,
              margin:1,
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOpacity: 0.9,
              elevation: 20,
              shadowRadius: 100 ,
              shadowOffset : { width: 1, height: 13},
              borderColor:isCart!=0 ?"red": "#0095f6"
            }}
            onPress={
              ()=>{
               if(isCart!=0){
                  onRemoveCart(user.idUser,post.idPost)

               }else{ Alert.alert( "Aggiungi al carrello","Sei sicuro di aggiungere l'articolo al Carrello",
                  [
                    {
                      text: "NO",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    { text: "SI", onPress: () => onAddCart(user.idUser,post.idPost,price) }
                  ],
                  { cancelable: false }
                );}
              }
              
              
              }
            >
              <Text style={{
                color:"white",
                fontSize:15,
                textAlign:"center",
                fontWeight:"bold",
                textAlignVertical:"center"
                ,
                padding:5
    
              }}>{isCart!=0 ?"RIMUOVI": "COMPRA"}</Text>
            </TouchableOpacity>
            </View>


    );
}*/