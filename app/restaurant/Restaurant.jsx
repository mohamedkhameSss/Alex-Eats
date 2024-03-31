import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import NetworkImage from '../components/NetworkImage';
import RestaurantPage from '../navigation/RestaurantPage';
import { SIZES } from '../constants/theme';

const Restaurant = ({navigation}) => {
    const route= useRoute();
    const item= route.params;
    console.log(item);
  return (
    <View>
      <NetworkImage source={item.imageUrl} height={SIZES.height/3.4} width={SIZES.width} radius={15} />
      <View style={{height:200}}></View>
      <View style={{height:400}}>
        <RestaurantPage/>
      </View>
    </View>
  )
}

export default Restaurant

const styles = StyleSheet.create({})