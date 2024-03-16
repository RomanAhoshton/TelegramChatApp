import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register, Chat} from '../../screens';
import {RootStackParamList} from '../../types';
import TabNavigation from '../TabNavigation';
import auth from '@react-native-firebase/auth';

export enum ScreenNames {
  RegisterScreen = 'Register',
  LoginScreen = 'Login',
  TabNavigationScreen = 'TabNavigation',
  ProfileScreen = 'Profile',
  ChatsScreen = 'Chats',
  UsersScreen = 'Users',
  ChatScreen = 'Chat',
}

export default () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const currentUser = auth().currentUser;

  return (
    <Stack.Navigator
      initialRouteName={
        currentUser
          ? ScreenNames.TabNavigationScreen
          : ScreenNames.RegisterScreen
      }>
      <Stack.Screen
        name={ScreenNames.RegisterScreen}
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenNames.LoginScreen}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ScreenNames.ChatScreen} component={Chat} />
      <Stack.Screen
        name={ScreenNames.TabNavigationScreen}
        component={TabNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
