import React from 'react'
import { View, Text } from 'react-native'

const MealDetailScreen = ({route}) => {
    const mealId = route.params.mealId
  return (
    <View>
      <Text>This is meal detail {mealId}</Text>
    </View>
  )
}

export default MealDetailScreen
