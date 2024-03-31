import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import NetworkImage from '../components/NetworkImage';
import RestaurantPage from '../navigation/RestaurantPage';
import { COLORS, SIZES } from '../constants/theme';
import { Ionicons,MaterialCommunityIcons ,AntDesign} from '@expo/vector-icons';
const Restaurant = ({navigation}) => {
    const route= useRoute();
    const item= route.params;
    console.log(item);
  return (
    <View>
      <View>
        <TouchableOpacity onPress={()=>navigation.goBack()} 
        style={styles.backtn} >
          <Ionicons name='chevron-back-circle' size={30} color={COLORS.primary}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} 
        style={styles.sharetn}
        ><MaterialCommunityIcons name='share-circle' size={30} color={COLORS.primary}/>
        </TouchableOpacity>
        <View style={styles.rating}></View>
        </View>
      <NetworkImage source={item.imageUrl} height={SIZES.height/3.4} width={SIZES.width} radius={15} />
      <View style={{height:200}}></View>
      <View style={{height:400}}>
        <RestaurantPage/>
      </View>
    </View>
  )
}

export default Restaurant

const styles = StyleSheet.create({
  backtn:{
    marginLeft:12,
    alignItems:'center',
    zIndex:999,
    top:SIZES.xxLarge,
    position:'absolute'
    
  },
  sharetn:{
    marginRight:12,
    alignItems:'center',
    zIndex:999,
    right:0,
    top:SIZES.xxLarge+3,
    position:'absolute'
    
  },    title:{
    fontSize:22,
    fontFamily:'medium',
    color:COLORS.black,
  },rating:{
    height:50,
    justifyContent:'center',
    width:'100%',
    position:"absolute",
    backgroundColor:'#00ff53c',
    zIndex:999,
    bottom:0,
    borderRadius:15,
  }
})