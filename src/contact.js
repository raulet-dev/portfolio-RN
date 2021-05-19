import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useWindowSize from './utils/useWindowSize'
import {
  useFonts,
  LibreBaskerville_400Regular,
} from '@expo-google-fonts/libre-baskerville'
import github from './img/github.svg'
import linkedin from './img/linkedin.svg'
import mail from './img/email.svg'
import pdf from './img/pdf.svg'
import resume from './dwn/resume.pdf'
import ContactButton from './contactButton'

const Contact = () => {
  const winSize = useWindowSize()

  let [fontsLoaded] = useFonts({
    LibreBaskerville_400Regular,
  })

  const [contactSize, setContactSize] = useCallback(useState(0))

  const [orientation, setOrientation] = useCallback(useState('landscape'))
  useEffect(() => {
    setOrientation(winSize.height > winSize.width ? 'portrait' : 'landscape')
    if (orientation === 'landscape') {
      setContactSize(winSize.height)
    } else {
      setContactSize(winSize.width)
    }
  }, [winSize])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'strech',
      justifyContent: 'center',
      flexDirection: 'column',
      marginHorizontal: orientation === 'landscape' ? '15%' : '5%',
    },
    top: {
      flex: 1,
      marginHorizontal:
        orientation === 'landscape' ? winSize.height / 14 : winSize.width / 20,

      justifyContent: 'center',
    },
    bottom: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'space-around',
      marginHorizontal:
        orientation === 'landscape' ? winSize.height / 14 : winSize.width / 20,
      marginTop: orientation === 'landscape' ? 0 : winSize.width / 6,
    },
    text: {
      textAlign: 'center',
      fontFamily: 'LibreBaskerville_400Regular',
      fontSize:
        orientation === 'landscape'
          ? 0.045 * winSize.height
          : 0.045 * winSize.width,
      color: '#333',
    },
    contrast: {
      color: 'darkorange',
    },
  })

  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.top}>
        <Text style={styles.text}>
          I'm currently{' '}
          <Text style={[styles.text, styles.contrast]}>open for</Text> a full
          time <Text style={[styles.text, styles.contrast]}>job </Text>
          or freelance work.
        </Text>
        <Text style={styles.text}>
          Please don't hesitate to{' '}
          <Text style={[styles.text, styles.contrast]}>contact me</Text>!
        </Text>
      </View>
      <View style={styles.bottom}>
        <ContactButton
          url={'https://github.com/raulet-dev'}
          size={contactSize}
          img={github}
        />
        <ContactButton
          url={
            'https://www.linkedin.com/in/ra%C3%BAl-pay%C3%A1-morales-106a5813/'
          }
          size={contactSize}
          img={linkedin}
        />
        <ContactButton
          url={'mailto:contact@raulet.dev'}
          size={contactSize}
          img={mail}
        />
        <ContactButton url={resume} size={contactSize} img={pdf} />
      </View>
      <View style={styles.top}></View>
    </View>
  )
}

export default React.memo(Contact)
