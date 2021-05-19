import React, { useState, useEffect, useCallback, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import useWindowSize from './src/utils/useWindowSize'
import Title from './src/title'
import Footer from './src/footer'
import Body from './src/body'
import { Context } from './src/context'

const App = () => {
  const [currentPosition, setCurrentPosition] = useCallback(useState(0))
  const winSize = useCallback(useWindowSize())
  const [orientation, setOrientation] = useCallback(useState('landscape'))
  useEffect(() => {
    setOrientation(winSize.height > winSize.width ? 'portrait' : 'landscape')
  }, [winSize])

  const styles = useCallback(
    StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'strech',
        justifyContent: 'flex-start',
      },
      title: {
        flex: 12,
        top: 0,
      },
      body: {
        flex: 78,
      },
      footer: {
        flex: 10,
        bottom: 0,
        paddingHorizontal: orientation === 'landscape' ? '12%' : '4%',
      },
    })
  )

  return (
    <View style={styles.container}>
      <View className='Title' style={styles.title}>
        <Title />
      </View>
      <Context.Provider value={[currentPosition, setCurrentPosition]}>
        <View className='Body' style={styles.body}>
          <Body />
        </View>
        <View className='Footer' style={styles.footer}>
          <Footer />
        </View>
      </Context.Provider>
    </View>
  )
}

export default React.memo(App)
