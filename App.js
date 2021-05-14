import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import useWindowSize from './src/utils/useWindowSize';
import Title from './src/title';
import Footer from './src/footer';
import Body from './src/body';




const App = () => {

  const [parentPosition, setParentPosition] = useState(0)

  const winSize = useWindowSize();
  const [orientation, setOrientation] = useState('landscape')
  useEffect(()=>{
    setOrientation((winSize.height > winSize.width)?'portrait':'landscape')
  })

  const styles = StyleSheet.create({
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
      paddingHorizontal: (orientation === 'landscape')?'12%':'4%',
    }
  });

  return (
    <View style={styles.container}>
      <View className="Title" style={styles.title}>
        <Title/>
      </View>
      <View className="Body" style={styles.body}>
        <Body parentPosition={parentPosition}/>
      </View>
      <View className="Footer" style={styles.footer}>
        <Footer setParentPosition={setParentPosition} parentPosition={parentPosition}/>
      </View>
    </View>
  );
}

export default App
