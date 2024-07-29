import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'
import { GlobalStyles } from '../../constants/styles'

const DUMMY_EXPENSES = [
    {
        id:'e1',
        title:"a pair of shoes",
        amount:59.88,
        date: new Date('2024-06-19')
    },
    {
        id:'e2',
        title:"a pair of trousers",
        amount:69.58,
        date: new Date('2024-07-19')
    },
    {
        id:'e3',
        title:"Macbook Pro",
        amount:69.58,
        date: new Date('2024-07-29')
    },
]
 
const ExpensesOutput = ({expenses, periodName}) => {
  return (
    <View style={styles.container}>
        <ExpensesSummary 
        expenses={DUMMY_EXPENSES}
        periodName={periodName}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary700
    },
});
