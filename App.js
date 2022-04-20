import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
// import RestaurantItem from './src/components/RestaurantItem'
import { NavigationContainer } from '@react-navigation/native'
// import restaurants from './assets/data/restaurants.json'
import RootNavigator from './src/navigation'

export default function App() {
	return (
		<NavigationContainer>
			<RootNavigator />

			<StatusBar style='light' />
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
	},
})
