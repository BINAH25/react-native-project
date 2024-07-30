import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import PlaceItem from './PlaceItem'

const renderPlaces = (itemData)=>{
    const item = itemData.item

    const handlePress = ()=>{

    }
    return(
        <PlaceItem 
        title={item.title}
        imageUri={item.imageUri}
        addresse={item.address}
        location={item.location}
        id={item.id}
        onPress={handlePress}
        />
    )
}

const PlaceList = ({places}) => {
    if(!places || places.length === 0){
        return(
            <View style={styles.container}>
                <Text  style={styles.text}>No Places added yet  - start added some!</Text>
            </View>
        )
    }

  return (
    <FlatList 
    data={places}
    keyExtractor={(item)=> item.id}
    renderItem={renderPlaces}/>
  )
}

export default PlaceList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        fontSize: 16
    }
  });
  