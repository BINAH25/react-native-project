import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/category/CategoryScreen';
import MealScreen from './screens/meals/MealScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetailScreen from './screens/mealDetail/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { store } from './store/store';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
      name="Categories" 
      component={CategoryScreen} 
      options={{title:"All Categories"}}/>
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
            name='MealCategory' 
            component={MyDrawer}
            options={{headerShown:false}}
            />
            <Stack.Screen name='MealOverview' component={MealScreen}/>
            <Stack.Screen name='MealDetail' component={MealDetailScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
