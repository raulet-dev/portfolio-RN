import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import useWindowSize from './utils/useWindowSize'
import FooterButton from './footerButton'

const Footer = (params) => {
  const winSize = useCallback(useWindowSize())
  const [fontSize, setFontSize] = useCallback(useState(0))
  const [orientation, setOrientation] = useCallback(useState('landscape'))
  useEffect(() => {
    setOrientation(winSize.height > winSize.width ? 'portrait' : 'landscape')
    if (orientation === 'landscape') {
      setFontSize(0.028 * winSize.height)
    } else {
      setFontSize(0.035 * winSize.width)
    }
  }, [winSize, params.parentPosition])

  const circleSize = useCallback(
    orientation === 'landscape'
      ? useWindowSize().height * 1.09 - useWindowSize().height
      : useWindowSize().width * 1.13 - useWindowSize().width
  )

  const styles = useCallback(
    StyleSheet.create({
      container: {
        flex: 1,
        position: 'relative',
        alignItems: 'strech',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingVertical:
          orientation === 'landscape'
            ? useWindowSize().height / 250
            : useWindowSize().width / 25,
        paddingHorizontal: orientation === 'landscape' ? 10 : 0,
      },
      line: {
        flex: 1,
        maxHeight: 0,
        borderTopColor: 'black',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignSelf: 'center',
      },
    })
  )

  return (
    <View style={styles.container}>
      <FooterButton
        id={0}
        title={'Home'}
        fontSize={fontSize}
        circleSize={circleSize}
      />
      <View style={styles.line}></View>
      <FooterButton
        id={1}
        title={'Skills'}
        fontSize={fontSize}
        circleSize={circleSize}
      />      
      <View style={styles.line}></View>
      <FooterButton
        id={2}
        title={'Work'}
        fontSize={fontSize}
        circleSize={circleSize}
      />
      <View style={styles.line}></View>
      <FooterButton
        id={3}
        title={'Projects'}
        fontSize={fontSize}
        circleSize={circleSize}
      />
      <View style={styles.line}></View>
      <FooterButton
        id={4}
        title={'Contact'}
        fontSize={fontSize}
        circleSize={circleSize}
      />
    </View>
  )
}

export default React.memo(Footer)
