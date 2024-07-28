import React, { useEffect, useLayoutEffect } from 'react'
import {StyleSheet, View, Text ,Image,ScrollView} from 'react-native'
import { MEALS } from '../../data/data'
import MealDeatail from '../../components/mealDetail/MealDeatail'
import ListDetail from '../../components/mealDetail/ListDetail'

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
    <ScrollView>
        <Image 
        source={{uri: selectedMeal.imageUrl}} 
        style={styles.image}/>
      <Text  style={styles.title}>{selectedMeal.title}</Text>
      <MealDeatail
      duration={selectedMeal.duration}
      complexity={selectedMeal.complexity}
      affordability={selectedMeal.affordability}/>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Ingradient</Text>
      </View>
      <ListDetail data={selectedMeal.ingredients}/>
     
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Steps</Text>
      </View>
      <ListDetail data={selectedMeal.steps}/>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    image: {
      width:"100%",
      height: 350
    },
    title:{
      fontSize: 18,
      textAlign:"center",
      fontWeight:'bold',
      margin:8
    },
    subTitle:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    },
    subTitleContainer:{
        padding:6,
        marginHorizontal:24,
        marginVertical:4,
        borderBottomColor:'#ccc',
        borderBottomWidth:2
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