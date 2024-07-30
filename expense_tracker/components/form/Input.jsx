import React from 'react'
import { StyleSheet,View, TextInput, Text } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

const Input = ({label, textInputConfig}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} {...textInputConfig}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        marginHorizontal:4,
        marginVertical:16
    },
    label:{
        color: GlobalStyles.colors.primary100,
        fontSize:12,
        marginBottom:4
    },
    input:{
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding:6,
        fontSize:18,
        borderRadius:6
    }
  });
  