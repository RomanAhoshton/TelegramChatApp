import {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {User} from '../types';
import {Alert} from 'react-native';

interface Props {
  item: User;
}

export const useSendMessage = () => {
  const [messageValue, setMessageValue] = useState('');
  const [messageShipped, setMessageShipped] = useState(false);
  const currentUser = auth().currentUser;

  const sendMessage = async ({item}: Props) => {
    try {
      if (currentUser?.uid && item.id && messageValue.trim() !== '') {
        const chatRef = firestore().collection('chats').doc(item.id);
        const chatDoc = await chatRef.get();

        if (!chatDoc.exists) {
          await chatRef.set({
            chats: [item.id],
          });
        }

        const messagesRef = chatRef.collection('messages');

        const result = await messagesRef.add({
          sender: currentUser.uid,
          text: messageValue,
          timestamp: firestore.FieldValue.serverTimestamp(),
        });
        if (result) {
          setMessageValue('');
          setMessageShipped(true);
        }
      }
    } catch (error) {
      Alert.alert('', `Error sending message`);
    }
  };

  return {sendMessage, messageValue, setMessageValue, messageShipped};
};
