import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'
import NetworkImage from './NetworkImage'
import {RatingInput} from 'react-native-stock-star-rating'
const StoreComponent = ({item,onPress}) => {
  return (
    <TouchableOpacity
     style={styles.wrapper}
     onPress={onPress}
     >
        <NetworkImage source={item.imageUrl}
        width={SIZES.width-80}
        height={SIZES.height/5.8}
        radius={16}
        
        />
      <Text style={styles.heading}>StoreComponent</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        
        <Text style={styles.smmall}>Delivery under</Text>
        <Text style={styles.smmall}>{item.time}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <RatingInput 
        rating={item.rating}
        size={14}
        maxStars={5}
        setRating={item.rating}
        bordered={false}
        color={COLORS.primary}
        />
        <Text style={styles.smmall}>{item.ratingCount}+ ratings</Text>
      </View>
    </TouchableOpacity>
  )
}

export default StoreComponent

const styles = StyleSheet.create({
    wrapper:{
        marginRight:15,
        backgroundColor:COLORS.lightWhite,
        padding:8,
        borderRadius:16
    },
    heading:{
        fontSize:14,
        fontFamily:'regular',
        color:COLORS.gray
    },
    smmall:{
      fontSize:12,
        fontFamily:'regular',
        color:COLORS.gray
    }
})