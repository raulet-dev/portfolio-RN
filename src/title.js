import React, { useEffect, useState, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useWindowSize from './utils/useWindowSize'
import {
  useFonts,
  DancingScript_700Bold,
} from '@expo-google-fonts/dancing-script'

const Title = () => {
  const winSize = useCallback(useWindowSize())

  const [orientation, setOrientation] = useCallback(useState('landscape'))
  useEffect(() => {
    setOrientation(winSize.height > winSize.width ? 'portrait' : 'landscape')
  }, [winSize])

  let [fontsLoaded] = useFonts({
    DancingScript_700Bold,
  })

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'strech',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      paddingVertical:
        orientation === 'landscape'
          ? useWindowSize().height / 250
          : useWindowSize().width / 27,
      paddingHorizontal: 10,
    },
    gridLeft: {
      flex: 1,
      borderTopColor: 'black',
      borderTopWidth: 2,
    },
    gridMiddle: {
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      borderTopWidth: 2,
      justifyContent: 'center',
    },
    gridRight: {
      flex: 1,
      borderBottomColor: 'black',
      borderBottomWidth: 2,
    },
    text: {
      textAlign: 'center',
      textAlignVertical: 'center',
      fontFamily: 'DancingScript_700Bold',
      fontSize:
        orientation === 'landscape'
          ? 0.085 * useWindowSize().height
          : 0.1 * useWindowSize().width,
    },
  })

  return (
    <View style={styles.container}>
      <View style={styles.gridLeft}></View>
      <View style={styles.gridMiddle}>
        <Text style={styles.text}>Raúl Payá Morales</Text>
      </View>
      <View style={styles.gridRight}></View>
    </View>
  )
}

export default React.memo(Title)
