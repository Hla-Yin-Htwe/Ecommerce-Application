import { BackWardButton } from "@/src/components/ui/BackWardButton";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { CartItem } from "../../../hooks/CartContext";

const Checkout = () => {
  const router = useRouter();
  const { cart, total, quantity } = useLocalSearchParams();
  const [selectedItems, setSelectedItems] = useState<{ [id: string]: boolean }>(
    {}
  );

  // Parse the cart param (it will be a string)
  const cartItems: CartItem[] = useMemo(() => {
    try {
      return cart ? JSON.parse(cart as string) : [];
    } catch {
      return [];
    }
  }, [cart]);

  const deliveryFee = 2000;
  const grandTotal = total ? parseFloat(total as string) + deliveryFee : 0;

  

  return (
    <View>
      <BackWardButton title="Checkout" />

      <View className="bg-white-200 rounded-xl mb-3">
        <Text className="text-xl text-gray-700 font-bold ml-3">
          Delivery Information
        </Text>

        <Text className="text-gray-700 px-4 py-3 font-medium">Full Name</Text>
        <TextInput
          placeholder="Enter your name"
          className="mx-4 flex py-3 border border-gray-400 "
        />

        <Text className="text-gray-700 px-4 py-3 font-medium">
          Phone Number
        </Text>
        <TextInput
          placeholder="Enter your phone number"
          className="mx-4 flex py-3 border border-gray-400 "
        />
        <Text className="text-gray-700 px-4 py-3 font-medium">Email</Text>

        <TextInput
          placeholder="Enter your email"
          className="mx-4 flex py-3 border border-gray-400 "
        />
        <Text className="text-gray-700 px-4 py-3 font-medium">Address</Text>
        <TextInput
          placeholder="Enter your address"
          className="mx-4 flex py-3 border border-gray-400 "
        />
      </View>
      <View className="bg-gray-200 rounded-xl mb-3 mt-3">
        <Text className="text-xl text-gray-700 font-bold ml-3">
          Order Summary
        </Text>

        <View className="flex flex-row justify-between items-center">
          <Text className="text-gray-700 px-4 py-3 font-medium">
            Items Total
            <Text className="text-gray-500"> ({quantity} items) </Text> 
          </Text>
          <Text className="text-gray-700 px-4 py-3 font-medium mr-3">
            {total} Ks
          </Text>
        </View>
        <View className="flex flex-row justify-between">
          <Text className="text-gray-700 px-4 py-3 font-medium ">
            Delivery Fee
          </Text>
          <Text className="text-gray-700 px-4 py-3 font-medium mr-3">
            {deliveryFee} Ks
          </Text>
        </View>
        <View className="border-t border-gray-400 mx-4 my-1" />
        <View className="flex flex-row justify-between ">
          <Text className="text-gray-700 px-4 py-3 font-medium">Total</Text>
          <Text className="text-gray-700 px-4 py-3 font-medium mr-3">
            {grandTotal} Ks
          </Text>
        </View>
      </View>

      <View className="flex flex-row justify-center rounded-2xl  gap-3 mt-3 ">
        <TouchableOpacity
          // onPress={() => router.push("/main/placeOrder/checkout")}
  
          className="bg-fuchsia-800 rounded-lg w-[100] "
        >
          <Text className="text-white px-3 py-3 font-medium text-center">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;
