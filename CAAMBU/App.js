import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import SplashScreen from './Components/SplashScreen';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
//import StartUp from './Components/StartUp';
//import Settings from './Components/Settings';
import { View, LogBox } from "react-native";
 
import { QRCode } from 'expo-qr-code';

export default function App() {
  const downloadLink = "https://github.com/AsiloDeAncianos"; // Reemplaza con tu enlace de descarga
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <QRCode
        value={downloadLink}
        size={200}
        bgColor="black"
        fgColor="white"
      />
    </View>
  );
}


LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

export default function App(){
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      
        <Stack.Screen name="StartUp" component={StartUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};





