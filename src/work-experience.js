import React, { useState, useEffect, useCallback } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native'
import useWindowSize from './utils/useWindowSize'
import {
  useFonts,
  LibreBaskerville_400Regular,
} from '@expo-google-fonts/libre-baskerville'

const WorkExperience = () => {
  const winSize = useCallback(useWindowSize())

  const [size, setSize] = useCallback(useState(window.innerHeight / 1.49))

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
        marginHorizontal: orientation === 'landscape' ? '15%' : '5%',
        marginVertical: orientation === 'landscape' ? 0 : '5%',
        alignSelf: 'center',
      },
      scroll: {
        flex: 1,
        flexWrap: 'wrap',
        overflow: 'hidden',
        height: winSize.height * 0.7,
      },
      content: {
        flex: 1,
        position: 'relative',
        marginRight: orientation === 'landscape' ? winSize.height / 14 : 0,
        marginTop: orientation === 'landscape' ? 0 : winSize.width / 8,
      },
      title: {
        textAlign: 'center',
        fontFamily: 'DancingScript_700Bold',
        fontSize:
          orientation === 'landscape'
            ? 0.07 * useWindowSize().height
            : 0.04 * useWindowSize().width,
        color: '#333',
      },
      text: {
        textAlign: 'left',
        fontFamily: 'LibreBaskerville_400Regular',
        fontSize:
          orientation === 'landscape'
            ? 0.035 * useWindowSize().height
            : 0.020 * useWindowSize().width,
        color: '#333',
      },
      contrast: {
        color: 'darkorange',
      },
    })
  )

 
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
      <View style={styles.content}>

<Text style={styles.title}>
  Working Experience
</Text>
<View
  style={{
    position: 'relative',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginHorizontal: 5
  }}
/>
        <Text style={styles.text}>
        {'\n'}{'\n'}
          <Text style={[styles.text, styles.contrast]}>Tokyo Olympics 2020</Text>{'\n'}
The Tokyo Organizing Committee of the Olympic and Paralympic Games{'\n'} 
2021 - 2021{'\n'}
Main Role: <Text style={[styles.text, styles.contrast]}>Venue Support Desk Supervisor.</Text>{'\n'}
Duties and Responsibilities:{'\n'}
{'\t'}- Staff Management.{'\n'}
{'\t'}- Team leader.{'\n'}
{'\t'}- Network set-up in end-user systems.{'\n'}
{'\t'}- Ticket management.{'\n'}
{'\t'}- System monitoring and control.{'\n'}
{'\t'}- System rebuild over network.{'\n'}
{'\n'}
</Text>
<View
  style={{
    position: 'relative',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginHorizontal: 5
  }}
/>
<Text style={styles.text}>
{'\n'}
<Text style={[styles.text, styles.contrast]}>Spanish Navy</Text>{'\n'}
2007 - 2017{'\n'}
Main Role: <Text style={[styles.text, styles.contrast]}>Petty Officer.</Text>{'\n'}
 Duties and Responsibilities:{'\n'}
 {'\t'}- Project management.{'\n'}
 {'\t'}- Staff management.{'\n'}
 {'\t'}- Team leader.{'\n'}
 {'\t'}- Coordination among multiple specialized teams.{'\n'}
 {'\t'}- Implementation and management of security systems/staff of buildings and
complex.{'\n'}
{'\t'}- Training and teaching staffs.{'\n'}
{'\t'}- Providing Firefighting training.{'\n'}
{'\t'}- Providing First Aids training.{'\n'}
{'\t'}- Providing Military training.{'\n'}
{'\t'}- Inventory management.{'\n'}
{'\t'}- System monitoring and control.{'\n'}
{'\t'}- Detecting and solving electrical and mechanical problems.{'\n'}
{'\t'}- Generating and composing governmental/official documents.{'\n'}
{'\n'}
</Text>
<View
  style={{
    position: 'relative',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginHorizontal: 5
  }}
/>
<Text style={styles.text}>
{'\n'}
<Text style={[styles.text, styles.contrast]}>Gokuraku</Text>{'\n'}
Spanish Cybercafe{'\n'}
1999 - 2007{'\n'}
Main Role: <Text style={[styles.text, styles.contrast]}>Computer technician.</Text> {'\n'}
Duties and Responsibilities:{'\n'}
{'\t'}- Network set-up and maintenance.{'\n'}
{'\t'}- Server and client set-up and maintenance.{'\n'}
{'\t'}- Server and client applications management.{'\n'}
{'\t'}- Systems monitoring and control.{'\n'}
{'\t'}- Client disk image making, rebuilding, and installation.{'\n'}
{'\t'}- Inventory management.{'\n'}
{'\t'}- Managing purchase and rental/return of systems and components.{'\n'}
{'\t'}- Searching for providers and partners.{'\n'}
{'\t'}- Customer support.{'\n'}
        </Text>
      </View>
      </ScrollView>
    </View>
  )
}

export default React.memo(WorkExperience)
