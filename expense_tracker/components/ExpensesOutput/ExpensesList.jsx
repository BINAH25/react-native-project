import React from 'react'
import { View, FlatList, Text } from 'react-native'
import ExpensesItem from './ExpensesItem'


const renderExpenses = (itemData)=>{
    const item = itemData.item
    return(
        <ExpensesItem 
        title={item.title}
        date={item.date}
        amount={item.amount}/>
    )
}

const ExpensesList = ({expenses}) => {
  return (
    <View>
        <FlatList 
        data={expenses}
        renderItem={renderExpenses}
        keyExtractor={(item) => item.id}/>
    </View>
  )
}

export default ExpensesList