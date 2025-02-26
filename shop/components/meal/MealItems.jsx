import React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDeatail from '../mealDetail/MealDeatail'

const MealItems = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id
}) => {

  const navigation = useNavigation()
  const handleMealItem = ()=>{
    navigation.navigate('MealDetail',{mealId:id})
  }

  return (
    <View style={styles.mealItem}>
      <Pressable 
      style={({pressed})=> (pressed ? styles.buttonPressed: null)}
      onPress={handleMealItem}
      android_ripple={{color:'#ccc'}}>
        <View>
          <Image 
          source={{uri:imageUrl}} style={styles.image}/>
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDeatail 
        duration={duration}
        complexity={complexity}
        affordability={affordability}/>
      </Pressable>
    </View>
  )
}

export default MealItems


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
  details:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:8
  },
  detailItem:{
    marginHorizontal:8
  },
  buttonPressed:{
    opacity:0.25,
},
});
