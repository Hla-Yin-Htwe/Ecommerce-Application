import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import localData from "../../data/db.json";

export function CategoriesSection() {
    const renderCategoryItem = ({ item }: { item: any }) => (
        <View className="ml-2 rounded-xl bg-fuchsia-200 text-white px-3 py-2 ">
            <TouchableOpacity>
                <Text className="text-lg text-purple-950">{item.name}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View className="p-4">
            <Text className="text-xl text-purple-950 mb-2">Categories</Text>

            <FlatList
                data={localData?.categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCategoryItem}
                className="px-2"
            />
        </View>
    );
}
