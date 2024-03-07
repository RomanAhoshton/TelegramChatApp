import {ScrollView, StyleSheet, Text} from 'react-native';
import {useGetAllUsers} from '../../hooks/useGetAllUsers';
import {colors} from '../../assets/colors';
import Mertics from '../../assets/helpers';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.black,
    width: Mertics.width,
  },
});

export default () => {
  const {getUsers} = useGetAllUsers();

  return (
    <ScrollView style={styles.wrapper}>
      <Text onPress={getUsers}>Users</Text>
    </ScrollView>
  );
};
