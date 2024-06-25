import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './src/screens/home/index'
import MapScreen from './src/screens/map/index'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
