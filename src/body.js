import React, { useCallback, useContext, useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import useWindowSize from './utils/useWindowSize'
import Home from './home'
import Skills from './skills'
import Contact from './contact'
import Work from './work'
import { Context } from './context'

const Body = () => {
  const [currentPosition, setCurrentPosition] = useCallback(useContext(Context))
  const [content, setContent] = useCallback(useState(0))

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      alignItems: 'strech',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      paddingVertical: useWindowSize().height / 250,
      paddingHorizontal: 10,
    },
  })

  useEffect(() => {
    switch (currentPosition) {
      case 1:
        setContent(<Skills />)
        break
      case 2:
        setContent(<Work />)
        break
      case 3:
        setContent(<Contact />)
        break
      default:
        setContent(<Home />)
        break
    }
  }, [currentPosition])

  return <View style={styles.container}>{content}</View>
}

export default React.memo(Body)
