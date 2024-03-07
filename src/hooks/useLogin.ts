import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {setUser} from '../redux/slices/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';

export const useLogin = () => {
  const [userValue, setUserValue] = useState({
    email: '',
    password: '',
  });
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const Login = () => {
    if (userValue.email && userValue.password !== '') {
      auth()
        .signInWithEmailAndPassword(userValue.email, userValue.password)
        .then(data => {
          if (data.user) {
            dispatch(
              setUser({
                name: data?.user.displayName,
                email: data?.user.email,
                photo: data?.user.photoURL,
                id: data.user.uid,
              }),
            );

            setUserValue({email: '', password: ''});
          }
        })
        .catch(error => {
          if (error.code) {
            Alert.alert('', error.code);
          }
        });
    } else {
      Alert.alert('', 'The form is not fully completed');
    }
  };
  return {userValue, setUserValue, Login, user};
};
