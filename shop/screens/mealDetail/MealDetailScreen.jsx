import React, { useEffect, useLayoutEffect } from 'react'
import {StyleSheet, View, Text ,Image} from 'react-native'
import { MEALS } from '../../data/data'
import MealDeatail from '../../components/mealDetail/MealDeatail'

const MealDetailScreen = ({route, navigation}) => {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId)


    useLayoutEffect(()=>{
        const MealTitle = MEALS.find((meal)=> meal.id === mealId).title
      
        navigation.setOptions({
          title:MealTitle
        })
    
    },[mealId,navigation])
    
  return (
    <View style={styles.mealItem}>
        <Image 
        source={{uri: selectedMeal.imageUrl}} 
        style={styles.image}/>
      <Text>{selectedMeal.title}</Text>
      <MealDeatail
      duration={selectedMeal.duration}
      complexity={selectedMeal.complexity}
      affordability={selectedMeal.affordability}/>
      <Text>Ingradient</Text>
      {selectedMeal.ingredients.map((ingradient)=>(
        <Text key={ingradient}>{ingradient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step)=>(
        <Text key={step}>{step}</Text>
      ))}
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    image: {
      width:"100%",
      height: 200
    },
    title:{
      fontSize: 18,
      textAlign:"center",
      fontWeight:'bold',
      margin:8
    },
    mealItem:{
      overflow:'hidden',
      backgroundColor:'white',
      borderRadius:8,
      margin:16
    },
    buttonPressed:{
      opacity:0.25,
  },
  });