import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const FindScreen = ({navigation}) => {

    const navi = useNavigation();

    const goNewDonation = () => {
        navi.navigate("NuevaDonacion");
        console.log("Campañas Vigentes" )  
    }


    return(
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.optionsContainer} onPress={goNewDonation}>
                <Text style={styles.textOpt}>Donar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionsContainer} >
                <Text style={styles.textOpt}>Donaciones Pasadas</Text>
            </TouchableOpacity>

            
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