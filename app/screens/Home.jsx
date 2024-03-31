import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import pages from './page.style'
import uidata from "../constants/uidata";
import HomeHeader from "../components/HomeHeader";
import CategoeryList from "../components/CategoeryList";
import ChoicesList from "../components/ChoicesList";
import Heading from "../components/Heading";
import NearByRestaurants from "../components/NearByRestaurants";
import Divider from "../components/Divider";
import NewFoodList from "../components/NewFoodList";
import FastestNearYou from "../components/FastestNearYou";



const Home = () => {
  const [selectedCategoery, setSelectedCategoery] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);
  return (
    <SafeAreaView>
      <View style={pages.viewOne}>
        <View style={pages.viewThree}>
        <HomeHeader/>
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={
          {borderBottomStartRadius:30,borderBottomEndRadius:30}
        }
        >
          <CategoeryList
           setSelectedCategoery={setSelectedCategoery} 
          setSelectedSection={setSelectedSection} 
          setSelectedValue={setSelectedValue}
          />
          <ChoicesList setSelectedChoice={setSelectedChoice}
           setSelectedSection={setSelectedSection}/>
           <Heading heading={"Nearby Restaurant"} onPress={()=>{}}/>
           <NearByRestaurants />
           <Divider/>
           <Heading heading={"Try Something New"} onPress={()=>{}}/>
           <NewFoodList/>
           <Divider/>
           <Heading heading={"Fastest Near you"} onPress={()=>{}}/>
           <FastestNearYou/>
        </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});
