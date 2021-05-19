import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useWindowSize from './utils/useWindowSize'
import {
  useFonts,
  LibreBaskerville_400Regular,
} from '@expo-google-fonts/libre-baskerville'

const Skills = () => {
  const winSize = useCallback(useWindowSize())

  let [fontsLoaded] = useFonts({
    LibreBaskerville_400Regular,
  })

  const [orientation, setOrientation] = useCallback(useState('landscape'))
  useEffect(() => {
    setOrientation(winSize.height > winSize.width ? 'portrait' : 'landscape')
  }, [winSize])

  const styles = useCallback(
    StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'strech',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'LibreBaskerville_400Regular',
        fontSize:
          orientation === 'landscape'
            ? 0.03 * useWindowSize().height
            : 0.032 * useWindowSize().width,
        color: '#333',
      },
      textTitle: {
        textAlign: 'left',
        fontFamily: 'LibreBaskerville_400Regular',
        fontSize:
          orientation === 'landscape'
            ? 0.035 * useWindowSize().height
            : 0.035 * useWindowSize().width,
        color: '#333',
      },
      contrast: {
        color: 'darkorange',
      },
      titleNo: {
        flex: orientation === 'landscape' ? 2 : 8,
        justifyContent: 'center',
        paddingTop: useWindowSize().height / 100,
      },
      titleLine: {
        flex: orientation === 'landscape' ? 2 : 8,
        justifyContent: 'center',
        borderTopWidth: 2,
        paddingTop: useWindowSize().height / 100,
      },
      spaceNO: {
        flex: 1,
        paddingTop: useWindowSize().height / 100,
      },
      spaceLine: {
        flex: 1,
        borderTopWidth: 2,
        paddingTop: useWindowSize().height / 100,
      },
      content: {
        flex: orientation === 'landscape' ? 2 : 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: useWindowSize().height / 100,
        paddingLeft: useWindowSize().height / 10,
      },
      titleBlock: {
        flex: 1,
        flexDirection: 'row',
      },
      contentBlock: {
        flex: 5,
        flexDirection: 'row',
      },
    })
  )

  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <View style={styles.spaceNO}></View>
        <View style={styles.titleNo}>
          <Text style={styles.textTitle}>
            <Text style={[styles.textTitle, styles.contrast]}>Comfortable</Text>{' '}
            with:
          </Text>
        </View>
        <View style={styles.titleNo}></View>
        <View style={styles.spaceNO}></View>
      </View>
      <View style={styles.contentBlock}>
        <View style={styles.spaceNO}></View>
        <View style={styles.content}>
          <Text style={styles.text}>- Unity</Text>
          <Text style={styles.text}>
            - <Text style={[styles.text, styles.contrast]}>C#</Text>
          </Text>
          <Text style={styles.text}>- HTML</Text>
          <Text style={styles.text}>- CSS</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            - <Text style={[styles.text, styles.contrast]}>JavaScript</Text>
          </Text>
          <Text style={styles.text}>- Git / Github</Text>
          <Text style={styles.text}>- Linux</Text>
          <Text style={styles.text}>- Photoshop</Text>
        </View>
        <View style={styles.spaceNO}></View>
      </View>
      <View style={styles.titleBlock}>
        <View style={styles.spaceLine}></View>
        <View style={styles.titleLine}>
          <Text style={styles.textTitle}>
            <Text style={[styles.textTitle, styles.contrast]}>Knowledge</Text>{' '}
            of:
          </Text>
        </View>
        <View style={styles.titleLine}></View>
        <View style={styles.spaceNO}></View>
      </View>
      <View style={styles.contentBlock}>
        <View style={styles.spaceNO}></View>
        <View style={styles.content}>
          <Text style={styles.text}>- Visual Basic</Text>
          <Text style={styles.text}>- C / C++</Text>
          <Text style={styles.text}>- Java</Text>
          <Text style={styles.text}>- Lua</Text>
          <Text style={styles.text}>- PHP</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            - <Text style={[styles.text, styles.contrast]}>NodeJS</Text>
          </Text>
          <Text style={styles.text}>
            - <Text style={[styles.text, styles.contrast]}>React Native</Text>
          </Text>
          <Text style={styles.text}>- MySQL</Text>
          <Text style={styles.text}>- NoSQL</Text>
          <Text style={styles.text}>- Maya</Text>
        </View>
        <View style={styles.spaceNO}></View>
      </View>
      <View style={styles.titleBlock}>
        <View style={styles.spaceNO}></View>
        <View style={styles.titleLine}>
          <Text style={styles.textTitle}>Spoken languages:</Text>
        </View>
        <View style={styles.titleLine}>
          <Text style={styles.textTitle}>
            <Text style={[styles.textTitle, styles.contrast]}>Certificate</Text>{' '}
            in:
          </Text>
        </View>
        <View style={styles.spaceLine}></View>
      </View>
      <View style={styles.contentBlock}>
        <View style={styles.spaceNO}></View>
        <View style={styles.content}>
          <Text style={styles.text}>- Spanish</Text>
          <Text style={styles.text}>- Catalonian</Text>
          <Text style={styles.text}>
            - <Text style={[styles.text, styles.contrast]}>English</Text>
          </Text>
          <Text style={styles.text}>- Japanese</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>- C / C++</Text>
          <Text style={styles.text}>- Java</Text>
          <Text style={styles.text}>- Jw-CAD</Text>
          <Text style={styles.text}>- JLPT N3</Text>
        </View>
        <View style={styles.spaceNO}></View>
      </View>
    </View>
  )
}

export default React.memo(Skills)
