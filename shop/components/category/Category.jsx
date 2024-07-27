import React from 'react'
import {StyleSheet, Pressable, View ,Text, Platform} from 'react-native'

const Category = ({title, color,onPress}) => {
  return (
    <View style={styles.gridContainer}>
      <Pressable 
      style={({pressed})=> [styles.button, pressed ? styles.buttonPressed: null]}
      onPress={onPress}
      android_ripple={{color:'#ccc'}}>
        <View style={[styles.innerContainer,{backgroundColor:color}]}>
            <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Category


const styles = StyleSheet.create({
    gridContainer: {
        flex:1,
        margin:16,
        height:150,
        borderRadius:10,
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowRadius:8,
        shadowOffset:{width:0,height:2},
        backgroundColor:'white',
        overflow: Platform.OS === 'android' ? 'hidden': 'visible'
    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity:0.25,
    },
    innerContainer:{
        flex:1,
        padding:16,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    }

});
  