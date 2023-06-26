import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './TabScreens/Home';
import Message from './TabScreens/Message';
import Account from './TabScreens/Account';


const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return (
    <Tab.Navigator 
        shifting={true}
        initialRouteName="Home"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: '#7fc7b4' }}
    >
      <Tab.Screen 
        name="Message" 
        component={Message} 
        options={{
            tabBarLabel: 'Messages',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="email" color={color} size={26} />
            ),
        }}  
      />
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-variant" color={color} size={26} />
            ),
        }}  
      />
      <Tab.Screen 
        name="Account" 
        component={Account}
        options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={26} />
            ),
        }}   
      />
    </Tab.Navigator>
    )
}

export default Tabs
