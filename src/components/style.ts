import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      margin: 20,
      marginTop: 100,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'center',
    },
    address: {
      fontSize: 16,
      marginBottom: 10,
      textAlign: 'center',
    },
    postcode: {
      fontSize: 18,
      marginBottom: 15,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttons: {
      flexDirection: 'row',
      alignContent: 'space-between',
      padding: 20,
    },
    buttonSelect: {
      backgroundColor: 'black',
      borderRadius: 5,
      padding: 20,

    },
    buttonSelectText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16
    },
    buttonClose: {
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 20,
      borderColor: 'black',
      borderWidth: 1
    },
    buttonCloseText: {
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16
    },
  })

  export default styles