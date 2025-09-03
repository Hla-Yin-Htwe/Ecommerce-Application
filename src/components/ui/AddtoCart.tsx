import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useCart } from "@/src/hooks/CartContext";
import { ProductType } from "@/src/types/type";
import Toast from "react-native-toast-message";

type AddToCartProps = {
  product: ProductType;
};

const AddtoCart = ({ product }: AddToCartProps) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(product);

    Toast.show({
      type: "success",
      text1: "Added to cart",
      position: "top",
      visibilityTime: 2000,
    });
  };
  return (
    <View className="flex flex-row justify-center rounded-2xl mb-3 gap-3">
      <TouchableOpacity
        onPress={handleAddToCart}
        className="bg-amber-500 rounded-lg flex-row items-center justify-center px-4 py-3 "
        accessibilityLabel="Add item to cart"
        // activeOpacity={0.8} // Slightly reduces opacity on press for feedback
      >
        <FontAwesome name="shopping-cart" size={20} color="white" />
        <Text className="text-white font-medium ml-2">Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-amber-500 rounded-lg w-[100]">
        <Text className="text-white px-4 py-3 font-medium text-center">
          Buy Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddtoCart;
