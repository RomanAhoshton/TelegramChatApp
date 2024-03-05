import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {RootStackNavigationProp} from '../../types';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <SafeAreaView>
      <Text>Login</Text>

      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('Register')}>
          go to Register
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
