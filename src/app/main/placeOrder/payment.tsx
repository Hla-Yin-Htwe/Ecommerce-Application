import { BackWardButton } from "@/src/components/ui/BackWardButton";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import { CartItem } from "../../../hooks/CartContext";

export default function Payment() {
  const router = useRouter();
  const { cart, total, quantity } = useLocalSearchParams();

  // Parse cart items
  const cartItems: CartItem[] = useMemo(() => {
    try {
      return cart ? JSON.parse(cart as string) : [];
    } catch {
      return [];
    }
  }, [cart]);

  const grandTotal = total ? parseFloat(total as string) : 0;

  const renderItem = ({ item }: { item: CartItem }) => (
    <View className="flex-row items-center justify-between py-2 border-b border-gray-300 px-2">
      <Text className="text-gray-700">{item.title} x {item.quantity}</Text>
      <Text className="text-gray-700">{item.price * item.quantity} MMK</Text>
    </View>
  );

  const handlePlaceOrder = () => {
    // TODO: Implement actual payment logic
    alert("Order placed successfully!");
    router.replace("/main/(tabs)/home"); // Navigate back to home after payment
  };

  return (
    <View className="flex-1 bg-stone-50 pt-8 px-4">
      <BackWardButton title="Payment" />

      <Text className="text-xl font-bold mt-4 mb-2">Order Summary</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        className="bg-white rounded-lg mb-4"
      />

      <View className="bg-gray-200 rounded-xl p-4 mb-4">
        <View className="flex-row justify-between mb-1">
          <Text className="text-gray-700 font-medium">Items Total ({quantity})</Text>
          <Text className="text-gray-700 font-medium">{total} MMK</Text>
        </View>
        <View className="flex-row justify-between mb-1">
          <Text className="text-gray-700 font-medium">Delivery Fee</Text>
          <Text className="text-gray-700 font-medium">2000 MMK</Text>
        </View>
        <View className="border-t border-gray-400 my-2" />
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-bold">Grand Total</Text>
          <Text className="text-gray-700 font-bold">{grandTotal} MMK</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={handlePlaceOrder}
        className="bg-fuchsia-800 rounded-lg w-full py-3"
      >
        <Text className="text-white text-center font-medium">Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}
