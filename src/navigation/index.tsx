import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import TabNavigation from './TabNavigation';

const Navigator = () => {
  const isAuth = false;
  return (
    <NavigationContainer>
      {isAuth ? <TabNavigation /> : <StackNavigation />}
    </NavigationContainer>
  );
};

export default Navigator;
