import AddtoCart from "@/src/components/ui/AddtoCart";
import { BackWardButton } from "@/src/components/ui/BackWardButton";
import { useCart } from "@/src/hooks/CartContext";
import { FontAwesome } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import localData from "../../../data/db.json";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();

  const product = localData.products.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-red-500">Product not found</Text>
      </View>
    );
  }
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <View className="flex-1 px-4">
      <ScrollView className="flex-1 p-4">
        <View className="flex-row items-center mb-4 mr-5">
          <BackWardButton title="Product Details" />
          <TouchableOpacity
            className="flex justify-end mr-auto"
            onPress={() => router.push("/main/(tabs)/cart")}
          >
            <FontAwesome name="shopping-cart" size={24} color="orange" />
            {cartCount > 0 && (
              <View className="absolute -top-2 -right-2 bg-red-600 rounded-full px-2">
                <Text className="text-white text-xs">{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <Image
          source={{ uri: product.images?.[0] }}
          style={{ width: "100%", height: 300, borderRadius: 10 }}
        />
        <Text className="text-2xl font-semibold mt-4">{product.title}</Text>
        <Text className="text-lg text-fuchsia-800 mt-2">
          MMK {product.price}
        </Text>
        <Text className="text-base text-gray-600 mt-4">
          {product.description}
        </Text>
        <Text className="text-medium text-gray-800">Size: </Text>
        <Text>S </Text>
      </ScrollView>

      <AddtoCart product={product} />
    </View>
  );
}
