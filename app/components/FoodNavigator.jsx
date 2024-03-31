import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useRoute } from '@react-navigation/native';
import FoodPage from './FoodPage';
import OrderPage from './OrderPage';

const Stack= createNativeStackNavigator();
const FoodNavigator = () => {
    const route = useRoute();
    const item =route.params;

  return (
    <Stack.Navigator
    initialRouteName='food-page'
    >
        <Stack.Screen
        name='food-page'
        component={FoodPage}
        options={{headerShown:false}}
        initialParams={{item:item}}
        >

        </Stack.Screen>
        <Stack.Screen
        name='order-page'
        component={OrderPage}
        options={{headerShown:false,presentation:"modal"}}
        
        >

        </Stack.Screen>
    </Stack.Navigator>
  )
}

export default FoodNavigator

const styles = StyleSheet.create({})