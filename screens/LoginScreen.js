import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator,Image } from 'react-native';
import { color } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {primary,secodary} from '../config/color'
import LogoHome from '../components/Logo/logoHome';

const LoginScreen = (props)=> {
        const [press,isPress] = useState(false);
        const [email,setEmail] = useState(false);
        const [password,setPassword] = useState(false);
        const dispatch = useDispatch();
     
        const [error,setError] = useState(false);
        const [errorMessage,setErrorMessage] = useState("");
       
          
        
         

          const authHandler = async () => {
            let action;
            
              action = 
              setError(false)
              isPress(true)
              
            try {
              await dispatch(login(email,password));
              props.navigation.navigate('TipToBeHome');
            } catch (err) {
              console.log(err)
              setErrorMessage(err.message)
              setError(true)
              isPress(false)
            }
          };
    return (
      <View style={styles.container}>
        <LogoHome/>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Inserisci email o username" 
            placeholderTextColor="black"
            onChangeText={(text)=>{
                setEmail(text)
            }}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Inserisci la password" 
            placeholderTextColor="black"
            onChangeText={(text)=>{
                setPassword(text)
            }}/>
        </View>
    {   error? (<Text style={{color:"red"}}>{errorMessage}</Text>):<Text></Text>}
        {press 
        ?
       <ActivityIndicator size="small" color="#0000ff"/>
        :
        (<TouchableOpacity style={styles.loginBtn} onPress={
            ()=>{
                authHandler();
              
            }
        }>
        <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>)
    }  
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );

}
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"black",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#FFF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    borderColor:primary,
    borderWidth:2
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:primary,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    margin:5
  },
  loginText:{
    color:"white",
    fontSize:16
  }
});