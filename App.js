import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#351401'}, 
      headerTintColor: 'white',
      sceneContainerStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: {backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#e4baa1'}}>
      <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreen} 
        options={{title: 'All Categories', drawerIcon: ({ color, size }) => (
        <Ionicons color={color} size={size} name='list' />)}} />
      <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{drawerIcon: ({ color, size }) => (
        <Ionicons color={color} size={size} name='star' />)}} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
                headerStyle: {backgroundColor: '#351401'}, 
                headerTintColor: 'white',
                contentStyle: {backgroundColor: '#3f2f25'}}}>
            <Stack.Screen name='DrawerScreen' 
              component={DrawerNavigator} 
              options={{
                headerShown: false
              }} />
            <Stack.Screen name='MealsOverview' 
              component={MealOverviewScreen} />
            <Stack.Screen name='MealDetail' 
              component={MealDetailScreen} 
              options={{
                title: 'Meal Detail',
                headerRight: () => {
                  return (
                    <Button title='tap me' />
                  )
                }
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});
