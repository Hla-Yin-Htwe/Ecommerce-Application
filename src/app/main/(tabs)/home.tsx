import { CategoriesSection } from '@/src/components/ui/CategoriesSection';
import { HomeHeader } from '@/src/components/ui/HomeHeader';
import { useRouter } from 'expo-router';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import localData from '../../../data/db.json';

export default function HomeScreen() {
  const [isClick, setIsClick] = useState(false);
  const router = useRouter();

  const handlePress = async (id: number) => {
    setIsClick(true);
    await router.push(`/main/product/${id}`);
    setIsClick(false);
  };

  const renderProductItem = ({ item }: { item: any }) => (
    <View className="flex-1 m-2">
      <TouchableOpacity
        disabled={isClick}
        onPress={() => handlePress(item.id)}
        className="rounded-lg overflow-hidden"
      >
        
        <Image
          source={{
            uri: item.images?.[0] || 'https://via.placeholder.com/150',
          }}
          style={{ width: '100%', height: 150, borderRadius: 8 }}
        />
      </TouchableOpacity>

      <Text className="text-sm text-purple-900 mt-2">MMK {item.price}</Text>
      <Text className="text-base text-gray-900">{item.title}</Text>
    </View>
  );

  return (
    <View className="flex-1 px-4">
      <HomeHeader />
      <CategoriesSection />

      <FlatList
        data={localData.products}
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
