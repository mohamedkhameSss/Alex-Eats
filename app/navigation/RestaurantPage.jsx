import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ffff' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  three:ThirdRoute,
});

export default function RestaurantPage() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Menu' },
    { key: 'second', title: 'Directions' },
    { key: 'three', title: 'New' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}