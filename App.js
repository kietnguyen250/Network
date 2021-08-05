import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-gesture-handler';
// require('react-native').unstable_enableLogBox();


export default function App() {
  
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
