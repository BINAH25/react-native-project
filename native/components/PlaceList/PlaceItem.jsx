import React from 'react'
import { View, Image, Text, Pressable} from 'react-native'


const PlaceItem = ({title, address, onPress, imageUri}) => {
  return (
    <Pressable onPress={onPress}>
        <Image source={{uri: imageUri}}/>
        <View>
            <Text> {title} </Text>
            <Text> {address} </Text>
        </View>
      
    </Pressable>
  )
}

export default PlaceItem
