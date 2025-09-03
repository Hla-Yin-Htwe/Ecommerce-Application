import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSession } from "../context/AuthContext";
const LoginScreen = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [secureText, setSecureText] = useState<boolean>(true);

  const { login } = useSession();

  const router = useRouter();

//   const handleLogin = async () => {
//   try {
//     const storedUser = await SecureStore.getItemAsync("user");

//     if (!storedUser) {
//       Alert.alert("No user found. Please register first.");
//       return;
//     }

//     const { email: savedEmail, password: savedPassword } = JSON.parse(storedUser);

//     if (email === savedEmail && password === savedPassword) {
//       await login(email, password); // from your AuthContext
//       Alert.alert("Login Success");
//     } else {
//       Alert.alert("Login Failed", "Incorrect email or password");
//     }
//   } catch (error) {
//     console.error(error);
//     Alert.alert("Login Error");
//   }
// };
const handleLogin = async () => {
  try {
    const storedUser = await SecureStore.getItemAsync("user");

    if (!storedUser) {
      Alert.alert("No user found. Please register first.");
      return;
    }

    const { email: savedEmail, password: savedPassword } = JSON.parse(storedUser);

    if (email === savedEmail && password === savedPassword) {
      await login(email, password); // This should navigate to Home
      // 🔹 No need for success Alert here
    } else {
      Alert.alert("Login Failed", "Incorrect email or password");
    }
  } catch (error) {
    // console.error(error);
    Alert.alert("Login Success");
  }
};



  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        enableAutomaticScroll={true}
        keyboardShouldPersistTaps={"never"}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          className="flex flex-col items-center"
        >
          {/* <ImageBackground
            source={require("@/src/assets/images/flowerPot.jpg")}
            resizeMode="cover"
            style={styles.image}
          > */}
          {/* <Text className="mt-10 text-2xl text-white font-extrabold text-center mb-5">
          LOGIN
        </Text> */}
          <Image
            style={{ width: "35%", height: "20%" }}
            source={require("@/src/assets/images/logo.png")}
            resizeMode="contain"
            className="mx-auto mt-12"
          />
          <Text className="text-center font-bold text-2xl text-stone-800 dark:text-stone-200 mt-8">
            Welcome Back
          </Text>
          <Text className="text-center text-stone-600 my-2">
            Sign in to explore NovaShop
          </Text>
          {/* <View className="mx-auto flex-row items-center gap-2 py-6"> */}
          {/* Email Input */}
          <View className="flex-row items-center border border-[#ccc] rounded-[15px] px-[15px] bg-white mx-10 mt-6">
            <Ionicons name="mail-outline" size={24} color="#777" />
            <TextInput
              className="px-6 flex-1 h-14 text-base"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="gray"
            />
          </View>

          {/* Password Input */}
          <View className="flex-row items-center border border-[#ccc] rounded-[15px] px-[15px] bg-white mx-10 mt-5">
            <Ionicons name="lock-closed-outline" size={24} color="#777" />
            <TextInput
              className="px-6 flex-1 h-14 text-base"
              placeholder="Enter your password"
              secureTextEntry={secureText}
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="gray"
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              <Ionicons
                name={secureText ? "eye-off" : "eye"}
                size={24}
                color="#a21caf"
              />
            </TouchableOpacity>
          </View>

                    {/* Login Button */}
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-[#a21caf] rounded-[15px] px-[15px] py-4 px-6 mt-8 mx-10 w-[85%]"
          >
            <Text className="text-white text-center text-lg font-semibold">
              Log In
            </Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-600">Don’t have an account? </Text>
            <Link href="/signup" asChild>
              <TouchableOpacity>
                <Text className="text-[#a21caf] font-semibold">Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* </ImageBackground> */}
        </KeyboardAvoidingView>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default LoginScreen;
