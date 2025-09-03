import { CategoriesSection } from "@/src/components/ui/CategoriesSection";
import { HomeHeader } from "@/src/components/ui/HomeHeader";
import { useCategoryStore } from "@/src/store/useCategoryStore";
import { AntDesign } from "@expo/vector-icons"; // import icons
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import localData from "../../../data/db.json";

export default function HomeScreen() {
  const [isClick, setIsClick] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]); // track favorite items
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const selectedCategoryId = useCategoryStore(
    (state) => state.selectedCategoryId
  );
  const categories = [{ id: null, name: "All" }, ...localData.categories];

  const handlePress = async (id: number) => {
    setIsClick(true);
    await router.push(`/main/product/${id}`);
    setIsClick(false);
  };

  const allProducts = [...localData.products, ...localData.saleProducts];

  // const filteredProducts = selectedCategoryId
  //   ? allProducts.filter(
  //       (product) => product.category?.id === selectedCategoryId
  //     )
  //   : allProducts;
  // ✅ Filtering logic
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategoryId
      ? product.category?.id === selectedCategoryId
      : true;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const renderProductItem = ({ item }: { item: any }) => {
    const isFavorite = favorites.includes(item.id);

    return (
      <View className="flex-1 m-2">
        <View className="relative rounded-lg overflow-hidden">
          <TouchableOpacity
            disabled={isClick}
            onPress={() => handlePress(item.id)}
          >
            <Image
              source={{
                uri: item.images?.[0] || "https://via.placeholder.com/150",
              }}
              style={{ width: "100%", height: 150, borderRadius: 8 }}
            />
          </TouchableOpacity>

          {/* Favorite Icon */}
          <TouchableOpacity
            onPress={() => toggleFavorite(item.id)}
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              // backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: 20,
              padding: 4,
            }}
          >
            <AntDesign
              name={isFavorite ? "heart" : "hearto"}
              size={20}
              color={isFavorite ? "red" : "gray"}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, margin: 8 }}>
          <Text style={{ fontSize: 14, color: "#111", marginTop: 8 }}>
            {item.title}
          </Text>
          <Text style={{ fontSize: 12, color: "#6b21a8", marginTop: 4 }}>
            MMK {item.price}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 px-4">
      <HomeHeader />
      <CategoriesSection />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderProductItem}
        contentContainerStyle={{
          paddingVertical: 10,
        }}
      />
    </View>
  );
}
