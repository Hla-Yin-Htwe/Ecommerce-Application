// import { View, Text, FlatList, Image } from "react-native";
// import localData from "../../../data/db.json";

// type FavouriteScreenProps = {
//   favorites: number[]; 
// };

// export default function Favorite({ favorites }: FavouriteScreenProps) {
//   const allProducts = [...localData.products, ...localData.saleProducts];

  
//   // Filter only favorite products
//   const favoriteProducts = allProducts.filter((product) =>
//     favorites.includes(product.id)
//   );

//   const renderItem = ({ item }: { item: any }) => (
//     <View className="flex-1 m-2">
//       <Image
//         source={{ uri: item.images?.[0] || "https://via.placeholder.com/150" }}
//         style={{ width: "100%", height: 150, borderRadius: 8 }}
//       />
//       <Text className="text-base text-gray-900 mt-2">{item.title}</Text>
//       <Text className="text-sm text-purple-900 mt-1">MMK {item.price}</Text>
//     </View>
//   );

//   return (
//     <View className="flex-1 px-4">
//       {favoriteProducts.length === 0 ? (
//         <Text className="text-center mt-10 text-gray-500">
//           No favorites added yet.
//         </Text>
//       ) : (
//         <FlatList
//           data={favoriteProducts}
//           keyExtractor={(item) => item.id.toString()}
//           numColumns={2}
//           showsVerticalScrollIndicator={false}
//           renderItem={renderItem}
//           contentContainerStyle={{ paddingVertical: 10 }}
//         />
//       )}
//     </View>
//   );
// }
