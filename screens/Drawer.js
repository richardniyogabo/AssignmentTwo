import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './Tabs';
import Contact from './DrawerScreens/Contact';
import UpdateProfile from './DrawerScreens/UpdateProfile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={Tabs} options={{ 
                headerShown: true,
                title: 'Home'
            }} />
            <Drawer.Screen name="Support" component={Contact} options={{ 
                headerShown: true,
                title: 'Gallery',
                headerStyle: {
                    backgroundColor: 'transparent',
                },
            }} />
            <Drawer.Screen name="Profile" component={UpdateProfile} options={{ 
                headerShown: true,
                title: 'Profile'
            }} />
        </Drawer.Navigator>
    )
}

export default MyDrawer
