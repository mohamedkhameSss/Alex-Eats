import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import uidata from '../constants/uidata';
import CategoeryItem from './CategoeryItem';

const CategoeryList = ({setSelectedCategoery,setSelectedSection,setSelectedValue}) => {
    const [selected, setSelected] = useState(null);
    const categoery=[1,2,3,4,5]
    const handelSelectedCategoery=(item)=>{
      if (selected == item.value) {
        setSelectedCategoery(null);
        setSelectedSection(null);
        setSelectedValue(null);
        setSelected(null);
      }else{
        setSelectedCategoery(item._id);
        setSelectedValue(item.title);
        setSelectedSection('categoery');
        setSelected(item.value);
      }
    }
  return (
    <View>
    <FlatList
    data={uidata.categories}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={item=>item._id}
    renderItem={({item})=>
    <TouchableOpacity 
    onPress={()=>handelSelectedCategoery(item)}
    >
    <CategoeryItem
        categoery={item}
        selected={selected}
        />
    </TouchableOpacity>}
    />
    </View>
  )
}

export default CategoeryList

const styles = StyleSheet.create({})