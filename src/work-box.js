import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Platform } from 'react-native';
import {useFonts, LibreBaskerville_400Regular} from '@expo-google-fonts/libre-baskerville'
import github from './img/github.svg';

const WorkBox = (params) => {

  const [size, setSize] = useState(params.size)
  const [hover, setHover] = useState(false)

  let [fontsLoaded] = useFonts({
    LibreBaskerville_400Regular,
  });

  useEffect(()=>{
    setSize(params.size)
  })


  const styles = StyleSheet.create({
    container: {
      position: 'relative',
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: size,
      height: size,
    },
    top: {
      borderWidth: 2,
      width: size+4,
      height: (size/1.77777)+4,
      overflow: 'hidden',
      backgroundColor: 'blue',
      borderRadius: 20,
    },
    bottom: {
      flex: 1,
    },
    description: {
      flex: 2,
      justifyContent: 'center',
    },
    githubLink: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

    },
    rombo: {
      height: size/10,
      width: size/10,
      borderWidth: 2,
      transform: [{rotate: '45deg'}],
      alignSelf: 'center',
      flexWrap: 'wrap',
      overflow: 'hidden',
      justifyContent: 'center',
      right: -size/42,
      backgroundColor: 'white'
    },
    text: {
      textAlign: 'center',
      fontFamily: 'LibreBaskerville_400Regular',
      fontSize: size/18,
      color: '#333',
      marginBottom: size/60,
      },
    textLink: {
      textAlign: 'center',
      fontFamily: 'LibreBaskerville_400Regular',
      fontSize: size/25,
      color: '#333',
      borderWidth: 2,
      borderLeftWidth: 0,
      paddingHorizontal: size/15,
      paddingVertical: size/100,
      backgroundColor: 'white',
      zIndex: -1,
      },
    contrast: {
      color: 'darkorange',
    },
    img: {
      height: size/13,
      width: size/13,
      tintColor: '#222',
      transform: [{rotate: '-45deg'}],
      alignSelf: 'center',
    },
    preview: {
      width: size,
      height: size/1.77777,
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('./img/' + params.preview)} style={styles.preview}/>
      </View>
      <View style={styles.bottom}>
        <View style={styles.description}>
          <Text style={styles.text}>{params.description}</Text>
          <Text style={styles.text}>{params.languages}</Text>
        </View>
        <TouchableOpacity style={styles.githubLink}
        onMouseEnter={()=>{setHover(true)}}
        onMouseLeave={()=>{setHover(false)}}
        onPress={({url = params.link})=>{(Platform.OS == 'web')?window.open(url,'_blank'):Linking.openURL(url)}}
        >
          <View style={[styles.rombo, (hover)?{backgroundColor: 'lightgrey'}:'']}>
            <Image source={github} style={[styles.img, (hover)?{tintColor: 'darkorange'}:'']}/>
          </View>
          <Text style={[styles.textLink, (hover)?{backgroundColor: 'lightgrey', color: 'darkorange'}:'']}> to Github</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



export default WorkBox