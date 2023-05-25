import * as React from 'react';
import { useRouter } from 'next/router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase';
import axios from '../utils/api';

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
            signOut();
            return;
        }

        const user_data = JSON.parse(personal_token);

        axios.get("api/auth/refresh/" + user_data.uuid)
            .then((response) => {
                setUser(response.data.user);
            })
            .catch((error) => {
                console.error(error);
            })
    }, []);

    async function signInWithCredentials({ email, password, rememberMe }) {
        try {

            const response = await axios.post("api/auth/login", {
                email, password
            });

            localStorage.setItem("nextjs-personal-token", JSON.stringify(response.data.user));
            setUser(response.data.user);

            if (rememberMe) {
                localStorage.setItem("remember-me", JSON.stringify({ email, password, rememberMe }));
            }

            setTimeout(() => {
                router.replace("/home");
            }, 1000);

        } catch (error) {
            throw error;
        }
    }

    async function signInWithGoogle() {
        try {

            const provider = new GoogleAuthProvider();

            const oauth = await signInWithPopup(firebaseAuth, provider);

            let response = await axios.get("api/auth/oauth/" + oauth.user.reloadUserInfo.localId);

            if (Number(response.data.found) === 0) {
                response = await axios.post("api/auth/oauth/register", {
                    uuid: oauth.user.reloadUserInfo.localId,
                    name: oauth.user.displayName,
                    email: oauth.user.email
                });
            }

            setUser({
                name: response.data.user.name,
                email: response.data.user.email,
                role: response.data.user.role,
                created_at: response.data.user.created_at
            });

            setTimeout(() => {
                router.replace("/home");
            }, 1000);

        } catch (error) {
            console.error(error)
            throw error;
        }
    }

    async function signOut() {
        try {
            setUser(null);
            localStorage.removeItem("nextjs-personal-token");
            router.replace("/login");
        } catch (error) {
            console.error(error)
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signInWithCredentials, signInWithGoogle, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return React.useContext(AuthContext);
}