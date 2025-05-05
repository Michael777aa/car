import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const NoticeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Notice Screen</Text>
    </View>
  )
}

export default NoticeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})