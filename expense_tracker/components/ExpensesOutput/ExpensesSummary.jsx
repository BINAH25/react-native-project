import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

const ExpensesSummary = ({expenses, periodName}) => {
    const total = expenses.reduce((sum, expense)=>{
        return sum + expense.amount
    },0)

  return (
    <View style={styles.container}>
        <Text style={styles.textPeriod}>{periodName}</Text>
        <Text style={styles.textSum}>${total.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary


const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderRadius:6,
        backgroundColor: GlobalStyles.colors.primary50,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textPeriod:{
        fontSize:12,
        color:GlobalStyles.colors.primary400
    },
    textSum:{
        fontSize:16,
        fontWeight:'bold',
        color: GlobalStyles.colors.primary500,
    }
  });
  