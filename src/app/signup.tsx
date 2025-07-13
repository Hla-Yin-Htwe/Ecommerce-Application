import { Button } from '@react-navigation/elements'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const signup = () => {
    const router = useRouter();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}  >
                <ImageBackground source={require("@/src/assets/images/flowerPot.jpg")}
                    resizeMode="cover"
                    style={styles.image}>
                    <Text className='mt-8 text-3xl text-white font-extrabold text-center mb-3'>Create an Account</Text>
                    <TextInput
                        className="mx-3 flex py-4 border mb-5 "
                        placeholder="Email Address"

                    />

                    <TextInput
                        className="mx-3 flex  gap-4 py-4 border  mb-5"
                        placeholder="Password"
                        secureTextEntry

                    />
                    <TextInput
                        className="mx-3 flex  gap-4 py-4 border mb-5"
                        placeholder="Confirm Password"
                        secureTextEntry

                    />

                    <TouchableOpacity >
                        <Button className="rounded mt-3 mb-3 mx-4 bg-violet-700 text-white">Create an Account</Button>
                    </TouchableOpacity>
                    <Text className='text-center text-gray-700'>Already have an account?</Text>

                    <TouchableOpacity
                        onPress={() => router.push("/login")}
                    >
                        <Text className="text-purple-800 text-center">Login</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>

    )
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
export default signup