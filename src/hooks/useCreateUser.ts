import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const useCreateUser = () => {
  const [userValue, setUserValue] = useState({
    email: '',
    password: '',
  });

  const createUser = () => {
    if (userValue.email && userValue.password !== '') {
      auth()
        .createUserWithEmailAndPassword(userValue.email, userValue.password)
        .then(data => {
          if (data.user) {
            Alert.alert('', 'Your account has been created');

            setUserValue({email: '', password: ''});
          }
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('', 'That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('', 'That email address is invalid!');
          }
        });
    } else {
      Alert.alert('', 'The form is not fully completed');
    }
  };
  return {userValue, setUserValue, createUser};
};
