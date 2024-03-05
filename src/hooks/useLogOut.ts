import {useDispatch} from 'react-redux';
import {removeUser} from '../redux/slices/userSlice';

export const useLogOut = () => {
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(removeUser());
  };

  return {LogOut};
};
