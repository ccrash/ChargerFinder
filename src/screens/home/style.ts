import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: 'black',
      width: 'auto',
      borderRadius: 20,
      padding: 20,
      position: 'absolute',
      bottom: 50,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    }
  })

  export default styles