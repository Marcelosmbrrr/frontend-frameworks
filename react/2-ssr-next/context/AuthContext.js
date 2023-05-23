import * as React from 'react';
import { useRouter } from 'next/router';
import axios from '../services/axios/api';

export const AuthContext = React.createContext({});

export function AuthProvider({ children }) {

    const router = useRouter();
    const [user, setUser] = React.useState(null);
    const isAuthenticated = !!user;

    // When refresh ...
    React.useEffect(() => {
        if (!/\/home\b/.test(router.asPath)) {
            return;
        }

        const personal_token = localStorage.getItem("nextjs-personal-token");

        if (!personal_token) {
            logout();
        }

        const user_data = JSON.parse(personal_token);

        axios.get("api/auth/refresh?user" + user_data.uuid)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, []);

    async function loginWithCredentials({ email, password, rememberMe }) {
        try {

            const response = await axios.post("api/auth/login", {
                email, password
            });

            localStorage.setItem("nextjs-personal-token", JSON.stringify(response.data));
            setUser(response.data);

            setTimeout(() => {
                router.replace("/home");
            }, 1000);

        } catch (error) {
            throw error;
        }
    }

    async function loginWithGoogle() {
        try {

            console.log('google authentication');

        } catch (error) {
            throw error;
        }
    }

    async function logout() {
        try {
            setUser(null);
            localStorage.clear(); // Refact: remove all with "next_" pattern
            router.replace("/login");
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, loginWithCredentials, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return React.useContext(AuthContext);
}