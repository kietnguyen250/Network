import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TabBar from 'enhanced-fluid-bottom-navigation-bar';

const FluidTabBar  = () => {
    return (
        <TabBar
        onPress={tabIndex => {
          const route = this.props.navigation.state.routes[tabIndex];
          this.props.onTabPress({route});
        }}
        values={[
          {
            title: 'Tab 1',
            icon: 'star',     
            iconSet: 'MaterialIcons',
            size: 32          
          }, {
            title: 'Tab 2',
            icon: 'check',     
            iconSet: 'AntDesign',
            size: 32          
          }
        ]}
      />
    );
}

export default FluidTabBar;

