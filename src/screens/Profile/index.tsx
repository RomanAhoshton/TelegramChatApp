import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, StyleSheet, Image, Platform} from 'react-native';
import {useLogOut} from '../../hooks/useLogOut';
import {colors} from '../../assets/colors';
import auth from '@react-native-firebase/auth';
import Mertics from '../../assets/helpers';
import {useAvatar} from '../../hooks/useAvatar';
import {useRandomColor} from '../../hooks/useRandomColor';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.black,
    width: Mertics.width,
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 150,
    marginBottom: 10,
  },

  container: {
    padding: 75,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logOut: {
    marginTop: 100,
  },

  text: {
    fontSize: 30,
    fontWeight: '700',
  },
  textLogo: {
    fontWeight: '500',
    fontSize: 50,
    color: colors.white,
  },
  name: {
    marginTop: 25,
    fontSize: 30,
    color: colors.white,
  },
  email: {
    marginTop: 25,
    fontSize: 20,
    color: colors.white,
  },
  button: {
    backgroundColor: colors.violet,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  textB: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
  },

  upload: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.violet,
  },
});

export default () => {
  const currentUser = auth().currentUser;
  const [imagePath, setImagePath] = useState<string | null | undefined>(null);

  const {LogOut} = useLogOut();
  const {selectImage, imageUrl} = useAvatar();

  useEffect(() => {
    setImagePath(currentUser?.photoURL);
  }, [currentUser?.photoURL, imageUrl]);

  const {randomColor} = useRandomColor();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {Platform.OS === 'ios' && imagePath ? (
          <Image
            source={{
              uri: imagePath,
            }}
            style={styles.avatar}
          />
        ) : (
          <View style={[styles.avatar, {backgroundColor: randomColor}]}>
            <Text style={styles.textLogo}>
              {currentUser?.displayName?.charAt(0)}
            </Text>
          </View>
        )}

        <Pressable onPress={selectImage} style={{marginTop: 20}}>
          <Text style={styles.upload}>Upload avatar</Text>
        </Pressable>

        {currentUser?.displayName && (
          <Text style={styles.name}>{currentUser.displayName}</Text>
        )}
        <Text style={styles.email}>{currentUser?.email}</Text>
        <Pressable style={styles.button} onPress={LogOut}>
          <Text style={styles.textB}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};
