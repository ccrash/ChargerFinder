import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

import { Charger } from '../def/charger'

import styles from './style'

interface _props {
  charger: Charger | null
  onContinue: (charger: Charger) => void
  onClose: () => void
}

export const MapChargerDetails = ({charger, onContinue, onClose} : _props) => {

    if(!charger) {
        return null
    }
    return (
        <View style={styles.container}>
            <Text>{charger.AddressInfo.Title}</Text>
            <Text>{charger.AddressInfo.AddressLine1}</Text>
            <Text>{charger.AddressInfo.Town}</Text>
            <Text>{charger.AddressInfo.StateOrProvince}</Text>
            <Text>{charger.AddressInfo.Postcode}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => onContinue(charger)}>
                    <Text style={styles.buttonText}>Select</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onClose}>
                    <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MapChargerDetails