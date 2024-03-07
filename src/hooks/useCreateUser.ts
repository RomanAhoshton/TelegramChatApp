import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {userFormValue} from '../types';

export const useCreateUser = () => {
  const [userValue, setUserValue] = useState<userFormValue>({
    email: '',
    password: '',
    name: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const createUser = () => {
    setIsLoading(true);
    if (userValue.email && userValue.password && userValue.name !== '') {
      auth()
        .createUserWithEmailAndPassword(userValue.email, userValue.password)
        .then(data => {
          if (data.user) {
            data.user.updateProfile({
              displayName: userValue.name,
            });
            Alert.alert('', 'Your account has been created');

            setUserValue({email: '', password: '', name: ''});
            setIsLoading(false);
          }
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('', 'That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('', 'That email address is invalid!');
          }
          setIsLoading(false);
        });
    } else {
      Alert.alert('', 'The form is not fully completed');
    }
  };
  return {userValue, setUserValue, createUser, isLoading};
};
