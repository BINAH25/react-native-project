import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses/AllExpenses';
import RecentExpense from './screens/RecentExpenses/RecentExpense';
import ManageExpenses from './screens/ManageExpenses/ManageExpenses';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GlobalStyles } from './constants/styles';
import IconButton from './components/button/IconButton';

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()

function MyTabs() {
  return (
    <BottomTab.Navigator screenOptions={ ({navigation}) => ({
      headerStyle:{backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: 'white',
      tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500 ,
      headerRight: ({tintColor})=> (
        <IconButton 
        icon='add' 
        size={32} 
        color={tintColor}
        onPress={() =>{
          navigation.navigate('ManageExpense')
        }}/>
      )
    })}>
      <BottomTab.Screen 
      name="recent" 
      component={RecentExpense} 
      options={{
        title:'Recent Expense',
        tabBarLabel:"Recent",
        tabBarIcon: ({color, size})=> <Ionicons name='hourglass' size={size} color={color}/>
      }}/>
      <BottomTab.Screen 
      name="allExpenses" 
      component={AllExpenses} 
      options={{
        title:'All Expenses',
        tabBarIcon: ({color, size})=> <Ionicons name='calendar' size={size} color={color}/>
      }}/>
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
          headerTintColor: 'white'
        }}>
          <Stack.Screen 
          name='Back' 
          component={MyTabs}
          options={{headerShown:false}}/>
          <Stack.Screen 
          name='ManageExpense' 
          component={ManageExpenses}
          options={{presentation:'modal'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
