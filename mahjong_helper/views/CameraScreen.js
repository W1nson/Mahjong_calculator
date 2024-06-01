import {View, Text, StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';

import Button from '../components/Button';
import CameraModule from '../components/CameraModule';

export default function CameraScreen() {
	return (
	//   <View style={styles.container}> 
	// 	<Text>Camera Screen</Text>
	//   </View>

	<View style={styles.container}>
        <CameraModule/>
	    <StatusBar style="auto" />
    </View>
	);
  }
  

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});