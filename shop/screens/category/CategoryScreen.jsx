import React from 'react'
import { FlatList, View, StyleSheet} from 'react-native'
import { CATEGORIES } from '../../data/data'
import Category from '../../components/category/Category'

function renderCategory (itemData){
    return<Category 
    title={itemData.item.title} 
    color={itemData.item.color}
    />
}

// Main function
const CategoryScreen = () => {
  return (
    <FlatList style={styles.container}
    data={CATEGORIES}
    keyExtractor={(item)=> item.id}
    renderItem={renderCategory}
    numColumns={2}
    />
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
    container: {
        marginTop:20
    },
  });
  