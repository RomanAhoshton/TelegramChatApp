import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {User} from '../../types';
import {colors} from '../../assets/colors';

interface Props {
  item: User;
}

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 60,
    marginRight: 20,
  },
  textLogo: {
    fontWeight: '500',
    fontSize: 40,
    color: colors.white,
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
    padding: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: '600',
    color: colors.white,
  },
});

export default ({item}: Props) => {
  console.log(item.photo);
  return (
    <>
      <View style={styles.userContainer}>
        {!item.photo ? (
          <View style={[styles.avatar, {backgroundColor: colors.violet}]}>
            <Text style={styles.textLogo}>{item?.name?.charAt(0)}</Text>
          </View>
        ) : (
          <Image
            source={{
              uri: item.photo,
            }}
            style={styles.avatar}
          />
        )}

        <Text style={styles.name}>{item.name}</Text>
      </View>
    </>
  );
};
