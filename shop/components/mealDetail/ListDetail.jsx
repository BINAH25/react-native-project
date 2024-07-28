import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ListDetail = ({data}) => {
  return (
    data.map((dataPoint)=>(
       <View  key={dataPoint} style={styles.listItem}>
           <Text>{dataPoint}</Text>
       </View> 
    ))
  )
}

export default ListDetail

const styles = StyleSheet.create({
    listItem: {
        paddingHorizontal:8,
        paddingVertical:4,
        marginHorizontal:12,
        marginVertical:4,
        borderRadius:4,
        backgroundColor:"#ccc"
    },
    text:{
        textAlign:'center'
    }
});
  