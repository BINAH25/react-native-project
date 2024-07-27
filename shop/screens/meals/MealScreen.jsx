import React from 'react'
import { View, StyleSheet,Text, FlatList } from 'react-native'
import { MEALS } from '../../data/data'
import MealItems from '../../components/meal/MealItems'

const MealScreen = ({route}) => {

  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId) >= 0

  })


  const mealItems = (dataItem)=>{
    const item = dataItem.item

    const mealItemsProps = {
      title:item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity : item.complexity,
      affordability: item.affordability
    }
    return <MealItems {...mealItemsProps}/>
  }

  return (
    <View style={styles.container}>
        <FlatList data={displayedMeals}
        keyExtractor={(item)=> item.id}
        renderItem={mealItems}/>
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