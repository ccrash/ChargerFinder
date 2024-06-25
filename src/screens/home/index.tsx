import React, {FC} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './style'

interface _props {
  navigation: any
}

export const HomeScreen: FC<_props> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
        <Text style={styles.buttonText}>Map</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
