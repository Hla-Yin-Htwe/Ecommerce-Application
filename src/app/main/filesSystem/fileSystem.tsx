import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import * as FileSystem from "expo-file-system";
import { BackWardButton } from "@/src/components/ui/BackWardButton";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [savedPath, setSavedPath] = useState(null);

  const FILE_URL =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  const FILE_NAME = "dummy.pdf";

  // Progress callback
  const progressCallback = (downloadProgress) => {
    const pct =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite;
    setProgress(pct);
  };

  const downloadToDownloadsFolder = async () => {
    try {
      // Step 1: Ask Android for permission to access Downloads folder
      const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

      if (!permissions.granted) {
        alert("Permission denied. Cannot save file.");
        return;
      }

      // Step 2: Download file into app cache
      const tempUri = FileSystem.cacheDirectory + FILE_NAME;

      const downloadResumable = FileSystem.createDownloadResumable(
        FILE_URL,
        tempUri,
        {},
        progressCallback
      );

      const { uri } = await downloadResumable.downloadAsync();
      console.log("Downloaded to cache:", uri);

      // Step 3: Create file in Downloads folder
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const newUri = await FileSystem.StorageAccessFramework.createFileAsync(
        permissions.directoryUri,
        FILE_NAME,
        "application/pdf"
      );

      // Step 4: Write the file to Downloads
      await FileSystem.writeAsStringAsync(newUri, base64, {
        encoding: FileSystem.EncodingType.Base64,
      });

      setSavedPath(newUri);
      console.log("Saved to:", newUri);
      alert("✅ File saved to Downloads!");
    } catch (e) {
      console.error("Download error:", e);
    }
  };

  return (
    <View style={styles.container}>
      <BackWardButton title="File System" />
      <Text style={styles.title}>📥 Save File to Downloads (Android)</Text>

      <Button title="Download & Save" onPress={downloadToDownloadsFolder} />

      <Text style={styles.info}>
        Progress: {(progress * 100).toFixed(2)}%
      </Text>

      {savedPath && (
        <Text style={styles.success}>
          ✅ File saved at: {"\n"} {savedPath}
        </Text>
      )}

      {Platform.OS === "ios" && (
        <Text style={{ color: "red", marginTop: 20 }}>
          ⚠ This method only works on Android.  
          For iOS, use expo-sharing.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  info: {
    marginTop: 20,
    fontSize: 16,
  },
  success: {
    marginTop: 10,
    fontSize: 14,
    color: "green",
    textAlign: "center",
  },
});
