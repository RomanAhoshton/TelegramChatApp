import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Message} from '../types';

export const useGetMessages = (chatId: string) => {
  const [messages, setMessages] = useState<Message[] | null>(null);

  useEffect(() => {
    if (chatId) {
      const unsubscribe = firestore()
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          const messagesData: any = snapshot.docs.map(doc => {
            const data = doc.data();
            console.log(data, 'data from get messages');
            return {
              id: doc.id,
              sender: data.sender,
              text: data.text,
              timestamp: data.timestamp ? data.timestamp.toDate() : null,
            };
          });
          setMessages(messagesData);
        });

      return () => unsubscribe();
    }
  }, [chatId]);

  return {messages};
};
