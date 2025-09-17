import { useCart } from "@/src/hooks/CartContext";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const HomeHeader = ( )=> {
  const router = useRouter();

  // const handleSearchPress = () => {
  //   router.push("/main/(tabs)/explore");
  // };
  const {cartItems} =useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View className="p-4">
      <View className="flex flex-row items-center justify-between mb-4">
        {/* <Image
          style={{ width: "35%", height: "20%" }}
          source={require("@/src/assets/images/logo.png")}
          resizeMode="contain"
          className="mx-auto mt-12"
        /> */}
        <Text className="text-2xl text-fuchsia-800 font-semibold">
          Nova<Text className="font-bold text-black">Shop</Text>
        </Text>
        <TouchableOpacity onPress={() => router.push("/main/(tabs)/cart")}>
          <FontAwesome name="shopping-cart" size={24} color="orange" />
          {cartCount > 0 && (
          <View className="absolute -top-2 -right-2 bg-red-600 rounded-full px-2">
            <Text className="text-white text-xs">{cartCount}</Text>
          </View>
        )}
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        onPress={handleSearchPress}
        className="border border-gray-300 rounded-md px-3 py-3 bg-white w-full"
      > */}
        <View className="flex-row items-center bg-gray-100 px-3 py-1 rounded-xl mt-4 border border-gray-400 rounded">
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            className="flex-1 ml-2 text-base"
            placeholder="Search products..."
            // value={searchQuery}
            // onChangeText={setSearchQuery}
          />
        </View>
      {/* </TouchableOpacity> */}
    </View>
  );
};
