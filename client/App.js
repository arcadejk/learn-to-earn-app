// client/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LearningScreen from './screens/LearningScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Learning" component={LearningScreen} />
        <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}