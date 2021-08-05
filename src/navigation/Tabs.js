import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
// Typescript
import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions, // optional
} from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../screens/HomeScreen/index';
import Cart from '../screens/CartScreen/index';
import Profile from '../screens/Profile/index';
import Login from '../screens/LoginScreen/index';

const Tabs = AnimatedTabBarNavigator();
export default () => {
  return (
    <Tabs.Navigator
      // default configuration from React Navigation
      tabBarOptions={{
        activeTintColor: '#2F7C6E',
        inactiveTintColor: '#222222',
      }}>
      
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="home"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="shopping-cart"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="user"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
{/* 
      <Tabs.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="user"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
              color={color}
            />
          ),
        }}
      /> */}

    </Tabs.Navigator>
  );
};

// export default Tabs;

// const styles = StyleSheet.create({});
