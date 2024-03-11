import {View, StyleSheet, FlatList} from 'react-native';
import {useGetAllUsers} from '../../hooks/useGetAllUsers';
import {colors} from '../../assets/colors';
import Mertics from '../../assets/helpers';
import React from 'react';
import User from '../../components/User';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.black,
    width: Mertics.width,
  },
});

export default () => {
  const {users} = useGetAllUsers();

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={users}
        renderItem={({item}) => <User item={item} />}
        keyExtractor={item => item.id ?? ''}
      />
    </View>
  );
};
