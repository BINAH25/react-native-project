import React from 'react'
import { View, StyleSheet,Text } from 'react-native'
import { MEALS } from '../../data/data'

const MealScreen = ({route}) => {
    const catId = route.params.categoryId
  return (
    <View style={styles.container}>
        <Text>
            Meal Overview - {catId}
        </Text>
      
    </View>
  )
}

export default MealScreen


const styles = StyleSheet.create({
    container: {
     flex:1,
     padding:16
    },
  });