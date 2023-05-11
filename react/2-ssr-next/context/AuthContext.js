import * as React from 'react';
import { useRouter } from 'next/router';
import axios from '../services/api';

export const AuthContext = React.createContext({});

export function AuthProvider({ children }) {

    const { asPath } = useRouter();
    const [user, setUser] = React.useState(null);
    const isAuthenticated = !!user;

    React.useEffect(() => {
        if(/\/home\b/.test(asPath)){
            // verify authentication 
        }
    }, []);

    async function login(data) {
        try {

            // login -> create refresh token and access token
            // set client cookie with access token
            // return response

        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async function logout() {
        try {

            // login -> create refresh token and access token
            // set client cookie with access token
            // return response

        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return React.useContext(AuthContext);
}