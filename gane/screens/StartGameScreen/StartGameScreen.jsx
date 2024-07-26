import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../../components/buttons/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.inputNumber} 
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}/>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Confirm</PrimaryButton>
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
  