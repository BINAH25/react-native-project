import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/category/CategoryScreen';
import MealScreen from './screens/meals/MealScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetailScreen from './screens/mealDetail/MealDetailScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='MealCategory' 
        component={CategoryScreen}
        options={{title:"All Categories"}}/>
        <Stack.Screen name='MealOverview' component={MealScreen}/>
        <Stack.Screen name='MealDetail' component={MealDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
