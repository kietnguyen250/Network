import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/LoginScreen/index';
import Register from '../screens/RegisterScreen/index';
import Home from '../screens/HomeScreen/index';
import Forgot from '../screens/ForgotPass/index';
import Tabs from './Tabs';
import Detail from '../screens/DetailScreen/index';
import Insert from '../screens/InsertScreen/index';
import Update from '../screens/UpdateScreen/index';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
        headerLeftContainerStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: 'rgba(92,90,91,0.7)',
          alignItems: 'center',
          marginLeft: 10,
          marginTop: 5,
        },
      }}>
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="Plash"
        component={Plash}
      /> */}
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Forgot"
        component={Forgot}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Insert"
        component={Insert}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Update"
        component={Update}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
});

export default AppNavigator;
