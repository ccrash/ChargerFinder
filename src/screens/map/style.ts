import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }
  })

  export default styles