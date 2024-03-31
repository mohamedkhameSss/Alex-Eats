import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import uidata from '../constants/uidata'
import StoreComponent from './StoreComponent'
import { useNavigation } from '@react-navigation/native'

const NearByRestaurants = () => {
  const navigate = useNavigation();
  return (
    <View style={{marginLeft:12}}>
        <FlatList
        data={uidata.restaurants}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop:5,rowGap:10}}
        scrollEnabled
        renderItem={({item})=>
          <StoreComponent item={item} onPress={()=>{navigate.navigate('restaurant',item)}}/>
        }
        />
    </View>
  )
}

export default NearByRestaurants

const styles = StyleSheet.create({})