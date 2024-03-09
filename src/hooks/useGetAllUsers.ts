import firestore from '@react-native-firebase/firestore';

export const useGetAllUsers = () => {
  const getUsers = () => {
    const users = firestore().collection('users').get();
    console.log(users, 'users');
  };
  return {getUsers};
};
