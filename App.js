import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShowImageLocal from './show_image_local/ShowImageLocal';
import ShowImageOnline from './show_image_online/ShowImageOnline';
import TouchOpacity from './touch_opacity/TouchOpacity';

export default function App() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/*<TouchOpacity/>
      <ShowImageLocal />
      <ShowImageOnline/>*/