import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {RootStackNavigationProp} from '../../types';
import auth from '@react-native-firebase/auth';

export default () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const createAccount = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(data => {
        console.log('User account created & signed in!', data);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text onPress={createAccount}>Register</Text>

      <View>
        <Text
          style={{color: 'red', marginTop: 100}}
          onPress={() => navigation.navigate('Login')}>
          go to Login
        </Text>
      </View>
    </SafeAreaView>
  );
};
