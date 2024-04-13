import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import NetworkImage from '../components/NetworkImage';
import RestaurantPage from '../navigation/RestaurantPage';
import { COLORS, SIZES } from '../constants/theme';
import { Ionicons,MaterialCommunityIcons ,AntDesign} from '@expo/vector-icons';
import{RatingInput} from 'react-native-stock-star-rating'
import GoogleApiServices from '../hook/GoogleApiServices';
import { UserLocationContext } from '../context/UserLocationContext';
const Restaurant = ({navigation}) => {
    const route= useRoute();
    const item= route.params;
    const [distanceTime, setDistanceTime] = useState({})
    console.log(item.coords.latitude,item.coords.longitude);
    const {location,setLocation}=useContext(UserLocationContext)
    console.log(location.coords.latitude,location.coords.longitude);
   useEffect(() => {
      GoogleApiServices.calculateDistanceAndTime(
        item.coords.latitude,
        item.coords.longitude,
        location.coords.latitude,
        location.coords.longitude
      ).then((result)=>{
        if (result) {
          setDistanceTime(result)
        }
      })
      console.log(distanceTime);
   }, [])
   
  return (
    <View>
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
        {/* <View style={styles.rating}></View> */}
        </View>
          <NetworkImage source={item.imageUrl} height={SIZES.height/3.4} width={SIZES.width} radius={15} />
      <View style={styles.rating}>
        <View style={styles.innRating}>
          <RatingInput 
          rating={Number(item.rating)}
          size={22}
          // color={COLORS.lightWhite}
          />
          <TouchableOpacity style={styles.ratingBtn} 
          onPress={()=>navigation.navigate('rating')}
          >
            <Text style={styles.btnText}>Rate this Store</Text>
          </TouchableOpacity>
        </View>
      </View>
</View>
      <View style={{marginTop:8,marginHorizontal:8,marginBottom:10}}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{flexDirection:"row",justifyContent:'space-between'}}>
          <Text style={[styles.small,{color:COLORS.gray}]}>Distance</Text>
          <Text style={[styles.small,{fontFamily:'regular'}]}>{item.title}</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:'space-between'}}>
          <Text style={[styles.small,{color:COLORS.gray}]}>Prep and Delivery</Text>
          <Text style={[styles.small,{fontFamily:'regular'}]}>{item.title}</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:'space-between'}}>
          <Text style={[styles.small,{color:COLORS.gray}]}>Cost</Text>
          <Text style={[styles.small,{fontFamily:'regular'}]}>{item.title}</Text>
        </View>
       
      </View>
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
  },
  small:{
    fontSize:16,
    fontFamily:'medium',
    color:COLORS.black,
  },
  btnText:{
    fontSize:16,
    fontFamily:'medium',
    color:COLORS.lightWhite,
  },
  rating:{
    height:50,
    justifyContent:'center',
    width:'100%',
    position:"absolute",
    backgroundColor:'#00ff53c',
    zIndex:999,
    bottom:0,
    borderRadius:15,
  },innRating:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:12
  },ratingBtn:{
    borderColor:COLORS.lightWhite,
    borderWidth:1,
    borderRadius:9,
    padding:6
  }
})