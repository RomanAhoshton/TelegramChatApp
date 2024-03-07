import {Text, ScrollView, StyleSheet} from 'react-native';
import Mertics from '../../assets/helpers';
import {colors} from '../../assets/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.black,
    width: Mertics.width,
  },
});

export default () => {
  return (
    <ScrollView style={styles.wrapper}>
      <Text>Chats</Text>
    </ScrollView>
  );
};
