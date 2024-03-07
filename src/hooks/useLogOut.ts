import {useDispatch} from 'react-redux';
import {removeUser} from '../redux/slices/userSlice';
import auth from '@react-native-firebase/auth';

export const useLogOut = () => {
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(removeUser());
    auth().signOut();
  };

  return {LogOut};
};
