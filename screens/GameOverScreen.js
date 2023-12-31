import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Title from '../components/ui/Title.ios';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={stlyes.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={stlyes.imageContainer}>
        <Image
          style={stlyes.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={stlyes.summaryText}>
        Your phone needed <Text style={stlyes.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={stlyes.highlight}>{userNumber}</Text> .
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const stlyes = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 24,
    fontFamily: 'open-sans',
    textAlign: 'center',
    marginVertical: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
