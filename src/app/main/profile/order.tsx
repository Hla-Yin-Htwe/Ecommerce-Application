import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import Order from "@/src/data/models/Order";
import { OrderCollection } from "@/src/data/schema";
import { BackWardButton } from "@/src/components/ui/BackWardButton";


export default function OrdersScreen() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const allOrders = await OrderCollection.query().fetch();
        setOrders(allOrders);
      } catch (error) {
        console.error("❌ Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const renderItem = ({ item }: { item: Order }) => {
    const orderItems = JSON.parse(item.items);
    return (
      <View className="bg-white rounded-lg shadow p-4 mb-3">
        <Text className="font-bold text-lg">Order Id # {item.orderId}</Text>
        <Text className="text-gray-600">Date: {item.date}</Text>
        <Text className="text-gray-600">Total: {item.total} MMK</Text>

        <Text className="mt-2 font-medium">Items:</Text>
        {orderItems.map((it: any, idx: number) => (
          <Text key={idx} className="text-gray-700">
            - {it.title} x {it.quantity}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View className="flex-1 bg-stone-50 p-4">
        <BackWardButton title="Order"/>
    
      <Text className="text-xl font-bold mb-4">Recent Orders</Text>

      {orders.length === 0 ? (
        <Text className="text-gray-500">No previous orders found.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}
