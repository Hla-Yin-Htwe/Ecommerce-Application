import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BackWardButton } from "@/src/components/ui/BackWardButton";

const Payment = () => {
  return (
    <View className="flex-1 p-4 bg-white">
      <BackWardButton title="Payment" />
      <Text className="text-xl font-bold mt-5 mb-3">Payment Method</Text>

      <TouchableOpacity className="bg-fuchsia-800 rounded-lg py-3 px-4 mb-3">
        <Text className="text-white text-center font-medium">Pay with Card</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-gray-800 rounded-lg py-3 px-4">
        <Text className="text-white text-center font-medium">Pay with Cash</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;
