import axios from 'axios'
import { OpenChargeApiKey } from '../settings/keys'

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
