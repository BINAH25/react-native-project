import React from 'react'
import { FlatList, View, StyleSheet} from 'react-native'
import { CATEGORIES } from '../../data/data'
import Category from '../../components/category/Category'



// Main function
const CategoryScreen = ({navigation}) => {

    function renderCategory (itemData){
        function navigate(){
            navigation.navigate('MealOverview',{categoryId:itemData.item.id})
        }
        return<Category 
        title={itemData.item.title} 
        color={itemData.item.color}
        onPress={navigate}
        />
    }


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
  