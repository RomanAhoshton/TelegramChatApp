import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Message} from '../../types';
import {colors} from '../../assets/colors';
import auth from '@react-native-firebase/auth';

interface Props {
  item: Message;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  senderMessageContainer: {
    backgroundColor: colors.violet,
    alignSelf: 'flex-end',
  },
  receiverMessageContainer: {
    backgroundColor: colors.lightGrey,
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 20,
    color: colors.white,
  },
  timestamp: {
    marginLeft: 10,
    color: colors.white,
    fontSize: 15,
    alignSelf: 'flex-end',
  },
});

const MessageItem = ({item}: Props) => {
  const currentUserId = auth().currentUser?.uid;

  const isCurrentUser = item.sender === currentUserId;

  return (
    <View
      style={[
        styles.container,
        isCurrentUser ? {justifyContent: 'flex-end'} : null,
      ]}>
      <View
        style={[
          styles.messageContainer,
          isCurrentUser
            ? styles.senderMessageContainer
            : styles.receiverMessageContainer,
        ]}>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.timestamp}>
          {new Date(`${item?.timestamp}`).toLocaleTimeString('en-US', {
            hour12: false,
          })}
        </Text>
      </View>
    </View>
  );
};

export default MessageItem;
