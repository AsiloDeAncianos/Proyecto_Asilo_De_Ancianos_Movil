import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function StartUp() {
    const navigation = useNavigation();
    const logIn = () => {
        navigation.navigate("LogIn");
    };

    const register = () => {
        navigation.navigate("Register");
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>CAAMBU</Text>
                </View>
            </View>
            
            
            <View style={styles.optionContainer}>
                <TouchableOpacity style={styles.optionButton} onPress={logIn}>
                    <Text style={styles.buttonText}>
                        Log In
                    </Text>
                </TouchableOpacity>

                <View style={styles.divider}>
                    <Text style={styles.textDivider}>
                        OR
                    </Text>
                </View>

                <TouchableOpacity style={styles.optionButton} onPress={register}>
                    <Text style={styles.buttonText}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>

            
        </View>
    ) 
    
    
}   

const styles = StyleSheet.create({ 
    mainContainer:{
        height:'100%',
        width:'100%',
        padding:25,
        backgroundColor:'#FFF',  
    },
    headerContainer:{
        marginTop:30,
        width:'100%',
        height:'auto',
        padding:10,
        backgroundColor:'transparent'
    },
    logoContainer:{
        marginTop:5,
        width:'100%',
        height:'auto',
        alignItems:'center',
    },
    logo:{
        width:100,
        height:100,
        backgroundColor:'transparent'
    },
    titleContainer:{
        width:'100%',
        height:'auto',
        backgroundColor:'transparent',
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'#2b2b2b'
    },
    optionContainer:{
        width:'100%',
        height:'auto',
        padding:20,
        alignItems:'center',
        marginTop:20,
    },
    optionButton:{
        width:'100%',
        height:50,
        borderRadius:10,
        padding:5,
        alignItems:'center',
        backgroundColor:'#3e478c',
        justifyContent:'center',
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FFF',
    },
    divider:{
        marginTop:2,
        marginBottom:2,
        width:'100%',
        height:'auto',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
    },
    dividerText:{
        fontSize:20,
        color:'#2b2b2b',
    },
    imageAdContainer:{
        marginTop:50,
        width:'100%',
        height:'auto',
        padding:15,
        alignItems:'center',
        justifyContent:'center',
    },
    adImage:{
        borderRadius:10,
        width:'100%',
        height:100,
    },
});