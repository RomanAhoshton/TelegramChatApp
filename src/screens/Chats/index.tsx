import {View, StyleSheet, FlatList} from 'react-native';
import {colors} from '../../assets/colors';
import Mertics from '../../assets/helpers';
import React from 'react';
import User from '../../components/User';
import {useGetChats} from '../../hooks/useGetChats';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.black,
    width: Mertics.width,
  },
});

export default () => {
  const {chats} = useGetChats();

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={chats}
        renderItem={({item}) => <User item={item} />}
        keyExtractor={item => item.id ?? ''}
      />
    </View>
  );
};
