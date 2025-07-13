import { Button } from "@react-navigation/elements";
import { Link, useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSession } from "../context/AuthContext";

const LoginScreen = ({ }) => {
    const [email, setEmail] = useState<string>('hyh@gmail.com');
    const [password, setPassword] = useState<string>('123456');
    const [loading, setLoading] = useState<boolean>(false)


    const { login } = useSession();

    const router = useRouter();




    const handleLogin = async (data: any) => {
        const sampleEmail = 'hyh@gmail.com';
        const samplePassword = '123456';

        if (email === sampleEmail && password === samplePassword) {
            // console.log('login  pressed')
            await login(email, password)
            Alert.alert('Login Success');
        } else {
            Alert.alert('Login Failed', 'Incorrect email or password');
        }
    };



    return (
        <View style={styles.container}  >
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
        </View>
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
