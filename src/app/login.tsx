import { Button } from "@react-navigation/elements";
import { Link, useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({ }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // sample credentials
    const sampleEmail = 'hyh@gmail.com';
    const samplePassword = '123456';
    const router = useRouter();




    const handleLogin = async () => {
        if (email === sampleEmail && password === samplePassword) {
            // Save fake token in SecureStore
            await SecureStore.setItemAsync('userToken', '123456');
            Alert.alert('Login Success', 'Welcome!');

            // router.replace("/main/(topTab)/Home/homePage");


        } else {
            Alert.alert('Login Failed', 'Incorrect email or password');
        }
    };

    return (
        <SafeAreaView style={styles.container}  >
            <ImageBackground source={require("@/src/assets/images/flowerPot.jpg")}
                resizeMode="cover"
                style={styles.image}>
                <Text className='mt-10 text-2xl text-white font-extrabold text-center mb-5'>LOGIN</Text>
                <Text className='text-white font-semibold ml-3 '>Email:</Text>
                <TextInput
                    className="mx-3 flex py-4 border border-gray-400 "
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text className='ml-3 text-white font-semibold mt-5 mb-3'>Password:</Text>
                <TextInput
                    className="mx-3 flex  gap-4 py-4 border border-gray-400 mb-5"
                    placeholder="Enter your password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity >
                    <Button className="rounded mt-3 mb-3 mx-4" onPressIn={handleLogin}>LogIn</Button>
                </TouchableOpacity>
                <Link href={"/signup"} asChild>
                    <TouchableOpacity>
                        <Text className="text-purple-800 text-center">Sign Up</Text>
                    </TouchableOpacity>
                </Link>
            </ImageBackground>
        </SafeAreaView>
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



export default LoginScreen;
