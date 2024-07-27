import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../../components/buttons/PrimaryButton';

const StartGameScreen = () => {
    const [number, setNumber] = useState('')

    const handleNumberChange = (number)=>{
        setNumber(number)
    }

    const resetNumber = ()=>{
        setNumber('')
    }


    const confirmNumber = ()=>{
        const chosenNumber = parseInt(number)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid number',
                'number must be between 1 and 99',
                [{ text:'Okay',style:'destructive',onPress: resetNumber}]
            )
            return
        }
        console.log(chosenNumber)
    }

  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.inputNumber} 
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        value={number}
        onChangeText={handleNumberChange}
        autoCorrect={false}/>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmNumber}>Confirm</PrimaryButton>
            </View>

        </View>
    </View>
  )
}

export default StartGameScreen


const styles = StyleSheet.create({
    inputContainer: {
      backgroundColor: '#4e0329',
      marginTop:100,
      padding:16,
      marginHorizontal:24,
      borderRadius:6,
      elevation:4,
      shadowColor:'black',
      ShadowOffset:{width:0,height:2},
      shadowRadius:6,
      shadowOpacity:0.25

    },
    inputNumber:{
        height: 50,
        fontSize:32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }
  });
  