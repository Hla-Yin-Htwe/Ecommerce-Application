import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const RegisterScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const handleRegister = async () => {
    if (!fullName || !email || !password) {
      Alert.alert("All fields are required");
      return;
    }
    try {
      // Store user credentials securely
      const user = { fullName, email, password };
      await SecureStore.setItemAsync("user", JSON.stringify(user));

      Alert.alert("Register Success", "You can now login with your credentials");
      router.push("/login");
    } catch (error) {
      console.error(error);
      Alert.alert("Registration failed");
    }
  };

  return (
    <ScrollView className="flex-1 bg-white px-6">
      {/* Logo */}
      <Image
        style={{ width: "35%", height: "20%" }}
        source={require("@/src/assets/images/logo.png")}
        resizeMode="contain"
        className="mx-auto text-center mt-12"
      />
      <Text className="text-lg font-bold text-gray-600 text-center mt-2">
        Create your account
      </Text>

      {/* Full Name */}
      <View className="flex-row items-center border border-[#ccc] rounded-[15px] px-[15px] mt-8">
        <Ionicons name="person-outline" size={24} color="#777" />
        <TextInput
          className="px-4 flex-1 h-14 text-base"
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      {/* Email */}
      <View className="flex-row items-center border border-[#ccc] rounded-[15px] px-[15px] mt-5">
        <Ionicons name="mail-outline" size={24} color="#777" />
        <TextInput
          className="px-4 flex-1 h-14 text-base"
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password */}
      <View className="flex-row items-center border border-[#ccc] rounded-[15px] px-[15px] mt-5">
        <Ionicons name="lock-closed-outline" size={24} color="#777" />
        <TextInput
          className="px-4 flex-1 h-14 text-base"
          placeholder="Password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Ionicons
            name={secureText ? "eye-off" : "eye"}
            size={24}
            color="#a21caf"
          />
        </TouchableOpacity>
      </View>

      {/* Register Button */}
      <TouchableOpacity
        onPress={handleRegister}
        className="bg-[#a21caf] rounded-[15px] py-4 mt-8"
      >
        <Text className="text-white text-center text-lg font-semibold">
          Register
        </Text>
      </TouchableOpacity>

      {/* Already have account */}
      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-600">Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text className="text-[#a21caf] font-semibold">Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
