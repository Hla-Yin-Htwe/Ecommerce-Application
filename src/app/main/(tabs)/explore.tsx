// import React from 'react'
// import { FlatList, Image, Text, View } from 'react-native'
// import localData from '../../../data/db.json'
// export default function Explore() {
//   return (
//     <>

//       <FlatList
//         data={localData.categories}

//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View className='flex flex-row items-center'>

//             <Text className='text-fuchsia-800 text-lg ml-3'>{item.name}</Text>

//             <Image
//               className='mb-3 mt-3 ml-7 mr-5 rounded '

//               source={{
//                 uri: item.image || 'https://via.placeholder.com/150',
//               }}
//               style={{ width: 150, height: 150, borderRadius: 8 }}
//             />

//           </View>
//         )}
//       />

//     </>
//   )
// }