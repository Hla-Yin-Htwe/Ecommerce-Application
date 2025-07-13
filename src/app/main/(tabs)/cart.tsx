import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useCart } from '@/hooks/CartContext';
import { ProductType } from '@/src/types/type';
import { useRouter } from 'expo-router';
import Checkout from '../placeOrder/checkout';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { CartItem } from '@/hooks/CartContext';
import { BackWardButton } from '@/src/components/ui/BackWardButton';
// import Checkbox from 'expo-checkbox';

export default function Cart() {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const router = useRouter();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  // const [isChecked, setChecked] = useState(false);

  const renderItem = ({ item }: { item: CartItem }) => (
    <View className="flex-row items-center justify-between gap-4 p-5 border-b border-gray-200">
      <TouchableOpacity
        className='flex-row items-center gap-4 flex-1'
        onPress={() => router.push(`/main/product/${item.id}`)}
      >
        {/* <Checkbox
          className='p-2 '
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EE' : undefined}
        /> */}
        <Image
          source={{ uri: item.images[0] }}
          style={{ width: 60, height: 60, borderRadius: 8 }}
        />
        <View className="flex 1">
          <Text className="text-lg font-medium">{item.title}</Text>
          <Text className="text-fuchsia-800">MMK {item.price}</Text>
          {/* <Text className="text-gray-500">Quantity: {item.quantity}</Text> */}
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => decrementQuantity(item.id)}>
              <Text className="px-2">-</Text>
            </TouchableOpacity>
            <Text className="px-2">{item.quantity}</Text>
            <TouchableOpacity onPress={() => incrementQuantity(item.id)}>
              <Text className="px-2">+</Text>
            </TouchableOpacity>
          </View>

        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className='mt-5'
        onPress={() => removeFromCart(item.id)}
      >
        <AntDesign name="delete" size={18} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 p-4">

      <BackWardButton title="My Cart"

      />

      {/* <Text className="text-2xl font-bold mb-4">My Cart</Text> */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <View className='flex flex-col items-center justify-center h-full'>
            <MaterialCommunityIcons name="cart-remove" size={24} color="black" />
            <Text className='text-center'>There are no items in the cart</Text>
            <TouchableOpacity
              onPress={() => router.push('/main/(tabs)/home')}
              className='bg-cyan-700  rounded-lg px-4 py-2 mt-3'>
              <Text className='text-center text-white'>Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        }
      />
      {cartItems.length > 0 && (
        <View className='flex flex-row justify-center rounded-2xl mb-3 gap-3'>

          <Text className='text-gray-700 py-3 font-bold'>  Total: {totalPrice} MMK</Text>

          {/* <Text className='text-gray-700 px-3 py-3 font-bold'>MMK</Text> */}


          <TouchableOpacity
            onPress={() => router.push({
              pathname: "/main/placeOrder/checkout",
              params: { cart: JSON.stringify(cartItems) }
            })}
            className='bg-fuchsia-800 rounded-lg w-[100]'
          >
            <Text className='text-white px-3 py-3 font-medium text-center'>Checkout</Text>
          </TouchableOpacity>

        </View>
      )
      }

    </View >
  );
}
