import React, {useState, useEffect} from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Dimensions } from 'react-native';

import axios from 'axios';

const FindScreen = ({route, navigation}) => {
    const [campania, setCampania] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/caambu/api/v1/campania/')
        .then(res => {
            setCampania(res.data);
        })
    }, []);

    const navi = useNavigation();

    const goCampVigente = () => {
        navi.navigate("CampVigente");
        console.log("Campañas Vigentes" )  
    }

    const goCampCerrada = () => {
        navi.navigate("CampCerrada");
        console.log("Campañas Cerrada" )  
    }


    return(
        <View style={styles.mainContainer}>

            <TouchableOpacity style={styles.optionsContainer}  onPress={goCampVigente}>
                <Text style={styles.textOpt}>Campañas Vigentes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionsContainer} onPress={goCampCerrada}>
                <Text style={styles.textOpt}>Campañas Cerradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionsContainer} >
                <Text style={styles.textOpt}>Campañas Donadas</Text>
            </TouchableOpacity>



        </View>
    );
}

export default FindScreen;

const windowHeight = Dimensions.get('window').height;

const BGColor = '#121418';
const styles = StyleSheet.create({

    mainContainer:{
        margin:'auto',
        width:'100%',
        height:'100%',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
   
    optionsContainer:{
        width:'100%',
        height:'auto',
        padding:10,
        borderRadius:10,
        backgroundColor: '#3e478c',
        marginBottom:10,
        flexDirection:'row',
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
});
