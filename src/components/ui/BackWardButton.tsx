import { useCart } from "@/src/hooks/CartContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface BackWardButtonProp {
  title: string;
}


export const BackWardButton: React.FC<BackWardButtonProp> = ({ title }) => {
  const router = useRouter();
    const { cartCount } = useCart();
  
  return (
    <View className="py-3 pl-2 w-full mb-3 bg-gray-100 flex-row items-center ">
      <TouchableOpacity
        onPress={() => router.back()}
        className="flex flex-row items-center gap-4"
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text className="font-medium text-xl">{title}</Text>
      
    </View>
  );
};
