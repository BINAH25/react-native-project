import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../../components/buttons/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View>
        <TextInput/>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

export default StartGameScreen