import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={stlyes.listItem}>
      <Text style={stlyes.itemText}>Opponent's Guess: {guess}</Text>
      <Text style={stlyes.itemText}>#{roundNumber}</Text>
    </View>
  );
}

export default GuessLogItem;

const stlyes = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});
