import axios from 'axios'
import { OpenChargeApiKey } from '../settings/keys'

import { Charger } from '../def/charger'

const addKeyToUrl = (url: string) : string => {
    return url + '&key=' + OpenChargeApiKey
}

export const fetchChargers = async (latitude: number, longitude: number) => {
    try {
      const url = `https://api.openchargemap.io/v3/poi/?output=json&latitude=${latitude}&longitude=${longitude}&maxresults=100&compact=true&verbose=false`
      const response = await axios.get(addKeyToUrl(url))
      return response.data
    } catch (error) {
      console.error(error)
    }
}
export const startChargingSession = async (user: number, car: number, charger: Charger) => {
    try {
      axios.post('https://example.ev.energy/startchargingsession', {
        user: user,
        car_id: car,
        charger_id: charger.ID,
      })
      console.log("charge started")
      return charger
    } catch (error) {
      console.error(error)
    }
  }
  
  export const stopChargingSession = async (user: number, car: number, charger: Charger) => {
    try {
      axios.post('https://example.ev.energy/stopchargingsession', {
        user: user,
        car_id: car,
        charger_id: charger.ID,
      })
      console.log("charge stopped")
      return charger
    } catch (error) {
      console.error(error)
    }
  }