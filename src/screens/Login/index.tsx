import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
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
      <ScrollView style={styles.container}>
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
      </ScrollView>
    </SafeAreaView>
  );
};
