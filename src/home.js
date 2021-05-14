import React, {useState,useEffect}from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import useWindowSize from './utils/useWindowSize';
import {useFonts, LibreBaskerville_400Regular} from '@expo-google-fonts/libre-baskerville'
import portrait from './img/portrait.svg'


const Home = (props, {changePosition}) => {

  const winSize = useWindowSize();

  let [fontsLoaded] = useFonts({
    LibreBaskerville_400Regular,
  });

  const [orientation, setOrientation] = useState('landscape')
  useEffect(()=>{
    setOrientation((winSize.height > winSize.width)?'portrait':'landscape')
  })

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'strech',
      justifyContent: 'center',
      flexDirection: (orientation === 'landscape')?'row':'column-reverse',
      marginLeft: (orientation === 'landscape')?'15%':'5%',
      marginRight: (orientation === 'landscape')?'20%':'5%',
      marginVertical: (orientation === 'landscape')?0:'5%',
      alignSelf: 'center',
    },
    left: {
      flex: 1,
      marginRight: (orientation === 'landscape')?winSize.height/14:0,
      marginTop: (orientation === 'landscape')?0:winSize.width/8,
      flexWrap: 'wrap',
    },
    right: {
      height: (orientation === 'landscape')?winSize.height/3:winSize.width/3.5,
      width: (orientation === 'landscape')?winSize.height/3:winSize.width/3.5,
      borderWidth: 2,
      transform: [{rotate: '45deg'}],
      alignSelf: 'center',
      flexWrap: 'wrap',
      overflow: 'hidden',
    },
    text: {
      textAlign: 'center',
      fontFamily: 'LibreBaskerville_400Regular',
      fontSize: (orientation === 'landscape')?0.045*useWindowSize().height:0.025*useWindowSize().width,
      color: '#333',
      },
    contrast: {
      color: 'darkorange'
    },
    img: {
      height: (orientation === 'landscape')?winSize.height/2.6:winSize.width/3,
      width: (orientation === 'landscape')?winSize.height/2.6:winSize.width/3,
      tintColor: '#222',
      transform: [{rotate: '-45deg'}],
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.text}>
          I'm a former electromechanical engineer at Spanish Navy.
          I had been on duty for more than 10 years, earning good values as <Text style={[styles.text, styles.contrast]}>Teamwork</Text> or <Text style={[styles.text, styles.contrast]}>Project management</Text>.
          After early retirement, I moved to <Text style={[styles.text, styles.contrast]}>Tokyo</Text>, where I'm trying to refocus and pursue my professional career as a <Text style={[styles.text, styles.contrast]}>software developer</Text>, one of my biggest passions.
        </Text>
      </View>
      <View style={styles.right}>
        <Image source={portrait} style={styles.img}/>
      </View>
    </View>
  );
}



export default Home