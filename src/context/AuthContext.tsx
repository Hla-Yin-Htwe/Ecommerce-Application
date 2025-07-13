import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AuthContextType } from "../types/authTypes";
import * as SecureStore from 'expo-secure-store';


type loginDataType = {
    email: string;
    password: string;
};

const SessionContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
    children }: {

        children: React.ReactNode;
    }) => {
    const [userToken, setUserToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadStoredData = async () => {
            const storedToken = await SecureStore.getItemAsync("userToken");
            setUserToken(storedToken);
            setIsLoading(false);
        };
        loadStoredData();
    }, [userToken]);

    const login = async (token: string) => {
        await SecureStore.setItemAsync('userToken', token);
        setUserToken(token);
    };

    let isAuthenticated = !!userToken;

    const logout = async () => {
        await SecureStore.deleteItemAsync('userToken');
        setUserToken(null);
    };

    return (
        <SessionContext.Provider value={{ userToken, login, logout, isAuthenticated, isLoading }}>
            {children}
        </SessionContext.Provider>
    );
}

export const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error("useSession must be used within a SessionProvider");
    }
    return context;
};


