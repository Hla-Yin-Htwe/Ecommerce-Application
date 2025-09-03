import { FlatList, Text, TouchableOpacity, View } from "react-native";
import localData from "../../data/db.json";
import { useCategoryStore } from "../../store/useCategoryStore";

export function CategoriesSection() {
  const { selectedCategoryId, setSelectedCategoryId } = useCategoryStore();

  const handleCategoryPress = (id: number | null) => {
    setSelectedCategoryId(id);
  };

  const categories = [{ id: null, name: "All" }, ...localData.categories];

  const renderCategoryItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => handleCategoryPress(item.id)}>
      <View
        className={`ml-2 rounded-xl px-3 py-2 ${
          selectedCategoryId === item.id ? "bg-purple-400" : "bg-fuchsia-200"
        }`}
      >
        <Text className="text-lg text-purple-950">{String(item.name)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="p-4">
      <Text className="text-xl text-purple-950 mb-2">Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id?.toString() ?? "all"}
        renderItem={renderCategoryItem}
        className="px-2"
      />
    </View>
  );
}
