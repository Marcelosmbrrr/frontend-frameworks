import * as React from 'react';
import { useRouter } from 'next/router';
// Firebase
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../services/firebase';

export const AuthContext = React.createContext({});

export function AuthProvider({ children }) {

    const router = useRouter();
    const [user, setUser] = React.useState(null);
    const isAuthenticated = !!user;

    // When refresh ...
    React.useEffect(() => {
        if (/\/home\b/.test(router.asPath)) {

            onAuthStateChanged(firebaseAuth, (user) => {

                if (user) {
                    const personal_token = localStorage.getItem("nextjs-personal-token");

                    if (!personal_token) {
                        logout();
                    }

                    setUser(JSON.parse(personal_token));
                } else {
                    logout();
                }
            });
        }
    }, []);

    async function login({ email, password }) {

        try {

            const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
            setUser(response.user);
            localStorage.setItem("nextjs-personal-token", JSON.stringify(response.user));

            setTimeout(() => {
                router.replace("/home");
            }, 1000);

        } catch (error) {
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