import firestore from '@react-native-firebase/firestore';

export const useGetAllUsers = () => {
  const getUsers = () => {
    firestore()
      .collection('collection')
      .onSnapshot(querySnapshot => {
        console.log(querySnapshot, 'sssssssss');
      });
  };
  return {getUsers};
};
