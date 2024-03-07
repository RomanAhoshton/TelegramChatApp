import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Users, Chats, Profile} from '../../screens';
import {BottomTabs} from '../../types';
import {Text} from 'react-native';
import {colors} from '../../assets/colors';

export default () => {
  const Tab = createBottomTabNavigator<BottomTabs>();

  return (
    <Tab.Navigator
      initialRouteName="Users"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.dark,
          padding: 10,
          height: 70,
        },
        tabBarActiveTintColor: colors.violet,
        tabBarInactiveTintColor: colors.lightGrey,
      }}>
      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? colors.violet : colors.lightGrey,
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>
              Users
            </Text>
          ),
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTitleStyle: {
            color: colors.lightGrey,
            textTransform: 'uppercase',
          },
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? colors.violet : colors.lightGrey,
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>
              Chats
            </Text>
          ),
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTitleStyle: {
            color: colors.lightGrey,
            textTransform: 'uppercase',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? colors.violet : colors.lightGrey,
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>
              Profile
            </Text>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
