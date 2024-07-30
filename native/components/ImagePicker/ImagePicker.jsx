import React from 'react'
import { Button, View } from 'react-native'
import { launchCameraAsync } from 'expo-image-picker'

const ImagePicker = () => {

    async function imageHandler() {
        const image = await launchCameraAsync({
            allowsEditing:true,
            quality:0.5,
            aspect:[16,9]
        })
        console.log(image)
    }
  return (
    <View>
        <View></View>
        <Button title='Take Image' onPress={imageHandler}/>
      
    </View>
  )
}

export default ImagePicker
