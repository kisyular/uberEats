import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
// import RestaurantItem from './src/components/RestaurantItem'
import { NavigationContainer } from '@react-navigation/native'
// import restaurants from './assets/data/restaurants.json'
import RootNavigator from './src/navigation'
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
import AuthContextProvider from './src/contexts/AuthContext'
import BasketContextProvider from './src/contexts/BasketContext'
import OrderContextProvider from './src/contexts/OrderContext'

Amplify.configure({
	...awsconfig,
	Analytics: {
		disabled: true,
	},
})

const App = () => {
	return (
		<NavigationContainer>
			<AuthContextProvider>
				<BasketContextProvider>
					<OrderContextProvider>
						<RootNavigator />
					</OrderContextProvider>
				</BasketContextProvider>
			</AuthContextProvider>
			<StatusBar style='light' />
		</NavigationContainer>
	)
}

const signUpConfig = {
	signUpFields: [
		{
			label: 'Your Name',
			key: 'name',
			required: true,
			displayOrder: 1,
			type: 'string',
		},
	],
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

export default withAuthenticator(App, { signUpConfig })
