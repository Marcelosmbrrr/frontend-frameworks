import * as React from 'react';
import { useRouter } from 'next/router';
import axios from '../services/api';

export const AuthContext = React.createContext({});

export function AuthProvider({ children }) {

    const router = useRouter();
    const [user, setUser] = React.useState(null);
    const isAuthenticated = !!user;

    React.useEffect(() => {
        if (/\/home\b/.test(router.asPath)) {

            const personal_token = localStorage.getItem("nextjs-personal-token");

            if (!personal_token) {
                logout();
            }

            setUser(JSON.parse(personal_token));
        }
    }, []);

    async function login({ email, password }) {
        try {

            const data = {
                id: 1,
                name: "Tester",
                email: email,
                role: {
                    id: 1,
                    name: "Tester"
                },
                created_at: new Date().getDate()
            }

            setUser(data);

            localStorage.setItem("nextjs-personal-token", JSON.stringify(data));

            setTimeout(() => {
                router.replace("/home");
            }, 2000);

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

            setUser(null);
            localStorage.removeItem("nextjs-personal-token");

            router.replace("/login");

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