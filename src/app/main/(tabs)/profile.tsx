import { BackWardButton } from "@/src/components/ui/BackWardButton";
import { useSession } from "@/src/context/AuthContext";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from "react-native";

export default function Profile() {
  const router = useRouter();
  const { logout, userToken } = useSession();

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  const options = [
    {
      title: "Orders",
      icon: <MaterialIcons name="shopping-cart-checkout" size={24} />,
      onPress: () => router.push("/main/(tabs)/home"),
    },
    {
      title: "Favourites",
      icon: <MaterialCommunityIcons name="heart" size={24} color="red" />,
      onPress: () => router.push("/main/placeOrder/favourite"),
    },
    {
      title: "Settings",
      icon: <MaterialIcons name="settings" size={24} />,
      onPress: () => router.push("/main/(tabs)/home"),
    },
    {
      title: "Policies",
      icon: <MaterialIcons name="policy" size={24} />,
      onPress: () => router.push("/main/(tabs)/home"),
    },

  ];
  const perks = [
    {
      title: "Rewards",
      icon: <MaterialCommunityIcons name="gift" size={24} color="#a21caf" />,
    },
    {
      title: "Vouchers",
      icon: (
        <MaterialCommunityIcons
          name="ticket-percent"
          size={24}
          color="#a21caf"
        />
      ),
    },
    {
      title: "Invite Friends",
      icon: (
        <MaterialCommunityIcons
          name="account-multiple-plus"
          size={24}
          color="#a21caf"
        />
      ),
    },
  ];

  const numColumns = 2;
  const cardWidth = (Dimensions.get("window").width - 48) / 2; // padding + gap

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      className="bg-white rounded-lg shadow-md p-4 m-2 flex-col items-center justify-center"
      style={{ width: cardWidth }}
      onPress={item.onPress}
    >
      {item.icon}
      <Text className="mt-2 text-base font-medium">{item.title}</Text>
    </TouchableOpacity>
  );

const renderPerkItem = ({ item, onPress }: any) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row items-center justify-between border-b border-gray-300 py-4 ml-4 mr-4"
  >
    <View className="flex-row items-center">
      {item.icon}
      <Text className="ml-4 text-base font-medium">{item.title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={18} color="gray" />
  </TouchableOpacity>
);
  return (
    <View className="flex-1 bg-stone-50 pt-8">
            <BackWardButton title="Profile" />
      
      {/* User Name */}
      <View className="px-6 mb-6">
        <Text className="text-3xl font-bold text-gray-800">
          {userToken || "User"}
        </Text>
        <Text className="text-gray-500 mt-1 text-sm">Welcome back!</Text>
      </View>

      {/* Cards in 2 columns */}

      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        numColumns={numColumns}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      />

      <View className=" mb-40 bg-gray-100 rounded">
        <Text className="text-xl font-bold text-gray-800 mt-3 ml-3">
          Perks for you
        </Text>
        <FlatList
          data={perks}
          renderItem={renderPerkItem}
          keyExtractor={(item) => item.title}
        />
      </View>
   

      <TouchableOpacity
        onPress={handleLogout}
        className="bg-[#a21caf] rounded-[15px] mt-8 mx-10 w-[85%] p-4 flex-row items-center justify-center mb-5"
      >
        <MaterialIcons name="logout" size={24} color="red" className="mr-2" />
        <Text className="text-white text-lg font-medium">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
