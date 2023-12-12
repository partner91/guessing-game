import { Text, StyleSheet, Platform } from 'react-native';
import Colors from '../../constants/Colors';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 0 : 2,
    borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderColor: Colors.accent500,
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontFamily: 'open-sans-bold',
    maxWidth: '80%',
  },
});
