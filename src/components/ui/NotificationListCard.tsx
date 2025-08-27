import { View, Text } from "react-native";
import React from "react";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";

type NotificationListCardProps = {
  title: string;
  message: string;
  timestamp: string | number | Date;
};


const formatTime = (time: string | number | Date) => {
  const now = moment();
  const input = moment(time);
  const diffSeconds = now.diff(input, "seconds");

  if (diffSeconds < 60) return "Now";
  if (now.diff(input, "hours") < 24) {
    const hours = now.diff(input, "hours");
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  }
  return input.format("DD-MM-YYYY");
};

const NotificationListCard: React.FC<NotificationListCardProps> = ({
  title,
  message,
  timestamp,
}) => {
  return (
    <View className="flex-row bg-white dark:bg-slate-800 p-4 mb-3 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 items-start space-x-3">
      <View className="mt-1 mr-2">
        <MaterialIcons name="notifications" size={24} color="#a21caf" />
      </View>
      <View className="flex-1">
        <Text className="font-semibold text-base text-gray-900 dark:text-gray-100">
          {title}
        </Text>
        <Text className="text-gray-600 dark:text-gray-300 text-sm mt-1">
          {message}
        </Text>
        <Text className="text-gray-400 dark:text-gray-500 text-xs mt-2">
          {formatTime(timestamp)}
        </Text>
      </View>
    </View>
  );
};

export default NotificationListCard;
