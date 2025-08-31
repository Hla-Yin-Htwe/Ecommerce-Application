import { BackWardButton } from "@/src/components/ui/BackWardButton";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useCart, CartItem } from "../../../hooks/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const router = useRouter();

  const [selectedItems, setSelectedItems] = useState<{ [id: string]: boolean }>({});

  const toggleCheckbox = (id: number) => {
    setSelectedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectedTotal = cartItems.reduce((total, item) => {
    if (selectedItems[item.id]) return total + item.price * item.quantity;
    return total;
  }, 0);

  const selectedQuantity = cartItems.reduce((total, item) => {
    if (selectedItems[item.id]) return total + item.quantity;
    return total;
  }, 0);

  const renderItem = ({ item }: { item: CartItem }) => (
    <View className="flex-row items-center justify-between gap-4 p-5 border-b border-gray-200">
      <Checkbox
        value={!!selectedItems[item.id]}
        onValueChange={() => toggleCheckbox(item.id)}
        color={selectedItems[item.id] ? "#a21caf" : undefined}
      />
      <TouchableOpacity
        className="flex-row items-center gap-4 flex-1"
        onPress={() => router.push(`/main/product/${item.id}`)}
      >
        <Image
          source={{ uri: item.images[0] }}
          style={{ width: 60, height: 60, borderRadius: 8 }}
        />
        <View className="flex-1">
          <Text className="text-lg font-medium">{item.title}</Text>
          <Text className="text-fuchsia-800">MMK {item.price}</Text>
          <View className="flex-row items-center mt-1">
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
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <AntDesign name="delete" size={18} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 p-4">
      <BackWardButton title="My Cart" />

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <View className="flex flex-col items-center justify-center h-full">
            <MaterialCommunityIcons name="cart-remove" size={24} color="black" />
            <Text className="text-center mt-2">There are no items in the cart</Text>
            <TouchableOpacity
              onPress={() => router.push("/main/(tabs)/home")}
              className="bg-cyan-700 rounded-lg px-4 py-2 mt-3"
            >
              <Text className="text-center text-white">Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        }
      />

      {/* Selected Items Summary */}
      {Object.values(selectedItems).some(Boolean) && (
        <View className="bg-gray-200 rounded-xl p-4 mt-4">
          <Text className="text-xl font-bold mb-2">Order Summary</Text>
          <View className="flex flex-row justify-between mb-1">
            <Text className="text-gray-700 font-medium">
              Items Total ({selectedQuantity} items)
            </Text>
            <Text className="text-gray-700 font-medium">{selectedTotal} MMK</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="text-gray-700 font-medium">Delivery Fee</Text>
            <Text className="text-gray-700 font-medium">2000 MMK</Text>
          </View>
          <View className="border-t border-gray-400 my-2" />
          <View className="flex flex-row justify-between">
            <Text className="text-gray-700 font-bold">Total</Text>
            <Text className="text-gray-700 font-bold">{selectedTotal + 2000} MMK</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: "/main/placeOrder/payment",
                params: {
                  cart: JSON.stringify(cartItems.filter(item => selectedItems[item.id])),
                  total: (selectedTotal + 2000).toString(),
                  quantity: selectedQuantity.toString(),
                },
              });
            }}
            className="bg-fuchsia-800 rounded-lg w-full mt-3 py-3"
          >
            <Text className="text-white text-center font-medium">Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
