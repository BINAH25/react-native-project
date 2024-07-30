import React, { useState } from 'react'
import { StyleSheet, ScrollView,View, Text, TextInput, KeyboardAvoidingView,Platform} from 'react-native'
import { Colors } from '../../constants/colors'
import ImagePicker from '../ImagePicker/ImagePicker'

const AddPlaceForm = () => {
    const [title, setTtitle] = useState('')

    const handleTitleChange = (title)=>{
        setTtitle(title)
    }

    return (
        
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                style={styles.input}
                onChangeText={handleTitleChange}
                autoCapitalize='none'
                autoCorrect={false}
                value={title}/>
                <ImagePicker/>
            </View>
        </ScrollView>
       
    );
}

export default AddPlaceForm

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:24
    },
    label:{
        fontWeight:'bold',
        marginBottom:4,
        color:Colors.primary500
    },
    input:{
        marginVertical:8,
        paddingHorizontal:4,
        paddingVertical:8,
        fontSize:16,
        borderBottomColor:Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100
    }
  });