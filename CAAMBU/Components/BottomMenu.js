import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';


import Dashboard from './Dashboard';
import CampVigente from './CampVigente';
import CampCerrada from './CampCerrada';
import ClientOrders from './Donacion';
import NuevaDonacion from './NuevaDonacion';
import Settings from './Settings';
import ClientAccount from './ClientAccount';

const DashStack = createStackNavigator();

function DashBoardStackScreen () {
  return(
    <DashStack.Navigator screenOptions={{
      headerShown:true, 
      headerStyle: {
        backgroundColor: '#3e478c'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '800',
      },
      
      }}>
      <DashStack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Campañas'  }}/>
      <DashStack.Screen name="CampVigente" component={CampVigente} options={{ title: 'Campañas Vigentes'  }}/>
      <DashStack.Screen name="CampCerrada" component={CampCerrada} options={{ title: 'Campañas Cerradas'  }}/>
    
    </DashStack.Navigator>
  );
}

function DonacionStackScreen () {
  return(
    <DashStack.Navigator screenOptions={{
      headerShown:true, 
      headerStyle: {
        backgroundColor: '#3e478c'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '800',
      },
      
      }}>
      <DashStack.Screen name="ClientOrders" component={ClientOrders} options={{ title: 'Donaciones'  }}/>
      <DashStack.Screen name="NuevaDonacion" component={NuevaDonacion} options={{ title: 'Nueva Donacion'  }}/>
      <DashStack.Screen name="CampCerrada" component={CampCerrada} options={{ title: 'Campañas Cerradas'  }}/>
    
    </DashStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return(
    <SettingsStack.Navigator screenOptions={{
      headerShown:true, 
      headerStyle: {
        backgroundColor: '#3e478c'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '800',
      },
      
      }}>
      <SettingsStack.Screen name="Settings" component={Settings} options={{ title: 'Settings'  }}/>

    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const BottomMenu = () => {
    return (
        <Tab.Navigator screenOptions={{             
            headerShown: false,
            tabBarStyle:{
              position: 'absolute',
              backgroundColor: '#3e478c',
              height:60,
              paddingBottom:5,}}
              }>
            <Tab.Screen name="Dashboard" component={DashBoardStackScreen} options={{
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#9dcef2' : '#fff', fontSize: 12, fontWeight: 'bold' }}>Campañas</Text>
              ),
              tabBarIcon:({focused}) => (
                <View>
                 
                </View>
              ),
            }}/>


            <Tab.Screen name="ClientOrders" component={DonacionStackScreen} options={{
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#9dcef2' : '#fff', fontSize: 12, fontWeight: 'bold' }}>Donaciones</Text>
              ),
              tabBarIcon:({focused}) => (
                <View>
                  
                </View>
              ),
            }}/>

            
            <Tab.Screen name="Ajustes" component={SettingsStackScreen} options={{
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#9dcef2' : '#fff', fontSize: 12, fontWeight: 'bold' }}>Ajustes</Text>
              ),
              tabBarIcon:({focused}) => (
                <View>
                 
                </View>
              ),
            }}/>
            
        </Tab.Navigator>
    );  
}

export default BottomMenu