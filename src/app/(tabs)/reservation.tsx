import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const ReservationScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Reservation Screen</Text>
    </View>
  )
}

export default ReservationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})