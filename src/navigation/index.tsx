import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import TabNavigation from './TabNavigation';
import {useLogin} from '../hooks/useLogin';

const Navigator = () => {
  const {user} = useLogin();
  return (
    <NavigationContainer>
      {user !== null ? <TabNavigation /> : <StackNavigation />}
    </NavigationContainer>
  );
};

export default Navigator;
