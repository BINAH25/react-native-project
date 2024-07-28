import React, { useEffect, useLayoutEffect } from 'react'
import { View, StyleSheet,Text, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../../data/data'
import MealItems from '../../components/meal/MealItems'

const MealScreen = ({route,navigation}) => {

  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId) >= 0

  })

  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title
  
    navigation.setOptions({
      title:categoryTitle
    })

  },[catId,navigation])

  const mealItems = (dataItem)=>{
    const item = dataItem.item

    const mealItemsProps = {
      id: item.id,
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