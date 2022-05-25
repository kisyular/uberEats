import { View, Text, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'

const OrderListItem = ({ order }) => {
	const navigation = useNavigation()
	// console.log(moment(order.createdAt).fromNow())
	return (
		<Pressable
			onPress={() => navigation.navigate('Order', { id: order.id })}
			style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}
		>
			<Image
				source={{ uri: order.Restaurant.image }}
				style={{ width: 75, height: 75, marginRight: 5 }}
			/>

			<View>
				<Text style={{ fontWeight: '600', fontSize: 16 }}>
					{order.Restaurant.name}
				</Text>
				<Text style={{ marginVertical: 5 }}>
					3 items &#8226; $38.45
				</Text>
				<Text>
					{moment(order.createdAt).fromNow()} &#8226; {order.status}{' '}
				</Text>
			</View>
		</Pressable>
	)
}

export default OrderListItem
