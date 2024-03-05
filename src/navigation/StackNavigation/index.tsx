import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register} from '../../screens';
import {RootStackParamList} from '../../types';

export default () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
