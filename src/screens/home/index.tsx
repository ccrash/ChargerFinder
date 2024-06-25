import React, { FC } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import { startCharging, stopCharging, clearSelectedCharger } from '../../store/chargerSlice'

import styles from './style'

interface _props {
  navigation: any
}

export const HomeScreen: FC<_props> = ({ navigation }) => {
  
  const dispatch = useDispatch<AppDispatch>()
  const selectedCharger = useSelector((state: RootState) => state.charger.selectedCharger)
  const charging = useSelector((state: RootState) => state.charger.charging)

  const handleStartStopCharging = () => {
    if (selectedCharger) {
      if (charging) {
        dispatch(stopCharging(selectedCharger))
      } else {
        dispatch(startCharging(selectedCharger))
      }
    }
  }

  const renderChargeButton = () => (
      <TouchableOpacity style={styles.buttonCharge} onPress={handleStartStopCharging}>
        <Text style={styles.buttonChargeText}>Start Charging</Text>
      </TouchableOpacity>
  )

  const renderStopButton = () => (
      <TouchableOpacity style={styles.buttonStop} onPress={handleStartStopCharging}>
        <Text style={styles.buttonStopText}>Stop Charging</Text>
      </TouchableOpacity>
  )

  const closeCharger  = () => {
    if(!charging) {
        dispatch(clearSelectedCharger())
    }
    else {
        Alert.alert('Please stop charging first')
      }
  }

  const renderContent = () => {
    if (selectedCharger) {
      return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.close} onPress={closeCharger}>
                    <Text style={styles.x}>X</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{selectedCharger.AddressInfo.Title}</Text>
                <Text>{selectedCharger.AddressInfo.AddressLine1}</Text>
                <Text>{selectedCharger.AddressInfo.Town}</Text>
                <Text>{selectedCharger.AddressInfo.StateOrProvince}</Text>
                <Text>{selectedCharger.AddressInfo.Postcode}</Text>
                { charging ? renderStopButton() : renderChargeButton() }
            </View>
        </View>
      )
    }
    return (
      <View style={styles.emptyHome}>
        <Text style={styles.bold}>Charger Finder</Text>
        <Text style={styles.normal}>open the map to find the nearest charger</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      { renderContent() }

      <TouchableOpacity style={styles.openMapButton} onPress={() => navigation.navigate('Map')}>
        <Text style={styles.openMapButtonText}>Open Map</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
