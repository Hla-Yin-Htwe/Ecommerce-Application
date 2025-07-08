import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { CartProvider } from "../context/CartContext";


export default function RootLayout() {
  <CartProvider>
    <RootLayout/>
  </CartProvider>


  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <Stack>
          {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}

          <Stack.Screen name="main" options={{ headerShown: false }} />
          <StatusBar barStyle={"light-content"} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  )

}

