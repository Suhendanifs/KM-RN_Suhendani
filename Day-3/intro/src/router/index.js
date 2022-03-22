/* eslint-disable prettier/prettier */
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, ListMobil, Akun} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {moderateScale} from 'react-native-size-matters';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  const Icon = ({name, focused}) => {
    return (
      <Feather
        name={name}
        color={focused ? 'blue' : 'grey'}
        size={moderateScale(23)}
      />
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          height: moderateScale(50),
          paddingVertical: moderateScale(6),
        },
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => <Icon name="home" focused={focused} />,
          title: 'Home',
          tabBarLabelStyle: {
            fontSize: moderateScale(12),
          },
        }}
      />
      <Tab.Screen
        name="list"
        component={ListMobil}
        options={{
          tabBarIcon: ({focused}) => <Icon name="list" focused={focused} />,
          title: 'Daftar Mobil',
          tabBarLabelStyle: {
            fontSize: moderateScale(12),
          },
        }}
      />
      <Tab.Screen
        name="users"
        component={Akun}
        options={{
          tabBarIcon: ({focused}) => <Icon name="users" focused={focused} />,
          title: 'Akun',
          tabBarLabelStyle: {
            fontSize: moderateScale(12),
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
