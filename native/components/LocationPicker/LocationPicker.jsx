import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert, Image } from 'react-native'
import OutlineButton from '../button/OutlineButton'
import { Colors } from '../../constants/colors'
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus} from 'expo-location'
import { getMapPreview } from '../../util/location'
import { useNavigation } from '@react-navigation/native'

const LocationPicker = () => {
    const navigation = useNavigation()
    const [mapLocation, setMapLocation] = useState()
    const [userLocation, setUserLocation] = useState()
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

    const handleMapLocation = ()=>{
        navigation.navigate('Map')
    }
    const verifyPermissions = async ()=>{
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission()
            return permissionResponse.granted
        }
        if(locationPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert(
                'Permission denied',
                'you need to grant camera permission to use this app'
            )
            return false
        }
        return true
    }

    const handleUserLocation = async () =>{
        const hasPermission = await verifyPermissions()
        if (!hasPermission){
            return
        }
        const location = await getCurrentPositionAsync()
        setUserLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
    }
    

    let previewMapLocation = <Text>No map yet</Text>
    if (userLocation){
        previewMapLocation = <Image style={styles.image} source={{uri: getMapPreview(userLocation.lat, userLocation.lng)}}/>
    }

  return (
    <View>
        <View style={styles.previewImage}>
          {previewMapLocation}
        </View>
        <View style={styles.actions}>
            <OutlineButton icon='map' onPress={handleUserLocation}>Location User </OutlineButton>
            <OutlineButton icon='map' onPress={handleMapLocation}> Get on Map</OutlineButton>
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
    },
    actions:{
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:"center"
    }
  });