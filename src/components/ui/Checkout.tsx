import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Checkout = () => {
  return (
    <View className='flex flex-row justify-center rounded-2xl mb-3 gap-3'>
            <TouchableOpacity>
                <Text className='text-gray-700 px-4 py-3 font-medium'>MMK</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-red-800 rounded-lg w-[100]'>
                <Text className='text-white px-4 py-3 font-medium text-center' >Checkout</Text>
            </TouchableOpacity>
        </View>
  )
}

export default Checkout