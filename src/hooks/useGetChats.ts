import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {User} from '../types';
import {useSendMessage} from './useSendMessage';

export const useGetChats = () => {
  const [chats, setChats] = useState<User[]>([]);
  const {messageShipped} = useSendMessage();

  useEffect(() => {
    getChatsId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageShipped]);

  const getChatsId = async () => {
    const usersSnapshot = await firestore().collection('chats').get();
    usersSnapshot.forEach(async doc => {
      if (doc.data().chats) {
        const getChatIds = doc.data().chats.map((item: string) => item);
        if (getChatIds?.length) {
          createUsersChats(getChatIds);
        }
      }
    });
  };

  const createUsersChats = async (chatIds: string[]) => {
    const usersSnapshot = await firestore().collection('users').get();
    const loadedChats: User[] = [];

    usersSnapshot.forEach(doc => {
      if (chatIds.includes(doc.data().id)) {
        loadedChats.push(doc.data());
      }
    });

    setChats(prevChats => [...prevChats, ...loadedChats]);
  };

  return {getChatsId, chats};
};
