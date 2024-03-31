import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import AssetImage from './AssetImage'
import { UserReversedGeoCode } from '../context/UserReversedGeoCode'
import { COLORS, SIZES } from '../constants/theme'
import { UserLocationContext } from '../context/UserLocationContext'
import { useEffect } from 'react'
import * as Location from 'expo-location';
const HomeHeader = () => {
    const {address,setAddress}=useContext(UserReversedGeoCode);
    const {location,setLocation}=useContext(UserLocationContext);
    const [time, setTime] = useState(null);
    useEffect(() => {
        if (location !== null) {
            reversedGeoCode(location.coords.latitude,location.coords.longitude)
        }
    }, [location])
    const reversedGeoCode =async (latitude , longitude)=>{
        const reversedGeoCodeAddress =await Location.reverseGeocodeAsync({
            latitude:latitude,
            longitude:longitude
        })
        console.log(reversedGeoCodeAddress);
        setAddress(reversedGeoCodeAddress[0]);
        const greeting =getTimeOfDay();
        setTime(greeting);
    } 
    const getTimeOfDay=()=>{
        const { getHours } = new Date();
        if(getHours >=0 && getHours<12){
          return "☀️"
        }else if(getHours >= 12 <17){
          return "⛅"
        }else return "🌙";
                                                                       
      } 
  return (
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <View style={styles.outerStyle}>
        <AssetImage data={require('../../assets/images/profile.jpg')}
        width={50} height={50} mode={'cover'} radius={99}/>
        <View style={styles.HeaderStyle}>
            <Text style={styles.Heading}>Delivery To</Text>
            <Text style={styles.Location}>{`${address.city} ${address.name}`}</Text>
        </View>
      </View>
      <Text style={{fontSize:36,marginRight:5}}>{time}</Text>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    outerStyle:{
        
        flexDirection:"row",
        marginBottom:10,
        marginHorizontal:20
    },
    HeaderStyle:{
        marginLeft:15,
        justifyContent:'center'
    },
    Heading:{
        fontFamily:'medium',
        fontSize:SIZES.medium,
        color:COLORS.secondary
    },
    Location:{
        fontFamily:'regular',
        fontSize:SIZES.small+2,
        color:COLORS.gray
    }

})