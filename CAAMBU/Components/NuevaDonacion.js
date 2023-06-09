import { StatusBar } from 'expo-status-bar';
import { Picker, Button,Platform , CheckBox, StyleSheet, Text, Alert, View, Image, TextInput, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect} from 'react';

import { getAllCampania } from './api/backend';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import axios from 'axios';
import {DevSettings} from 'react-native';


export default function Register() {

    const [stabsAll, setstabs] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/caambu/api/v1/campania/')
        .then(res => {
            setstabs(res.data);
        })
    }, []);

    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const campaniaID = 1;
    const benefactorID = 2;
    const recogidaPorAsilo = false;
    const [fechaRecoleccion, SetFechaRecoleccion] = useState('');
    const recibidoPorAsilo = false;
    const campania =2;
    const benefactor = 2;

  const [isSelected, setSelection] = useState(false);

    const navigation = useNavigation();

    const handleSubmit = async () => {
      
      try {
        const getUserId = async () => {
            try {
              const userId = await AsyncStorage.getItem('userId');
              console.log('User ID: ', userId)
              return userId;
            } catch (error) {
              console.log('Error retrieving user ID from async storage:', error);
              return null;
            }
          };
        
        const response = await fetch('http://localhost:4000/send-donacion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            CampaniaID: campaniaID, // replace with your form field values
            BenefactorID: benefactorID,
            RecogidaPorAsilo: recogidaPorAsilo,
            FechaRecoleccion: fechaRecoleccion,
            RecibidoPorAsilo: recibidoPorAsilo,
            Campania: campania,
            Benefactor: benefactor,
          }),
        });

        const res = await axios.post('http://127.0.0.1:8000/caambu/api/v1/donacion/', {
            CampaniaID: campaniaID, // replace with your form field values
            BenefactorID: benefactorID,
            RecogidaPorAsilo: recogidaPorAsilo,
            FechaRecoleccion: fechaRecoleccion,
            RecibidoPorAsilo: recibidoPorAsilo,
            Campania: campania,
            Benefactor: benefactor,
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
    <View style={{marginTop:'80px', width:'50%', height:'60%'}}>
       
      <TextInput
        value={campaniaID}
        placeholder="Nombre Completo"
        style={{display:'none'}}
      />
      <TextInput
        value={benefactorID}
        placeholder="CI"
        style={{display:'none'}}
      />
      <CheckBox style={{display:'none'}}
        value={recogidaPorAsilo}
        title="Anonymous"
      />
     
      <CheckBox style={{display:'none'}}
        value={recibidoPorAsilo}
        title="RPA"
      />

        <View>
        <DatePicker
            selected={selectedDate}
            onChange={SetFechaRecoleccion}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
            />
        </View>
        <Picker >
            {stabsAll.map((stabs) => {
                return <Picker.Item  label={stabs.Nombre} value={stabs.id} />
            })}
        </Picker>
      
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