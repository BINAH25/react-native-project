import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/colors';

const OutlineButton = ({icon,children, onPress }) => {
  return (
    <Pressable 
    onPress={onPress}
    style={({pressed})=> [styles.button, pressed ? styles.pressed: null]}>
        <Ionicons  style={styles.icon} name={icon} color={Colors.primary500}size={18}/>
        <Text style={styles.text}>{children}</Text>
       
    </Pressable>
  )
}

export default OutlineButton

const styles = StyleSheet.create({
    button: {
        paddingHorizontal:12,
        paddingVertical:4,
        justifyContent:'center',
        flexDirection:"row",
        alignItems:'center',
        margin:4,
        borderWidth:1,
        borderColor:Colors.primary500
    },
    pressed:{
        opacity:0.75,
    },
    icon:{
        marginRight:6
    },
    text:{
        color: Colors.primary500
    }
  });
  