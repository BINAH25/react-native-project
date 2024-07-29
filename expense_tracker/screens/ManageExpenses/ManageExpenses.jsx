import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import IconButton from '../../components/button/IconButton'
import { GlobalStyles } from '../../constants/styles'
import Button from '../../components/button/Button'

const ManageExpenses = ({route, navigation}) => {
  const expenseId = route.params?.expenseId
  const isEditing = !!expenseId

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: isEditing ? "Edit Expense" :"Add Expense"
    })

  },[navigation,isEditing])

  const handleDelete = ()=>{

  }
  const handleCancel = ()=>{

  }
  const handleConfirm = ()=>{

  }


  return (
    <View style={styles.container}> 
    <View style={styles.buttons}>
      <Button style={styles.button} mode='flat' onPress={handleCancel}> Cancel</Button>
      <Button  style={styles.button} onPress={handleConfirm}> {isEditing ? "Update" : "Add"}</Button>
    </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton 
          icon='trash' 
          color={GlobalStyles.colors.error500}
          size={24}
          onPress={handleDelete}/>
        </View>
      )}

    </View>
      
  )
}

export default ManageExpenses

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  deleteContainer:{
    marginTop:16,
    paddingTop:8,
    borderTopWidth:2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems:'center'
  },
  buttons:{
    flexDirection: "row",
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    minWidth:120,
    marginHorizontal:8
  }
});
