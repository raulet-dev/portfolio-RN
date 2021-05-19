import React, { useState, useCallback } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Linking,
} from 'react-native'

const ContactButton = (params) => {
  const [hover, setHover] = useCallback(useState(false))

  const styles = useCallback(
    StyleSheet.create({
      rombo: {
        height: params.size / 7,
        width: params.size / 7,
        borderWidth: 2,
        transform: [{ rotate: '45deg' }],
        alignSelf: 'center',
        flexWrap: 'wrap',
        overflow: 'hidden',
        justifyContent: 'center',
      },
      img: {
        height: params.size / 11,
        width: params.size / 11,
        tintColor: '#222',
        transform: [{ rotate: '-45deg' }],
        alignSelf: 'center',
      },
    })
  )

  return (
    <TouchableOpacity
      style={[styles.rombo, { backgroundColor: hover ? 'lightgrey' : '' }]}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      onPress={() => {
        Platform.OS == 'web'
          ? window.open(params.url, '_blank')
          : Linking.openURL(params.url)
      }}
    >
      <Image
        source={params.img}
        style={[styles.img, { tintColor: hover ? 'darkorange' : '#222' }]}
      />
    </TouchableOpacity>
  )
}

export default React.memo(ContactButton)
