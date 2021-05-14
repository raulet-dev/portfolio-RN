import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useWindowSize from './utils/useWindowSize';
import Home from './home';
import Skills from './skills';
import Contact from './contact';
import Work from './work';

const Body = params => {

  const [currentPosition, setCurrentPosition] = useState(params.parentPosition)

  const winSize = useWindowSize();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      alignItems: 'strech',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      paddingVertical: useWindowSize().height/250,
      paddingHorizontal: 10,
    },
  });

  useEffect(()=>{
    setCurrentPosition(params.parentPosition)
  })

  switch(currentPosition){
    case 1:
      return (
        <View style={styles.container}>
          <Skills/>
        </View>
      );
      case 2:
        return (
          <View style={styles.container}>
            <Work/>
          </View>
        );
    case 3:
      return (
        <View style={styles.container}>
          <Contact/>
        </View>
      );
    default:
      return (
        <View style={styles.container}>
          <Home/>
        </View>
      );
      }
}

export default Body