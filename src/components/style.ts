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
    buttons: {
      flexDirection: 'row',
      alignContent: 'space-between',
      padding: 20,
    },
    button: {
      backgroundColor: 'black',
      borderRadius: 5,
      padding: 20,

    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16
    }
  })

  export default styles