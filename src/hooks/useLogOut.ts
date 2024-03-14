import {useDispatch} from 'react-redux';
import {removeUser} from '../redux/slices/userSlice';
import auth from '@react-native-firebase/auth';
import {ScreenNames} from '../navigation/StackNavigation';
import {useNavigation} from '@react-navigation/native';

export const useLogOut = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(removeUser());
    auth().signOut();
    navigation.navigate(ScreenNames.RegisterScreen as never);
  };

  return {LogOut};
};
