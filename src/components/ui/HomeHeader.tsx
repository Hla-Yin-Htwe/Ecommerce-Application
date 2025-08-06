import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export const HomeHeader = () => {
  const router = useRouter();

  const handleSearchPress = () => {
    router.push("/main/(tabs)/explore");
  };

  return (
    <View className="p-4">
      <View className="flex flex-row items-center justify-between mb-4">
        <Text className="text-2xl text-fuchsia-800 font-semibold">
          Shop with <Text className="font-bold text-black">X</Text>
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/main/(tabs)/cart")}
        >
          <FontAwesome name="shopping-cart" size={24} color="orange" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleSearchPress}
        className="border border-gray-300 rounded-md px-3 py-3 bg-white w-full"
      >
        <View className="flex flex-row items-center">
          <Ionicons name="search" size={24} color="gray" />
          <Text className="text-gray-500 ml-2">Search</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
