import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';


import HomeScreen from './HomeScreen'; 
import CameraScreen from './CameraScreen'; 
import SettingScreen from './SettingScreen';

const Tab = createBottomTabNavigator(); 

export default function IndexNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Camera" component={CameraScreen}/>
        <Tab.Screen name="Setting" component={SettingScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}
