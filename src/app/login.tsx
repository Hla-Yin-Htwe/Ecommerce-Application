import { Ionicons } from "@expo/vector-icons";
import { Button } from "@react-navigation/elements";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
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
  const [email, setEmail] = useState<string>("hyh@gmail.com");
  const [password, setPassword] = useState<string>("123456");
  const [loading, setLoading] = useState<boolean>(false);
  const [secureText, setSecureText] = useState<boolean>(false);

  const { login } = useSession();

  const router = useRouter();

  const handleLogin = async (data: any) => {
    const sampleEmail = "hyh@gmail.com";
    const samplePassword = "123456";

    if (email === sampleEmail && password === samplePassword) {
      // console.log('login  pressed')
      await login(email, password);
      Alert.alert("Login Success");
    } else {
      Alert.alert("Login Failed", "Incorrect email or password");
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
          <ImageBackground
            source={require("@/src/assets/images/flowerPot.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
            {/* <Text className="mt-10 text-2xl text-white font-extrabold text-center mb-5">
          LOGIN
        </Text> */}
            <Image
              style={{ width: "45%", height: "30%" }}
              source={require("@/src/assets/images/coffeeBook.jpg")}
              resizeMode="contain"
              className="mx-auto"
            />
            <Text className="text-center font-bold text-2xl text-stone-800 dark:text-stone-200 mt-8">
              Welcome Back
            </Text>
            <Text className="text-center text-stone-700 dark:text-stone-200 my-4">
              Let's sign in for explore continues
            </Text>
            <Text className="text-white font-semibold ml-3 ">Email:</Text>
            {/* <View className="mx-auto flex-row items-center gap-2 py-6"> */}
            <View className="flex-row items-center border border-[#ccc] rounded-[15px] px-[15px] bg-white">
              <Ionicons name="mail-outline" size={24} color="#777" />
              <TextInput
                className="px-6 w-full h-14 text-base"
                placeholder="example@gmail.com"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholderTextColor="gray"
              />
            </View>

            <Text className="ml-3 text-white font-semibold mt-5 mb-3">
              Password:
            </Text>
            <View className="flex-row items-center border border-[#ccc] rounded-[15px] px-[15px] bg-white">
              <Ionicons name="mail-outline" size={24} color="#777" />
              <TextInput
                className=" px-6 w-full h-14 text-base"
                placeholder="Enter your password"
                secureTextEntry
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

            <TouchableOpacity>
              <Button
                className="rounded mt-3 mb-3 mx-4"
                onPressIn={handleLogin}
              >
                LogIn
              </Button>
            </TouchableOpacity>
            <Link href={"/signup"} asChild>
              <TouchableOpacity>
                <Text className="text-purple-800 text-center">Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </ImageBackground>
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
