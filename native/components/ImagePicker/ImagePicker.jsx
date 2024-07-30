import React, { useState } from 'react'
import { StyleSheet, Alert, Button, View, Image, Text } from 'react-native'
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import { Colors } from '../../constants/colors'
import OutlineButton from '../button/OutlineButton'

const ImagePicker = () => {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions()
  const [pickedImage, setImage] = useState()

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED){
      const permissionResponse = await requestPermission()
      return permissionResponse.granted
    }
    if(cameraPermissionInformation.status === PermissionStatus.DENIED){
      Alert.alert(
        'Permission denied',
        'you need to grant camera permission to use this app'
      )
      return false
    }
    return true
  }

  async function imageHandler() {

    const hasPermission = verifyPermissions()
    if (!hasPermission){
      return
    }

    const image = await launchCameraAsync({
        allowsEditing:true,
        quality:0.5,
        aspect:[16,9]
    })
    setImage(image.assets[0].uri)
  }

  let previewImage = <Text>No Image yet</Text>
  if (pickedImage){
    previewImage = <Image style={styles.image} source={{uri:pickedImage}}/>
  }
  
  return (
    <View>
        <View style={styles.previewImage}>
          {previewImage}
        </View>
        <OutlineButton icon='camera' onPress={imageHandler}> Take Image </OutlineButton>
      
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({
  previewImage: {
    width:'100%',
    height: 200,
    marginVertical:8,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:4,
    backgroundColor: Colors.primary100
  },
  image:{
    width:'100%',
    height:"100%"
  }
});