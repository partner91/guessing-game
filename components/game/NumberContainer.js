import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 450 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 450 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 450 ? 28 : 32,
    fontFamily: 'open-sans-bold',
  },
});
