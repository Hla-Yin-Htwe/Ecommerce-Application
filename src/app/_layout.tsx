import { Slot, Stack } from "expo-router";
import React, {  useEffect } from "react";
import { ActivityIndicator, useColorScheme, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { AuthProvider, useSession } from "../context/AuthContext";
import { useRouter } from "expo-router";
import { CartProvider } from "../hooks/CartContext";
import {store} from "@/src/store/store"
import { Provider } from "react-redux";
import Toast from 'react-native-toast-message'
function LayoutWrapper() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useSession();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/main/(tabs)/home");
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return(
    
    <CartProvider >
      <SafeAreaProvider>
        <SafeAreaView className="flex-1">
         
          <Slot />
          <Toast/>
        </SafeAreaView>

      </SafeAreaProvider>
            {/* <StatusBar barStyle={"light-content"} /> */}
    </CartProvider>
  );
  }
  

export default function RootLayout() {

  return (
    
    
   <Provider store={store}> 
     <AuthProvider>
      <LayoutWrapper />
    </AuthProvider>
    </Provider>
    
  )

}

