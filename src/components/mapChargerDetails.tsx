import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Charger } from '../def/charger'

import styles from './style'

interface _props {
  charger: Charger | null
  onContinue: (charger: Charger) => void
  onClose: () => void
}

export const MapChargerDetails = ({charger, onContinue, onClose} : _props) => {

  return charger && (
    
    <View style={styles.container}>
      <Text style={styles.title}>{charger.AddressInfo.Title}</Text>
      { charger.AddressInfo.AddressLine1 && <Text style={styles.address}>{charger.AddressInfo.AddressLine1}</Text> }
      { charger.AddressInfo.Town && <Text style={styles.address}>{charger.AddressInfo.Town}</Text> }
      { charger.AddressInfo.StateOrProvince && <Text>{charger.AddressInfo.StateOrProvince}</Text> }
      <Text style={styles.postcode}>{charger.AddressInfo.Postcode}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonSelect} onPress={() => onContinue(charger)}>
          <Text style={styles.buttonSelectText}>Select</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonClose} onPress={onClose}>
          <Text style={styles.buttonCloseText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MapChargerDetails