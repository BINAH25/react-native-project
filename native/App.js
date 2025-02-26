import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddPlace from './screens/AddPlace/AddPlace';
import AllPlaces from './screens/AllPlace/AllPlaces';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconButton from './components/button/IconButton';
import { Colors } from './constants/colors';
import Map from './screens/maps/Map';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor: Colors.primary500},
          headerTintColor:Colors.gray700,
          contentStyle: {backgroundColor: Colors.gray700}
        }}>
          <Stack.Screen name="AllPlaces" component={AllPlaces}
          options={ ({navigation}) => ({
            title:"All Places",
            headerRight:({tintColor}) =>(
              <IconButton 
              icon='add'
              size={24}
              color={tintColor}
              onPress={()=> navigation.navigate('AddPlace')}/>
            )
          })} />
          <Stack.Screen name="AddPlace" component={AddPlace}
          options={{title:"Add Place"}} />
          <Stack.Screen name="Map" component={Map}
          options={{title:"Map"}} />
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
