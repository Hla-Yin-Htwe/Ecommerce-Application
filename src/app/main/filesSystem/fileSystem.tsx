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
  // Inside your ChildRegistration component

  // State for Front and Back ID
  const [frontId, setFrontId] = useState<string | null>(null);
  const [backId, setBackId] = useState<string | null>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);

  // Pick image from gallery
  const pickImage = async (setImage: (uri: string) => void) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "We need access to your photos!");
      return;
    }

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

  // Take photo with camera
  const takeWithCamera = async (setImage: (uri: string) => void) => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "We need access to your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Save image to Media Library
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
  const handleSave = async () => {
  console.log("Front ID:", frontId);
  console.log("Back ID:", backId);

  if (!frontId || !backId) {
    Alert.alert("Error", "Please select both front and back images");
    return;
  }

  const formData = new FormData();

  formData.append("frontId", {
    uri: frontId,
    type: "image/jpeg",
    name: "front_id.jpg",
  } as any);

  formData.append("backId", {
    uri: backId,
    type: "image/jpeg",
    name: "back_id.jpg",
  } as any);

  try {
    const response = await fetch("http://BACKEND_URL/upload", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const result = await response.json();
    console.log("Server response:", result);
    Alert.alert("Success", "Images uploaded successfully!");
  } catch (error) {
    console.error("Upload failed:", error);
    Alert.alert("Error", "Failed to upload images");
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
        <View style={{ flexDirection: "row", alignItems: "center" }}>
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
            className="flex-row items-center space-x-2 mt-2  px-4 py-2 rounded-xl"
          >
            <Ionicons name="camera-outline" size={20} color="black" />
            <Text className="text-black text-lg font-medium">
              Take with Camera
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Back ID */}
      <View className="px-6 mb-6 items-center">
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          Upload Back ID
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
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
            className="flex-row items-center space-x-2 mt-2  px-4 py-2 rounded-xl"
          >
            <Ionicons name="camera-outline" size={20} color="black" />
            <Text className="text-black text-lg font-medium">
              Take with Camera
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity
        onPress={() => {
          if (frontId) saveImage(frontId, "front_id.jpg");
          if (backId) saveImage(backId, "back_id.jpg");
        }}
        className="mx-6 mt-4 bg-indigo-600 py-3 rounded-2xl flex-row items-center justify-center shadow-md active:bg-indigo-700"
      >
        <Ionicons
          name="download-outline"
          size={22}
          color="white"
          className="mr-2"
        />
        <Text className="text-white text-lg font-semibold">Save to Gallery</Text>
        
      </TouchableOpacity>
      <View style={{ margin: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            padding: 12,
            borderRadius: 30,
            alignItems: "center",
            width: "40%",
            alignSelf: "center",
            elevation: 3,
            marginBottom: 30,
          }}
          onPress={handleSave}
        >
          <Text
            style={{
              color: "#1CABE2",
              fontSize: 20,
              fontWeight: "bold",
              lineHeight: 35,
            }}
          >
            {"Save"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
