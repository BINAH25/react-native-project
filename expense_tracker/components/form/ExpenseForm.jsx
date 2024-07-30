import React from 'react'
import { View } from 'react-native'
import Input from './Input'

const ExpenseForm = () => {

    const handleTitleChange = ()=>{
    }

    const handleDateChange = ()=>{
    }

    const handleAmountChange = ()=>{
    }

  return (
    <View>
        <Input 
        label="Title"
        textInputConfig={{
            multiline:true,
            onChangeText:handleTitleChange,
        }}
        />
        <Input 
        label="Date"
        textInputConfig={{
            placeholder:'YYYY-MM-DD',
            maxLength:10,
            onChangeText:handleDateChange,
            keyboardType:'number-pad'
        }}/>
        <Input 
        label="Amount"
        textInputConfig={{
            keyboardType:'decimal-pad',
            onChangeText:handleAmountChange,
        }}/>
    </View>
  )
}

export default ExpenseForm