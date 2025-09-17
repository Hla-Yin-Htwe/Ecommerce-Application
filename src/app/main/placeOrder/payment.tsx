import { BackWardButton } from "@/src/components/ui/BackWardButton";
import * as Notifications from "expo-notifications";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import Order from "@/src/data/models/Order";
import database, { OrderCollection } from "@/src/data/schema";
import { CartItem } from "../../../hooks/CartContext";

export default function Payment() {
  const router = useRouter();
  const { cart, total, quantity } = useLocalSearchParams();

  // Parse cart items safely
  const cartItems: CartItem[] = useMemo(() => {
    try {
      return cart ? JSON.parse(cart as string) : [];
    } catch {
      return [];
    }
  }, [cart]);

  const itemsQuantity = quantity ? parseInt(quantity as string) : 0;
  const itemsTotal = total ? parseFloat(total as string) : 0;
  const deliveryFee = 2000;
  const grandTotal = itemsTotal + deliveryFee;

  const renderItem = ({ item }: { item: CartItem }) => (
    <View className="flex-row items-center justify-between py-2 border-b border-gray-300 px-2">
      <Text className="text-gray-700">{item.title} x {item.quantity}</Text>
      <Text className="text-gray-700">{item.price * item.quantity} MMK</Text>
    </View>
  );

  const handlePlaceOrder = async () => {
    const currentDate = new Date().toLocaleString();

    try {
    await database.write(async () => {
      await OrderCollection.create((order: Order) => {
        order.orderId = Date.now().toString();
        order.items = JSON.stringify(cartItems);
        order.quantity = itemsQuantity;
        order.total = grandTotal;
        order.date = currentDate;
      });
    });


      // 2. Show notification
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Order Placed ✅",
          body: `Your order has been placed successfully on ${currentDate}`,
        },
        trigger: null,
      });

      console.log("Order saved to local DB:", cartItems);

      // 3. Navigate home
      router.replace("/main/(tabs)/home");
    } catch (error) {
      console.error("Failed to save order:", error);
    }
  };

  return (
    <View className="flex-1 bg-stone-50 pt-8 px-4">
      <BackWardButton title="Payment" />

      <Text className="text-xl font-bold mt-4 mb-2">Order Summary</Text>

      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        className="bg-white rounded-lg mb-4"
      />

      <View className="bg-gray-200 rounded-xl p-4 mb-4">
        <View className="flex-row justify-between mb-1">
          <Text className="text-gray-700 font-medium">Items Total ({itemsQuantity})</Text>
          <Text className="text-gray-700 font-medium">{itemsTotal} MMK</Text>
        </View>
        <View className="flex-row justify-between mb-1">
          <Text className="text-gray-700 font-medium">Delivery Fee</Text>
          <Text className="text-gray-700 font-medium">{deliveryFee} MMK</Text>
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
        <Text className="text-white text-center font-medium">Place Your Order</Text>
      </TouchableOpacity>
    </View>
  );
}
