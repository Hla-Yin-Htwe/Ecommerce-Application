import { View, Text } from 'react-native';
import { useCart } from '@/src/context/CartContext'

export default function Cart() {
  const { cart } = useCart();

  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-3">Cart Items:</Text>
      {cart.map((id, index) => (
        <Text key={index}>Product ID: {id}</Text>

      ))}
    </View>
  );
}
