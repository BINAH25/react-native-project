import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/Game/GameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState()
  
  const handlerUserNumberChange = (number)=>{
    setUserNumber(number)
  }
  
  let screen = <StartGameScreen onChange={handlerUserNumberChange}/>
  if(userNumber){
    screen = <GameScreen/>
  }
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.container}>
      <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.backgroudImage}>
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroudImage:{
    opacity:0.25
  }
});
