import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import {RootStackNavigationProp} from '../../types';

import {icons} from '../../assets';
import {colors} from '../../assets/colors';

import SignForm from '../../components/SignForm';
import {useLogin} from '../../hooks/useLogin';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.dark,
    flex: 1,
  },

  container: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 75,
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
    marginTop: 30,
  },
  text: {color: colors.violet, fontSize: 22, fontWeight: '700'},
  toLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const {userValue, setUserValue, Login} = useLogin();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image source={icons.TDarkLogo} style={styles.logo} />
        </View>
        <Text style={styles.title}> Login in Telegram</Text>
        <SignForm
          userAction={Login}
          userValue={userValue}
          setUserValue={setUserValue}
          textButton="Login"
        />

        <Pressable
          style={styles.toLogin}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.text}> Back to Create Account</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
