import { BackWardButton } from "@/src/components/ui/BackWardButton";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import React, { useState } from "react";
import {
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [frontId, setFrontId] = useState<string | null>(null);
  const [backId, setBackId] = useState<string | null>(null);

  // Pick from gallery
  const pickImage = async (setImage: (uri: string) => void) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Take with camera
  const takeWithCamera = async (setImage: (uri: string) => void) => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveImage = async (uri: string, filename: string) => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission required", "Allow access to save images!");
        return;
      }

      const asset = await MediaLibrary.createAssetAsync(uri);
      let album = await MediaLibrary.getAlbumAsync("Download");
      if (!album) {
        album = await MediaLibrary.createAlbumAsync("Download", asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }

      Alert.alert("Successfully", `${filename} saved!`);
    } catch (error) {
      console.error("Error saving image:", error);
      Alert.alert("Error", "Failed to save image");
    }
  };

  return (
    <View className="flex-1 bg-stone-50 dark:bg-black">
      <BackWardButton title="File System" />

      {/* Front ID */}
      <View className="px-6 mb-6 items-center">
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          Upload Front ID
        </Text>

        {/* Image Preview */}
        <TouchableOpacity onPress={() => pickImage(setFrontId)}>
          <Image
            source={
              frontId
                ? { uri: frontId }
                : require("@/src/assets/images/coffeeCup.jpg")
            }
            className="w-64 h-40 mb-4 rounded-lg"
          />
        </TouchableOpacity>

        {/* Take with Camera Button */}
        <TouchableOpacity
          onPress={() => takeWithCamera(setFrontId)}
          className="flex-row items-center space-x-2 mt-2 bg-blue-500 px-4 py-2 rounded-xl"
        >
          <Ionicons name="camera-outline" size={20} color="white" />
          <Text className="text-white text-lg font-medium">
            Take with Camera
          </Text>
        </TouchableOpacity>
      </View>

      {/* Back ID */}
      <View className="px-6 mb-6 items-center">
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          Upload Back ID
        </Text>

        {/* Image Preview */}
        <TouchableOpacity onPress={() => pickImage(setBackId)}>
          <Image
            source={
              backId
                ? { uri: backId }
                : require("@/src/assets/images/coffeeCup.jpg")
            }
            className="w-64 h-40 mb-4 rounded-lg"
          />
        </TouchableOpacity>

        {/* Take with Camera Button */}
        <TouchableOpacity
          onPress={() => takeWithCamera(setBackId)}
          className="flex-row items-center space-x-2 mt-2 bg-blue-500 px-4 py-2 rounded-xl"
        >
          <Ionicons name="camera-outline" size={20} color="white" />
          <Text className="text-white text-lg font-medium">
            Take with Camera
          </Text>
        </TouchableOpacity>
      </View>

      {/* Save Button */}
      <TouchableOpacity
        onPress={() => {
          if (frontId) saveImage(frontId, "front_id.jpg");
          if (backId) saveImage(backId, "back_id.jpg");
        }}
        className="mx-6 mt-4 bg-indigo-600 py-3 rounded-2xl flex-row items-center justify-center shadow-md active:bg-indigo-700"
      >
        {/* <Ionicons
          name="download-outline"
          size={22}
          color="white"
          className="mr-2"
        /> */}
        <Text className="text-white text-lg font-semibold">
          Save Both Images
        </Text>
      </TouchableOpacity>
    </View>
  );
}
