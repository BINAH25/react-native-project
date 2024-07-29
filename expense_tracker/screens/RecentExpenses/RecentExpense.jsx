import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import ExpensesOutput from '../../components/ExpensesOutput/ExpensesOutput'

const RecentExpense = () => {
  return (
    <ExpensesOutput periodName="Last 7 Days"/> 
  )
}

export default RecentExpense
