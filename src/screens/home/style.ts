import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyHome: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',

    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    openMapButton: {
      backgroundColor: 'black',
      width: 'auto',
      borderRadius: 20,
      padding: 20,
      position: 'absolute',
      bottom: 50,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    openMapButtonText: {
      color: 'white',
      textAlign: 'center',
    },
    buttonCharge: {
      backgroundColor: 'black',
      borderRadius: 5,
      padding: 20,

    },
    buttonChargeText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16
    },
    buttonStop: {
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 20,
      borderColor: 'black',
      borderWidth: 1
    },
    buttonStopText: {
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16
    },
    bold: {
      color: 'black',
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: 80
    },
    normal: {
      color: 'black',
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: 20
    },
    close: {
      alignContent: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      textAlign: 'right',
      marginBottom: 10
    },
    x: {
      color: 'black',
      fontSize: 20
    },
  })

  export default styles