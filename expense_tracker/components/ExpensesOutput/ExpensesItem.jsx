import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import { getFormattedDate } from '../../utils/date'
import { useNavigation } from '@react-navigation/native'
const ExpensesItem = ({title, amount, date}) => {
    const navigation = useNavigation()
    
    const handlePress = ()=>{
        navigation.navigate('ManageExpense')
    }

  return (
    <Pressable 
    onPress={handlePress} 
    style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.itemContainer}>
            <View >
                <Text style={[styles.textBase, styles.title]}>{title}</Text>
                <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{amount}</Text>
            </View>
        </View>
    </Pressable>
  )
}

export default ExpensesItem

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: GlobalStyles.colors.primary500,
        padding: 12,
        borderRadius:6,
        elevation:4,
        marginVertical: 8,
    },
    textBase:{
        color: GlobalStyles.colors.primary50
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    amountContainer:{
        paddingHorizontal: 12,
        paddingVertical:4,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
    },
    amount:{
        color: GlobalStyles.colors.primary500,
        fontWeight:'bold'
    },
    pressed:{
        opacity:0.75
    }
});
