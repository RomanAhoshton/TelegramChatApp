import React from 'react';
import {View, Text, StyleSheet, Image, Platform, Pressable} from 'react-native';
import {RootStackNavigationProp, User} from '../../types';
import {colors} from '../../assets/colors';
import {useRandomColor} from '../../hooks/useRandomColor';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigation/StackNavigation';

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
  const {randomColor} = useRandomColor();
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable
      onPress={() => navigation.navigate(ScreenNames.ChatScreen, {item})}>
      <View style={styles.userContainer}>
        {item.photo && Platform.OS === 'ios' ? (
          <Image
            source={{
              uri: item.photo,
            }}
            style={styles.avatar}
          />
        ) : (
          <View style={[styles.avatar, {backgroundColor: randomColor}]}>
            <Text style={styles.textLogo}>{item?.name?.charAt(0)}</Text>
          </View>
        )}

        <Text style={styles.name}>{item.name}</Text>
      </View>
    </Pressable>
  );
};
