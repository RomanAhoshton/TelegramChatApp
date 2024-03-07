import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {RootStackNavigationProp} from '../../types';

import {icons} from '../../assets';
import {colors} from '../../assets/colors';

import SignForm from '../../components/SignForm';
import {useCreateUser} from '../../hooks/useCreateUser';
import Mertics from '../../assets/helpers';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.dark,
    flex: 1,
    width: Mertics.width,
  },

  container: {
    padding: 20,
  },

  logo: {width: 150, height: 150, alignSelf: 'center'},
  logoWrapper: {
    backgroundColor: colors.violet,
    width: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 23,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: colors.violet,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
  },
  toLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
});

export default () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const {userValue, setUserValue, createUser, isLoading} = useCreateUser();

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image source={icons.TDarkLogo} style={styles.logo} />
        </View>
        <Text style={styles.title}> Create account in Telegram</Text>
        {isLoading && <ActivityIndicator size="large" color={colors.violet} />}
        <SignForm
          userValue={userValue}
          setUserValue={setUserValue}
          userAction={createUser}
          textButton="Create Account"
        />

        <Pressable
          style={styles.toLogin}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}> Already have account ? Log in</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
