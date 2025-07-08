import { useLocalSearchParams } from "expo-router";
import { Text, View, Image, ScrollView } from "react-native";
import localData from "../../../data/db.json";
import { BackWardButton } from "@/src/components/ui/BackWardButton";
import AddtoCart from "@/src/components/ui/AddtoCart";

export default function ProductDetail() {
    const { id } = useLocalSearchParams();


    const product = localData.products.find(
        (item) => item.id.toString() === id
    );

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
                <BackWardButton title="Product Details" />

                <Image
                    source={{ uri: product.images?.[0] }}
                    style={{ width: "100%", height: 300, borderRadius: 10 }}
                />
                <Text className="text-2xl font-semibold mt-4">{product.title}</Text>
                <Text className="text-lg text-fuchsia-800 mt-2">${product.price}</Text>
                <Text className="text-base text-gray-600 mt-4">{product.description}</Text>
                <Text className="text-medium text-gray-800">Size: </Text>
                <Text>S </Text>

            </ScrollView>

            <AddtoCart productId={product.id} />

        </View>

    );
}
