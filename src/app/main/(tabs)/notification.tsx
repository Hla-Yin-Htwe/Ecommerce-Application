import { BackWardButton } from "@/src/components/ui/BackWardButton";
import NotificationListCard from "@/src/components/ui/NotificationListCard";
// import { PageLoadingModal } from "@/src/components/ui/PageLoadingModal";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import localData from "../../../data/db.json";
import { useRouter } from "expo-router";

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate fetching from db.json
    setNotifications(localData.notifications);
    setPageLoading(false);
  }, []);

  if (pageLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-stone-100 dark:bg-black">
        {/* <PageLoadingModal visible={pageLoading} /> */}
      </View>
    );
  }

  return (
    <View className="flex-1 bg-stone-50 dark:bg-black">
      <BackWardButton title="Notification" />
      <ScrollView contentContainerClassName="p-4 pb-10">
        {notifications.map((notification) => (
          <NotificationListCard
            key={notification.id}
            title={notification.title}
            message={notification.message}
            timestamp={notification.timestamp}
          />
        ))}

        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "/main/filesSystem/fileSystem",
            });
          }}
          className="bg-[#a21caf] rounded-[15px] mt-4 mx-10 w-[85%] p-4 flex-row items-center justify-center mb-5"
        >
          <Text className="text-white font-semibold text-lg">File System</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;
