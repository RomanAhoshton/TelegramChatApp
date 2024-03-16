import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  Platform,
  Image,
  Pressable,
  TextInput,
  FlatList,
} from 'react-native';
import {DetailScreenRouteProp} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import Mertics from '../../assets/helpers';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useSendMessage} from '../../hooks/useSendMessage';
import {useGetMessages} from '../../hooks/useGetMessages';
import Message from '../../components/Message';

interface ChatProps {
  route: DetailScreenRouteProp;
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 40,
    marginLeft: 'auto',
  },
  textLogo: {
    fontWeight: '500',
    fontSize: 20,
    color: colors.white,
  },

  name: {
    fontSize: 25,
    fontWeight: '600',
    color: colors.white,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.black,
    width: Mertics.width,
  },

  sendMessageForm: {
    height: 60,
    backgroundColor: colors.dark,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  messageInput: {
    minWidth: Mertics.width - 100,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.dark,
    borderColor: colors.violet,
    color: colors.white,
  },
  sendMessageBtn: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.violet,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  messages: {
    padding: 15,
  },
});

export default ({route}: ChatProps) => {
  const {item} = route.params;

  const navigation = useNavigation();
  const {messages} = useGetMessages(item.id as string);

  const {messageValue, setMessageValue, sendMessage} = useSendMessage();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.dark,
      },
      headerTitleStyle: {
        color: colors.white,
        fontSize: 20,
        fontWeight: '600',
      },
      headerBackTitleStyle: {
        color: colors.white,
      },
      headerTintColor: colors.white,
      headerTitleAlign: 'center',

      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => {
        return (
          <>
            {item.photo && Platform.OS === 'ios' ? (
              <Image
                source={{
                  uri: item.photo,
                }}
                style={styles.avatar}
              />
            ) : (
              <View style={[styles.avatar, {backgroundColor: colors.violet}]}>
                <Text style={styles.textLogo}>{item?.name?.charAt(0)}</Text>
              </View>
            )}
          </>
        );
      },

      // eslint-disable-next-line react/no-unstable-nested-components
      headerTitle: () => {
        return <Text style={styles.name}>{item.name}</Text>;
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString() ?? ''}
        renderItem={({item}) => <Message item={item} />}
        style={styles.messages}
        inverted
      />

      <View style={styles.sendMessageForm}>
        <TextInput
          style={styles.messageInput}
          placeholder="Message..."
          placeholderTextColor={colors.white}
          value={messageValue}
          onChangeText={text => setMessageValue(text)}
        />
        <Pressable
          style={styles.sendMessageBtn}
          onPress={() => sendMessage({item})}>
          <FontAwesomeIcon name="arrow-up" size={20} color={colors.white} />
        </Pressable>
      </View>
    </View>
  );
};
