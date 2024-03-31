import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS } from '../constants/theme'

const CategoeryItem = ({categoery,selected}) => {
  return (
    <View 
    style={{
        marginLeft:12,
        padding:5,
        alignItems:"center",
        width:80,
        height:55,
        justifyContent:"center",
        borderRadius:15,
        borderWidth:.5,
        borderColor:categoery.value==selected ? COLORS.secondary:"transparent",
        shadowColor:SHADOWS.small
    }}
    >
        <Image source={{uri:categoery.imageUrl}}
        style={{width:30,height:30}}
        />
        <Text style={{fontSize:13,fontFamily:"regular"}}>
            {categoery.title}
        </Text>
    </View>
  )
}

export default CategoeryItem

const styles = StyleSheet.create({})