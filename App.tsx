import SegmentedControl from '@react-native-segmented-control/segmented-control'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  console.log('selectedIndex', selectedIndex)

  return (
    <View style={styles.container}>
      <SegmentedControl
        values={['One', 'Two']}
        selectedIndex={selectedIndex}
        style={{ width: 250, height: 36 }}
        onChange={e => setSelectedIndex(e.nativeEvent.selectedSegmentIndex)}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
