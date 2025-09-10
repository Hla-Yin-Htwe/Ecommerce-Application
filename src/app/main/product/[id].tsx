import { router, useLocalSearchParams } from "expo-router";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import localData from "../../../data/db.json";
import { BackWardButton } from "@/src/components/ui/BackWardButton";
import AddtoCart from "@/src/components/ui/AddtoCart";
import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "@/src/hooks/CartContext";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
    const { cartCount } = useCart();
  

  const product = localData.products.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-red-500">Product not found</Text>
      </View>
    );
  }

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
          <View className="absolute -top-2 -right-2 bg-red-600 rounded-full w-5 h-5 justify-center items-center">
            <Text className="text-white text-xs font-bold">{cartCount}</Text>
          </View>
        )}

          </TouchableOpacity>
        </View>

        <Image
          source={{ uri: product.images?.[0] }}
          style={{ width: "100%", height: 300, borderRadius: 10 }}
        />
        <Text className="text-2xl font-semibold mt-4">{product.title}</Text>
        <Text className="text-lg text-fuchsia-800 mt-2">MMK {product.price}</Text>
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
