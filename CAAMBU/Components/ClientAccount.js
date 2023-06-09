import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const FindScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
        

        
    </View>
  );
}

export default FindScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    
    titleContainer:{
        width:'100%',
        height:'auto',
        marginTop:10,
        marginBottom:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'transparent',
    },
    scrollViewContainer:{
        width:'100%',
        height:'auto',
        marginTop:5,
        marginBottom:60,
        backgroundColor:'transparent'
    },
    textTitle:{
        color:'#2b2b2b',
        fontSize:25,
        fontWeight:'900',
    },
    logoImage:{
        width:50,
        height:50,
        marginRight:6
    },
    mainInfoInputsContainer:{
        width:'100%',
        height:'auto',
        padding:10
    },
    mainText:{
        color:'#636363',
        marginBottom:7
    },
    textInputsContainers:{
        width:'100%',
        height:50,
        padding:10,
        backgroundColor:'#d9d9d9',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:5, 
    },
    textInputs:{
        width:'90%',   
        height:50,
        fontSize:15,
        padding:10,
        backgroundColor:'#d9d9d9',
        borderRadius:10,
        color:'#000'
    },
    buttonPassword:{
        width:'100%',
        height:50,
        backgroundColor:'#F24E1E',
        borderRadius:10, 
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    textButton:{
        color:'#FFF',
        fontSize:20,
        fontWeight:'bold'
    },
    smallIcons:{
        width:20,
        height:20,
        tintColor:'#FFF',
        marginRight:3
    },
    inputIcons:{
        width:'10%',
        height:30,
        tintColor:'#5c5c5c',
    },
  });