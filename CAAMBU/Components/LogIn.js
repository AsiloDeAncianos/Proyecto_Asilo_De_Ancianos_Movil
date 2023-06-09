import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Alert, View, Image, TextInput, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { useState, useEffect, useContext} from "react";

import {DevSettings} from 'react-native';


import { getAllBenefactor, getBenefactor } from './api/backend';
import { UserIdContext } from '../Components/UserIdContext';

import AsyncStorage from '@react-native-async-storage/async-storage';


import axios from 'axios';
export default function LogIn(){

  const { setUserId } = useContext(UserIdContext);
  const [campaniaAll, setCampania] = useState([]);
  const [benefactorsAll, setBenefactor] = useState([]);  

  useEffect(() => {
    async function loadData(){
        const res = await getAllBenefactor();
        console.log(res);
        setBenefactor(res.data);
      }
      loadData();
  }, [])
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loggedInUserId, setLoggedInUserId] = useState(null);

  const handleLogIn = () => {
    const loggedInBenefactor = benefactorsAll.find(
      (benefactor) => benefactor.Email === email 
    );
  
    if (loggedInBenefactor) {
      setUserId(loggedInBenefactor.id);
      AsyncStorage.setItem('userId', loggedInBenefactor.id);
    
      setLoggedInUserId(loggedInBenefactor.id);
      console.log(loggedInBenefactor.id);
      // Successful login, navigate to the home page
      // You can use a navigation library like React Navigation
      navigation.navigate('Home');
    } else {
      // Invalid email or password, display an error message
      // or handle error state
      console.log('Invalid email or password' + email + password) ;
    }
  };

    const navigation = useNavigation();



    // const handleLogIn = () => {
    //   fetch(`http://localhost:4000/verify-data?email=${email}&password=${password}`, {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       // Handle the response data
    //       console.log(data);
    //       // Perform further actions based on the response
    //       if (data.success) {
    //         navigation.navigate("Home");
    //       } else {
    //         // Invalid email or password, show an error message
    //       }
    //     })
    //     .catch(error => {
    //       // Handle the error
    //       console.log(error);
    //     });
        
    // };

  return(
    <View style={styles.mainContainer}>
      

        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>
              Iniciar Sesion.
          </Text>
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.textHint}>
                Email
            </Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <Text style={styles.textHint}>
                Password
            </Text>
            
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />

        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonLogIn} onPress={handleLogIn}>
                <Text style={styles.buttonText}>
                    Iniciar sesion
                </Text>
            </TouchableOpacity>
        </View>

        
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        width:'100%',
        height:'100%',
        padding:0,
        backgroundColor:'#3e478c',  
    },
    imageContainer:{
        width:'100%',
        height:'auto',
        padding:0,
        backgroundColor:'transparent',
        alignContent:'center',
    },
    image:{
        
        width:'100%',
        height:250,
    },
    headerContainer:{
        width:'100%',
        height:'auto',
        padding:25,
        textAlign:'left',
        justifyContent:'center',
        backgroundColor:'transparent'
    },
    titleText:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold',
        
    },
    inputContainer:{
        width:'100%',
        height:'auto',
        padding:25,
        backgroundColor:'transparent'
    },
    textInput:{
        width:'100%',
        height:50,
        borderRadius:10,
        backgroundColor:'#fff',
        marginTop:5,
        marginBottom:5,
        padding:5,
        justifyContent:"center",
    },
    textHint:{
        color:'#fff',
        fontSize:15
    },
    buttonContainer:{
        width:'100%',
        height:'auto',
        padding:25,
        backgroundColor:'transparent'
    },
    buttonLogIn:{
        width:'100%',
        height:'auto',
        backgroundColor:'#3e4799',
        padding:15,
        borderRadius:10,
        borderColor:'#fff',
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    },
  });