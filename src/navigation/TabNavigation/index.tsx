import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Users, Chats, Profile} from '../../screens';
import {BottomTabs} from '../../types';
import {Text} from 'react-native';
import {colors} from '../../assets/colors';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default () => {
  const Tab = createBottomTabNavigator<BottomTabs>();

  return (
    <Tab.Navigator
      initialRouteName="Profile"
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
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarLabel: ({focused}) => (
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: focused ? colors.violet : colors.lightGrey,
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>
              Users
            </Text>
          ),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              name="users"
              size={25}
              color={focused ? colors.violet : colors.lightGrey}
            />
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
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              name="wechat"
              size={25}
              color={focused ? colors.violet : colors.lightGrey}
            />
          ),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarLabel: ({focused}) => (
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
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
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarLabel: ({focused}) => (
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: focused ? colors.violet : colors.lightGrey,
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>
              Profile
            </Text>
          ),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              name="user-circle"
              size={25}
              color={focused ? colors.violet : colors.lightGrey}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
