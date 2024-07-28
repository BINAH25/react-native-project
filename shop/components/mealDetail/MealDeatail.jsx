import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
const MealDeatail = ({duration,complexity,affordability}) => {
  return (
    <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default MealDeatail

const styles = StyleSheet.create({
    
    details:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      padding:8
    },
    detailItem:{
      marginHorizontal:8
    },
   
});