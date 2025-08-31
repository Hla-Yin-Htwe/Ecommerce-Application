import { Button } from "@react-navigation/elements";
import { Link, useRouter } from "expo-router";
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function Index() {
    const router= useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}  >
        <ImageBackground source={require("@/src/assets/images/flowerPot.jpg")}
          resizeMode="cover"
          style={styles.image}>
            <View>
              <Text className="text-3xl text-center text-fuchsia-800">NovaShop</Text>
              <Text className="text-center text-gray-700 mb-3">One Stop solution for all your needs</Text>
            </View>
            <TouchableOpacity >
              <Button className="rounded mt-3 mb-3 mx-4" >Continue with Email</Button>
            </TouchableOpacity>
            <TouchableOpacity >
              <Button className="rounded mt-3 mb-3 mx-4" >Continue with Google</Button>
            </TouchableOpacity>
            <TouchableOpacity >
              <Button className="rounded mt-3 mb-3 mx-4" >Continue with Apple</Button>
            </TouchableOpacity>
            <Text className="text-center text-gray-500 mb-2">Already have an account?</Text>
            
            <TouchableOpacity
            onPress={() => router.push("/login")}
            >
              <Text className="text-purple-800 text-center">Login</Text>
            </TouchableOpacity>
            

        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },

});
