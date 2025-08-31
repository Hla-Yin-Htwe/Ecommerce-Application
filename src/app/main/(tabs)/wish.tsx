// import { BackWardButton } from "@/src/components/ui/BackWardButton";
// import NotificationListCard from "@/src/components/ui/NotificationListCard";
// // import { PageLoadingModal } from "@/src/components/ui/PageLoadingModal";
// import React, { useState, useEffect } from "react";
// import { ScrollView, View } from "react-native";
// import localData from "../../../data/db.json";

// const NotificationScreen = () => {
//   const [notifications, setNotifications] = useState<any[]>([]);
//   const [pageLoading, setPageLoading] = useState<boolean>(true);

//   useEffect(() => {
//     // Simulate fetching from db.json
//     setNotifications(localData.notifications);
//     setPageLoading(false);
//   }, []);

//   if (pageLoading) {
//     return (
//       <View className="flex-1 justify-center items-center bg-stone-100 dark:bg-black">
//         {/* <PageLoadingModal visible={pageLoading} /> */}
//       </View>
//     );
//   }

//   return (
//     <View className="flex-1 bg-stone-50 dark:bg-black">
//       <BackWardButton title="Notification" />
//       <ScrollView contentContainerClassName="p-4 pb-10">
//         {notifications.map((notification) => (
//           <NotificationListCard
//             key={notification.id}
//             title={notification.title}        
//             message={notification.message}    
//             timestamp={notification.timestamp}
//           />
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default NotificationScreen;
