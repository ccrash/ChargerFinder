import React, { FC, useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

import { fetchChargers } from '../../helpers/api'
import { Charger } from '../../def/charger'

import styles from './style'

interface _props {
    navigation: any
  }

export const MapScreen: FC<_props> = ({ navigation }) => {
  const [chargers, setChargers] = useState<Charger[]>([])
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [region, setRegion] = useState<any>({
    latitude: 0.0,
    longitude: 0.0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied')
          setLoading(false)
          return
        }

        let location = await Location.getCurrentPositionAsync({})
        setLocation(location)
        setRegion({
          ...region,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })
        const chargers = await fetchChargers(location.coords.latitude, location.coords.longitude)
        setChargers(chargers)
      } catch (error) {
        console.error(error)
        setErrorMsg('Failed to fetch location')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const handleRegionChangeComplete = (region: any) => {
    setRegion(region)
  }

  const renderMarkers = () => {
    return chargers.map((charger) => (
      <Marker
        key={charger.ID}
        coordinate={{
          latitude: charger.AddressInfo.Latitude,
          longitude: charger.AddressInfo.Longitude,
        }}
        title={charger.AddressInfo.Title}
      />
    ))
  }

  const renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )

  const renderError = () => (
    <View style={styles.container}>
      <Text>{errorMsg}</Text>
    </View>
  )

  if (loading) {
    return renderLoading()
  }

  if (errorMsg) {
    return renderError()
  }

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={region}
          onRegionChangeComplete={handleRegionChangeComplete}
        >
          { renderMarkers() }
        </MapView>
      )}
    </View>
  )
}

export default MapScreen
