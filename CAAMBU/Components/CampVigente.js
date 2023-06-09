import React from 'react';
import {useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

const FindScreen = ({navigation}) => {

    const [campania, setCampania] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/caambu/api/v1/campania/')
        .then(res => {
            setCampania(res.data);
        })
    }, []);

    const [institucion, setInsti] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/caambu/api/v1/institucionasilo/')
        .then(res => {
            setInsti(res.data);
        })
    }, []);


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
 

    return(
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scrollCont}>
                {campania.map((camp, index) => {
                    if (camp.Estado == true){
                        return(
                        <View key={index}>
                            <TouchableOpacity style={styles.optionsContainer} onPress={getUserId}>
                                <Text style={styles.textOpt}>{camp.Nombre}</Text>
                                <Text style={styles.textSubOpt}>{camp.Requerimiento}</Text>
                                <Text style={styles.textSubOpt}>{camp.InstitucionAsilo}</Text>
                            </TouchableOpacity>
                        </View>
                        )
                    }
                
                })}
            </ScrollView>
            
           
            
        </View>
    );
}


export default FindScreen;

const styles = StyleSheet.create({
    mainContainer:{
        margin:'auto',
        width:'100%',
        height:'100%',
        padding:20,
        alignItems:'center',
        backgroundColor:'#FFF'
    },
    scrollCont:{
        width:'100%',
        height:'auto',
        backgroundColor:'none'
    },
    optionsContainer:{
        width:'100%',
        height:'auto',
        padding:20,
        borderRadius:10,
        backgroundColor: '#3e478c',
        marginBottom:10,
        flexDirection:'column',
        alignItems:'center',
    },
    iconImage:{
        width:40,
        height:40,
        tintColor:'#fff',
        marginRight:5
    },
    textOpt:{
        fontSize:15,
        color:'#fff',
        fontWeight:'bold'
    },
    textSubOpt:{
        fontSize:14,
        color:'#fff',
    }
});