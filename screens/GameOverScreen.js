import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';

function GameOverScreen() {
  return (
    <View style={stlyes.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={stlyes.imageContainer}>
        <Image
          style={stlyes.image}
          source={require('../assets/images/success.png')}
        />
      </View>
    </View>
  );
}

export default GameOverScreen;

const stlyes = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
