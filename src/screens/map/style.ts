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
    },
    mapButton: {
      backgroundColor: 'black',
      width: 'auto',
      borderRadius: 20,
      padding: 20,
      position: 'absolute',
      bottom: 50,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    mapButtonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16
    },
  })

  export default styles