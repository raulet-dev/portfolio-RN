import React, {useState,useEffect}from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import useWindowSize from './utils/useWindowSize';
import {useFonts, DancingScript_700Bold} from '@expo-google-fonts/dancing-script'


const Footer = params => {

  const [currentPosition, setCurrentPosition] = useState(params.parentPosition)
  const [hoverHome, setHoverHome] = useState(false)
  const [hoverSkills, setHoverSkills] = useState(false)
  const [hoverWork, setHoverWork] = useState(false)
  const [hoverContact, setHoverContact] = useState(false)

  const winSize = useWindowSize();

  let [fontsLoaded] = useFonts({
    DancingScript_700Bold,
  });

  const [orientation, setOrientation] = useState('landscape')
  useEffect(()=>{
    setCurrentPosition(params.parentPosition)
    setOrientation((winSize.height > winSize.width)?'portrait':'landscape')
  })

  const circleSize = (orientation === 'landscape')?((useWindowSize().height*1.09)-(useWindowSize().height)):((useWindowSize().width*1.13)-(useWindowSize().width))

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      alignItems: 'strech',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      paddingVertical: (orientation === 'landscape')?useWindowSize().height/250:useWindowSize().width/25,
      paddingHorizontal: (orientation === 'landscape')?10:0,
    },
    circle: {
      flex: 1,
      height: circleSize,
      maxWidth: circleSize,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: '100%',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    line: {
      flex: 1,
      maxHeight: 0,
      borderTopColor: 'black',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      alignSelf: 'center',
    },
    text: {
      textAlign: 'center',
      textAlignVertical: 'center',
      fontFamily: 'DancingScript_700Bold',
      fontSize: (orientation === 'landscape')?0.028*useWindowSize().height:0.035*useWindowSize().width,
      }
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.circle, (currentPosition === 0)?{backgroundColor: 'lightgrey'}:(hoverHome)?{backgroundColor: 'lightgrey'}:'']}
        onMouseEnter={()=>{setHoverHome(true)}}
        onMouseLeave={()=>{setHoverHome(false)}}
        onPress={() =>{params.setParentPosition(0)}}>
        <Text style={[styles.text, (hoverHome)?{color: 'darkorange'}:'']}>Home</Text>
      </TouchableOpacity>
      <View style={styles.line}>
      </View>
      <TouchableOpacity 
        style={[styles.circle, (currentPosition  === 1)?{backgroundColor: 'lightgrey'}:(hoverSkills)?{backgroundColor: 'lightgrey'}:'']}
        onMouseEnter={()=>{setHoverSkills(true)}}
        onMouseLeave={()=>{setHoverSkills(false)}}
        onPress={() =>{params.setParentPosition(1)}}>
        <Text style={[styles.text, (hoverSkills)?{color: 'darkorange'}:'']}>Skills</Text>
      </TouchableOpacity>
      <View style={styles.line}>
      </View>
      <TouchableOpacity 
        style={[styles.circle, (currentPosition  === 2)?{backgroundColor: 'lightgrey'}:(hoverWork)?{backgroundColor: 'lightgrey'}:'']}
        onMouseEnter={()=>{setHoverWork(true)}}
        onMouseLeave={()=>{setHoverWork(false)}}
        onPress={() =>{params.setParentPosition(2)}}>
        <Text style={[styles.text,, (hoverWork)?{color: 'darkorange'}:'']}>Work</Text>
      </TouchableOpacity>
      <View style={styles.line}>
      </View>
      <TouchableOpacity 
        style={[styles.circle, (currentPosition  === 3)?{backgroundColor: 'lightgrey'}:(hoverContact)?{backgroundColor: 'lightgrey'}:'']}
        onMouseEnter={()=>{setHoverContact(true)}}
        onMouseLeave={()=>{setHoverContact(false)}}
        onPress={() =>{params.setParentPosition(3)}}>
        <Text style={[styles.text, (hoverContact)?{color: 'darkorange'}:'']}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}



export default Footer