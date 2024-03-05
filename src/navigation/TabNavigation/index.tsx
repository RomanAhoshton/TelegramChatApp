import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Users, Chats, Profile} from '../../screens';
import {BottomTabs} from '../../types';

export default () => {
  const Tab = createBottomTabNavigator<BottomTabs>();

  return (
    <Tab.Navigator initialRouteName="Users">
      <Tab.Screen name="Users" component={Users} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
