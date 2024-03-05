/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, TextInput, Pressable, Text} from 'react-native';
import {colors} from '../../assets/colors';

const styles = StyleSheet.create({
  form: {},
  input: {
    height: 50,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderColor: colors.grey,
    borderRadius: 10,
    color: colors.white,
    fontSize: 20,
    marginBottom: 20,
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
});

interface userValue {
  email: string;
  password: string;
}

interface Props {
  userValue: userValue;
  setUserValue: (arg: userValue) => void;
  userAction: () => void;
  textButton: string;
}

export default ({userValue, setUserValue, userAction, textButton}: Props) => {
  return (
    <View style={styles.form}>
      <TextInput
        style={[styles.input, {marginTop: 50}]}
        onChangeText={text =>
          setUserValue({password: userValue.password, email: text})
        }
        value={userValue.email}
        placeholder="Email"
        placeholderTextColor={colors.white}
        cursorColor={colors.violet}
      />
      <TextInput
        style={styles.input}
        onChangeText={text =>
          setUserValue({email: userValue.email, password: text})
        }
        value={userValue.password}
        placeholder="Password"
        placeholderTextColor={colors.white}
        cursorColor={colors.violet}
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={userAction}>
        <Text style={styles.textB}>{textButton}</Text>
      </Pressable>
    </View>
  );
};
