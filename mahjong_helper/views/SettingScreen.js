import {View, Text, StyleSheet} from 'react-native'


export default function SettingScreen() {
	return (
	  <View style={styles.container}> 
		<Text>Setting Screen</Text>
	  </View>
	);
  }
  

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#25292e',
		alignItems: 'center',
	},



});