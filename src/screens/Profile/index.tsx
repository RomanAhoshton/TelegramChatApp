import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useLogOut} from '../../hooks/useLogOut';

const styles = StyleSheet.create({
  logOut: {
    marginTop: 100,
  },

  text: {
    fontSize: 30,
    fontWeight: '700',
  },
});

export default () => {
  const {LogOut} = useLogOut();

  return (
    <View>
      <Text>Profile</Text>

      <Pressable style={styles.logOut} onPress={LogOut}>
        <Text style={styles.text}>LogOut</Text>
      </Pressable>
    </View>
  );
};
