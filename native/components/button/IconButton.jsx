import React from 'react'
import { Pressable, View, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const IconButton = ({icon, color, size, onPress }) => {
  return (
    <Pressable 
    onPress={onPress}
    style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.buttonContainer}>
            <Ionicons 
            name={icon} 
            color={color}
            size={size}/>
        </View>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 8,
        justifyContent:'center',
        alignItems:'center'
    },
    pressed:{
        opacity:0.75
    }
  });
  