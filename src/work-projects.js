import React, { useState, useEffect, useCallback } from 'react'
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import useWindowSize from './utils/useWindowSize'
import {
  useFonts,
  LibreBaskerville_400Regular,
} from '@expo-google-fonts/libre-baskerville'
import Workbox from './work-box'
import arrow from './img/arrow.svg'

const WorkProjects = () => {
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
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: orientation === 'landscape' ? 'row' : 'column',
        marginHorizontal: orientation === 'landscape' ? '10%' : '5%',
        maxHeight: winSize.height * 0.7,
        marginTop: orientation === 'landscape' ? 0 : '5%',
      },
      flatlist: {
        flex: 1,
      },
      listelement: {
        flex: 1,
        width: size,
        marginHorizontal: orientation === 'landscape' ? 5 : 0,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: orientation === 'landscape' ? 0 : size * 0.05,
      },
      arrows: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: orientation === 'landscape' ? 0 : 10,
      },
      arrowImg: {
        width: winSize.height / 35,
        height: winSize.height / 35,
      },
    })
  )

  var renderList = useCallback(({ item, index }) => (
    <View style={styles.listelement}>
      {setLastIndex(index)}
      <Workbox
        size={size}
        title={item.title}
        description={item.description}
        languages={item.languages}
        link={item.link}
        preview={item.preview}
      />
    </View>
  ))

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrows}
        onPress={() => {
          if (flatIndex > 0) {
            flatRef.scrollToIndex({ index: flatIndex - 1 })
            setFlatIndex(flatIndex - 1)
          } else {
            flatRef.scrollToIndex({ index: 0 })
            setFlatIndex(0)
          }
        }}
      >
        <Image
          source={arrow}
          style={[
            styles.arrowImg,
            {
              transform: [
                { rotate: orientation === 'landscape' ? '180deg' : '-90deg' },
              ],
            },
          ]}
        />
      </TouchableOpacity>
      <FlatList
        style={styles.flatlist}
        extraData={size}
        data={works}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={orientation === 'landscape' ? true : false}
        alwaysBounceVertical={false}
        ref={(ref) => setFlatRef(ref)}
        renderItem={renderList}
      />
      <TouchableOpacity
        style={styles.arrows}
        onPress={() => {
          if (flatIndex < lastIndex - 1) {
            flatRef.scrollToIndex({ index: flatIndex + 1 })
            setFlatIndex(flatIndex + 1)
          } else {
            flatRef.scrollToEnd()
            setFlatIndex(lastIndex - 1)
          }
        }}
      >
        <Image
          source={arrow}
          style={[
            styles.arrowImg,
            {
              transform: [
                { rotate: orientation === 'landscape' ? '0deg' : '90deg' },
              ],
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  )
}

export default React.memo(WorkProjects)
