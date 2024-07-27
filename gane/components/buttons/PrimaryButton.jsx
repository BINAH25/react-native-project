import React from 'react'
import { Pressable, Text, View, StyleSheet} from 'react-native'

const PrimaryButton = ({children, onPress}) => {

  return (
    <Pressable onPress={onPress}>
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
                {children}
            </Text>
        </View>
    </Pressable>
  )
}

export default PrimaryButton


const styles = StyleSheet.create({
    buttonContainer: {
      borderRadius: 8,
      paddingHorizontal:16,
      paddingVertical:8,
      margin:4,
      elevation:2,
      backgroundColor:"#72063c"
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    }
  });
  