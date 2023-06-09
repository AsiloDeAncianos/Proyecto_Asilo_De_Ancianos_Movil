import { StatusBar } from 'expo-status-bar';
import { Button, CheckBox, StyleSheet, Text, Alert, View, Image, TextInput, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import React, {useState} from 'react';

import axios from 'axios';
import {DevSettings} from 'react-native';


export default function Register() {

  const [nombreCompleto, setNombreCompleto] = useState('');
  const [ci, setCi] = useState('');
  const [ubicacionDomicilio, setUbicacionDomicilio] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [anonimo, setAnonymous] = useState(false);


  const [isSelected, setSelection] = useState(false);

    const navigation = useNavigation();

    const handleSubmit = async () => {
      
      try {
        const response = await fetch('http://localhost:4000/send-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            NombreCompleto: nombreCompleto, // replace with your form field values
            CI: ci,
            UbicacionDomicilio: ubicacionDomicilio,
            Telefono: telefono,
            Email: email,
            Password: password,
            Anonimo: anonimo,
          }),
        });

        const res = await axios.post('http://127.0.0.1:8000/caambu/api/v1/benefactor/', {
          NombreCompleto: nombreCompleto,
          UbicacionDomicilio: ubicacionDomicilio,
          Telefono: telefono,
          Email: email,
          Anonimo: anonimo,
        });

        window.location.reload();
        
        const data = await response.json();
        console.log(data); // success message from the server
        // Reset form fields or navigate to a different screen
      } catch (error) {
        console.log(error);
        // Handle error state or display an error message
      }
      
    };
   

  return(
    <View>
      <TextInput
        value={nombreCompleto}
        onChangeText={setNombreCompleto}
        placeholder="Nombre Completo"
      />
      <TextInput
        value={ci}
        onChangeText={setCi}
        placeholder="CI"
        keyboardType="numeric"
      />
      <TextInput
        value={ubicacionDomicilio}
        onChangeText={setUbicacionDomicilio}
        placeholder="Ubicación Domicilio"
      />
      <TextInput
        value={telefono}
        onChangeText={setTelefono}
        placeholder="Teléfono"
        keyboardType="phone-pad"
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <CheckBox
        value={anonimo}
        onValueChange={setAnonymous}
        title="Anonymous"
      />
      <Button title="Register" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        width:'100%',
        height:'100%',
        padding:0,
        backgroundColor:'#F24E1E',  
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
        backgroundColor:'#F24E1E',
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