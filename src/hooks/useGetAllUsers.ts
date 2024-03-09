/* eslint-disable react-hooks/exhaustive-deps */
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {User as Users} from '../types';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const useGetAllUsers = () => {
  const [users, setUsers] = useState<Users[] | null>(null);
  const currentUser = auth().currentUser;

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const usersSnapshot = await firestore().collection('users').get();

      const user: Users[] = [];
      usersSnapshot.forEach(doc => {
        user.push({id: doc.id, ...doc.data()});
      });
      if (user.length) {
        const removeCurrentUserFromUsers = user.filter(
          item => item.name !== currentUser?.displayName,
        );

        setUsers(removeCurrentUserFromUsers);
      }

      return users;
    } catch (error) {
      Alert.alert('', 'Error getting users: ');
    }
  };
  return {getUsers, users};
};
