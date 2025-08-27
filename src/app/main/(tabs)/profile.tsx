import { useSession } from "@/src/context/AuthContext";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const router = useRouter();
  const { logout } = useSession();
  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  const { userToken } = useSession();
  return (
    <View className="flex-1 bg-stone-50">
      {/* <View className="bg-fuchsia-800 flex-row justify-between rounded-b-3xl px-6 py-5 rounded-t-3xl items-center">
        <View>
          <Text className="text-white text-2xl font-bold">
            Welcome to Shop With X
          </Text>
          <Text className="text-white mt-1">👋 Hello {userToken}</Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/main/(tabs)/notification")}
        >
          <MaterialIcons name="notifications" size={24} color="white" />
        </TouchableOpacity>
      </View> */}
      <Text className="text-gray text-2xl font-bold">{userToken}</Text>
      <TouchableOpacity className="text-gray text-sm">
        View Profile
      </TouchableOpacity>
      <TouchableOpacity
        className="mt-5 mx-4 p-4 bg-white rounded-lg shadow-md flex-row items-center gap-2"
        onPress={() => router.push("/main/(tabs)/home")}
      >
        <MaterialIcons name="shopping-cart-checkout" size={20} color="black" />
        <Text>Orders</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        className="mt-3 mx-4 p-4 bg-white rounded-lg shadow-md flex-row items-center gap-2"
        onPress={() =>
          router.push({
            pathname: "/main/placeOrder/favourite",
            params: { favorites: JSON.stringify(favorites) },
          })
        }
      >
        <MaterialCommunityIcons name="account" size={20} color="black" />
        <Text>Favourites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="mt-3 mx-4 p-4 bg-white rounded-lg shadow-md flex-row items-center gap-2"
        onPress={() => router.push("/main/(tabs)/home")}
      >
        <MaterialIcons name="settings" size={20} color="black" />
        <Text>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="mt-3 mx-4 p-4 bg-white rounded-lg shadow-md flex-row items-center gap-2"
        onPress={() => router.push("/main/(tabs)/home")}
      >
        <MaterialIcons name="policy" size={20} color="black" />
        <Text>Policies</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="mt-3 mx-4 p-4 bg-white rounded-lg shadow-md flex-row items-center gap-2"
        onPress={() => router.push("/main/(tabs)/home")}
      >
        <MaterialIcons name="feedback" size={20} color="black" />
        <Text>Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="mt-5  p-4 bg-white rounded-lg shadow-md flex-row items-center"
        onPress={handleLogout}
      >
        <MaterialIcons name="logout" size={20} color="red" />
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
