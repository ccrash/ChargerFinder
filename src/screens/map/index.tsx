import React, { useState, useEffect } from 'react'
import { View, Text, Modal, ActivityIndicator } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

import { fetchChargers } from '../../helpers/api'
import { Charger } from '../../def/charger'

import MapChargerDetails from '../../components/mapChargerDetails'

import styles from './style'

export const MapScreen = ({ navigation }: { navigation: any }) => {
  const [chargers, setChargers] = useState<Charger[]>([])
  const [selectedCharger, setSelectedCharger] = useState<Charger | null>(null)
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [region, setRegion] = useState<any>({
    latitude: 0.0,
    longitude: 0.0,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04
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

  const handleMarkerPress = (charger: Charger) => {
    setSelectedCharger(charger)
    setModalVisible(true)
  }

  const handleRegionChangeComplete = (region: any) => {
    setRegion(region)
  }

  const onDetailsSelect = (charger: Charger) => {
    setModalVisible(false)
    navigation.navigate('Home')
  }

  const onDetailsClose = () => {
    setModalVisible(false)
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
        onPress={() => handleMarkerPress(charger)}
      />
    ))
  }

  const renderMarkerDetails = () => (
    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
      <MapChargerDetails charger={selectedCharger} onContinue={onDetailsSelect} onClose={onDetailsClose} />
    </Modal>
  )

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
            {/*  Render your position */}
            <Marker
                key={'you'}
                coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                }}
                title={"Your position"}
                pinColor={'green'}
            />
          { renderMarkers() }
        </MapView>
      )}
      {selectedCharger && renderMarkerDetails()}
    </View>
  )
}

export default MapScreen
