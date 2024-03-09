import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {userFormValue} from '../types';
import firestore from '@react-native-firebase/firestore';

export const useCreateUser = () => {
  const [userValue, setUserValue] = useState<userFormValue>({
    email: '',
    password: '',
    name: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const createUser = async () => {
    setIsLoading(true);
    if (userValue.email && userValue.password && userValue.name !== '') {
      try {
        const {user} = await auth().createUserWithEmailAndPassword(
          userValue.email,
          userValue.password,
        );
        await user.updateProfile({
          displayName: userValue.name,
        });

        if (user) {
          await firestore().collection('users').doc(user.uid).set({
            name: userValue.name,
            email: user.email,
            photo: user.photoURL,
            id: user.uid,
          });

          Alert.alert('', 'Your account has been created');
          setUserValue({email: '', password: '', name: ''});
          setIsLoading(false);
        }
      } catch (error) {
        const err = error as any;
        Alert.alert('', err.code);
        setIsLoading(false);
      }
    } else {
      Alert.alert('', 'The form is not fully completed');
    }
  };
  return {userValue, setUserValue, createUser, isLoading};
};
