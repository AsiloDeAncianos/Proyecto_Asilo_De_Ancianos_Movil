import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserIdProvider } from './Components/UserIdContext';


import SplashScreen from './Components/SplashScreen';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import StartUp from './Components/StartUp';
import Settings from './Components/Settings';

import { View, LogBox } from "react-native";
 
LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

export default function App(){
  console.disableYellowBox = true;
  return (
    <UserIdProvider>
       <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="StartUp" component={StartUp} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
      </NavigationContainer>
    </UserIdProvider>
   
  );
};