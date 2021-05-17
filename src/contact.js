import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Platform } from 'react-native';
import useWindowSize from './utils/useWindowSize';
import {useFonts, LibreBaskerville_400Regular} from '@expo-google-fonts/libre-baskerville'
import github from './img/github.svg';
import linkedin from './img/linkedin.svg';
import mail from './img/email.svg';
import pdf from './img/pdf.svg';
import resume from './dwn/resume.pdf'

const Contact = () => {

  const [hoverGithub, setHoverGithub] = useState(false)
  const [hoverLinkedin, setHoverLinkedin] = useState(false)
  const [hoverMail, setHoverMail] = useState(false)
  const [hoverPdf, setHoverPdf] = useState(false)

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
      flexDirection: 'column',
      marginHorizontal: (orientation === 'landscape')?'15%':'5%',
    },
    top: {
      flex: 1,
      marginHorizontal: (orientation === 'landscape')?winSize.height/14:winSize.width/20,

      justifyContent: 'center',
    },
    bottom: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'space-around',
      marginHorizontal: (orientation === 'landscape')?winSize.height/14:winSize.width/20,
      marginTop: (orientation === 'landscape')?0:winSize.width/6,
    },
    rombo: {
      height: (orientation === 'landscape')?winSize.height/7:winSize.width/7,
      width: (orientation === 'landscape')?winSize.height/7:winSize.width/7,
      borderWidth: 2,
      transform: [{rotate: '45deg'}],
      alignSelf: 'center',
      flexWrap: 'wrap',
      overflow: 'hidden',
      justifyContent: 'center',
    },
    text: {
      textAlign: 'center',
      fontFamily: 'LibreBaskerville_400Regular',
      fontSize: (orientation === 'landscape')?0.045*useWindowSize().height:0.045*useWindowSize().width,
      color: '#333',
      },
    contrast: {
      color: 'darkorange',
    },
    img: {
      height: (orientation === 'landscape')?winSize.height/11:winSize.width/11,
      width: (orientation === 'landscape')?winSize.height/11:winSize.width/11,
      tintColor: '#222',
      transform: [{rotate: '-45deg'}],
      alignSelf: 'center',
    }
  });

  var url

  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.top}>
        <Text style={styles.text}>
          I'm currently <Text style={[styles.text, styles.contrast]}>open for</Text> a full time <Text style={[styles.text, styles.contrast]}>job </Text>
          or freelance work.
        </Text>
        <Text style={styles.text}>
          Please don't hesitate to <Text style={[styles.text, styles.contrast]}>contact me</Text>!
        </Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={[styles.rombo, {backgroundColor: (hoverGithub)?'lightgrey':''}]}
        onMouseEnter={()=>{setHoverGithub(true)}}
        onMouseLeave={()=>{setHoverGithub(false)}}
        onPress={({url = 'https://github.com/raulet-dev'})=>{(Platform.OS == 'web')?window.open(url,'_blank'):Linking.openURL(url)}}
        >
          <Image source={github} style={[styles.img,{tintColor: (hoverGithub)?'darkorange':'#222'}]}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rombo, {backgroundColor: (hoverLinkedin)?'lightgrey':''}]}
        onMouseEnter={()=>{setHoverLinkedin(true)}}
        onMouseLeave={()=>{setHoverLinkedin(false)}}
        onPress={({url = 'https://www.linkedin.com/in/ra%C3%BAl-pay%C3%A1-morales-106a5813/'})=>{(Platform.OS == 'web')?window.open(url,'_blank'):Linking.openURL(url)}}
        >
          <Image source={linkedin} style={[styles.img,{tintColor: (hoverLinkedin)?'darkorange':'#222'}]}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rombo, {backgroundColor: (hoverMail)?'lightgrey':''}]}
        onMouseEnter={()=>{setHoverMail(true)}}
        onMouseLeave={()=>{setHoverMail(false)}}
        onPress={({url = 'mailto:contact@raulet.dev'})=>{(Platform.OS == 'web')?window.open(url,'_blank'):Linking.openURL(url)}}
        >
          <Image source={mail} style={[styles.img,{tintColor: (hoverMail)?'darkorange':'#222'}]}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rombo, {backgroundColor: (hoverPdf)?'lightgrey':''}]}
        onMouseEnter={()=>{setHoverPdf(true)}}
        onMouseLeave={()=>{setHoverPdf(false)}}
        onPress={({url = resume})=>{(Platform.OS == 'web')?window.open(url,'_blank'):Linking.openURL(url)}}
        >
          <Image source={pdf} style={[styles.img,{tintColor: (hoverPdf)?'darkorange':'#222'}]}/>
        </TouchableOpacity>
      </View>
      <View style={styles.top}></View>
    </View>
  );
}

export default Contact