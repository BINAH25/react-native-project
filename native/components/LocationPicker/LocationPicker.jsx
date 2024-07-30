import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import OutlineButton from '../button/OutlineButton'
import { Colors } from '../../constants/colors'

const LocationPicker = () => {
    const [mapLocation, setMapLocation] = useState()
    const handleUserLocation = ()=>{
    }
    const handleMapLocation = ()=>{
    }
    let previewMapLocation = <Text>No map yet</Text>
    if (mapLocation){
        previewMapLocation = <Image source={{uri: mapLocation}}/>
    }
  return (
    <View>
        <View style={styles.previewImage}>
          {previewMapLocation}
        </View>
        <View>
            <OutlineButton icon='map' onPress={handleUserLocation}>Get User Location </OutlineButton>
            <OutlineButton icon='map' onPress={handleMapLocation}> Get Location on Map</OutlineButton>
        </View>
    </View>
  )
}

export default LocationPicker

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