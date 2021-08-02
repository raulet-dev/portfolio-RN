import React, { useState, useEffect, useCallback } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import useWindowSize from './utils/useWindowSize'
import {
  useFonts,
  LibreBaskerville_400Regular,
} from '@expo-google-fonts/libre-baskerville'
import Workbox from './work-box'
import arrow from './img/arrow.svg'

const WorkExperience = () => {
  const winSize = useCallback(useWindowSize())

  const [flatRef, setFlatRef] = useCallback(useState(''))
  const [flatIndex, setFlatIndex] = useCallback(useState(0))
  const [lastIndex, setLastIndex] = useCallback(useState(0))
  const [size, setSize] = useCallback(useState(window.innerHeight / 1.49))

  const works = require('./work.json')

  let [fontsLoaded] = useFonts({
    LibreBaskerville_400Regular,
  })

  const [orientation, setOrientation] = useCallback(useState('landscape'))
  useEffect(() => {
    setOrientation(winSize.height > winSize.width ? 'portrait' : 'landscape')
    setSize(
      orientation === 'landscape' ? winSize.height / 1.49 : winSize.width / 1.49
    )
  }, [winSize])

  const styles = useCallback(
    StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'strech',
        justifyContent: 'center',
        flexDirection: orientation === 'landscape' ? 'row' : 'column-reverse',
        marginLeft: orientation === 'landscape' ? '15%' : '5%',
        marginRight: orientation === 'landscape' ? '20%' : '5%',
        marginVertical: orientation === 'landscape' ? 0 : '5%',
        alignSelf: 'center',
      },
      content: {
        marginRight: orientation === 'landscape' ? winSize.height / 14 : 0,
        marginTop: orientation === 'landscape' ? 0 : winSize.width / 8,
        width:
        orientation === 'landscape'
          ? winSize.height / 3
          : winSize.width / 3.5,
        flexWrap: 'wrap',
      },
      text: {
        textAlign: 'center',
        fontFamily: 'LibreBaskerville_400Regular',
        fontSize:
          orientation === 'landscape'
            ? 0.045 * useWindowSize().height
            : 0.025 * useWindowSize().width,
        color: '#333',
      },
      contrast: {
        color: 'darkorange',
      },
    })
  )

 
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          I'm a former electromechanical engineer at Spanish Navy. I had been on
          duty for more than 10 years, earning good values as{' '}
          <Text style={[styles.text, styles.contrast]}>Teamwork</Text> or{' '}
          <Text style={[styles.text, styles.contrast]}>Project management</Text>
          . After early retirement, I moved to{' '}
          <Text style={[styles.text, styles.contrast]}>Tokyo</Text>, where I'm
          trying to refocus and pursue my professional career as a{' '}
          <Text style={[styles.text, styles.contrast]}>software developer</Text>
          , one of my biggest passions.
          I'm a former electromechanical engineer at Spanish Navy. I had been on
          duty for more than 10 years, earning good values as{' '}
          <Text style={[styles.text, styles.contrast]}>Teamwork</Text> or{' '}
          <Text style={[styles.text, styles.contrast]}>Project management</Text>
          . After early retirement, I moved to{' '}
          <Text style={[styles.text, styles.contrast]}>Tokyo</Text>, where I'm
          trying to refocus and pursue my professional career as a{' '}
          <Text style={[styles.text, styles.contrast]}>software developer</Text>
          , one of my biggest passions.
          I'm a former electromechanical engineer at Spanish Navy. I had been on
          duty for more than 10 years, earning good values as{' '}
          <Text style={[styles.text, styles.contrast]}>Teamwork</Text> or{' '}
          <Text style={[styles.text, styles.contrast]}>Project management</Text>
          . After early retirement, I moved to{' '}
          <Text style={[styles.text, styles.contrast]}>Tokyo</Text>, where I'm
          trying to refocus and pursue my professional career as a{' '}
          <Text style={[styles.text, styles.contrast]}>software developer</Text>
          , one of my biggest passions.
        </Text>
      </View>
    </View>
  )
}

export default React.memo(WorkExperience)
