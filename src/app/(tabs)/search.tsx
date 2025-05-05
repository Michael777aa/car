import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const SearchScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})