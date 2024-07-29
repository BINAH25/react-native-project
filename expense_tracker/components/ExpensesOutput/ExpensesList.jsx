import React from 'react'
import { View, FlatList, Text } from 'react-native'


const renderExpenses = (itemData)=>{
    const item = itemData.item
    return(
        <View>
            <Text>{item.title}</Text>
        </View>
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