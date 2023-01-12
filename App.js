import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View } from 'react-native';
import ShowImageOnline from './component/show_image_online/ShowImageOnline';
import TouchOpacity from './component/touch_opacity/TouchOpacity';
import TextGiris from './component/text_in/TextGiris';
import ScrollComponent from './component/scroll_component/ScrollComponent';
import FlatLists from './component/flat_lists/FlatLists';
import PlatformEample from './component/platform_example/PlatformEample';
import UserListApi from './component/user_api/UserListApi';

export default function App() {
  return (
    <SafeAreaView>
       <FlatLists/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
   
  },
});


/*    
      * <ScrollComponent/>
      * <TouchOpacity/>
      * <ShowImageLocal/>
      * <ShowImageOnline/>
      * <TextGiris/>

*/