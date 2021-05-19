import React, { useState, useCallback, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Context } from './context'
import {
  useFonts,
  DancingScript_700Bold,
} from '@expo-google-fonts/dancing-script'

const FooterButton = (params) => {
  let [fontsLoaded] = useFonts({
    DancingScript_700Bold,
  })
  const [hover, setHover] = useCallback(useState(false))
  const [currentPosition, setCurrentPosition] = useCallback(useContext(Context))

  const styles = useCallback(
    StyleSheet.create({
      circle: {
        flex: 1,
        height: params.circleSize,
        maxWidth: params.circleSize,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
      },
      text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'DancingScript_700Bold',
        fontSize: params.fontSize,
      },
    })
  )

  return (
    <TouchableOpacity
      style={[
        styles.circle,
        currentPosition === params.id
          ? { backgroundColor: 'lightgrey' }
          : hover
          ? { backgroundColor: 'lightgrey' }
          : '',
      ]}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      onPress={() => {
        setCurrentPosition(params.id)
      }}
    >
      <Text style={[styles.text, hover ? { color: 'darkorange' } : '']}>
        {params.title}
      </Text>
    </TouchableOpacity>
  )
}

export default React.memo(FooterButton)
