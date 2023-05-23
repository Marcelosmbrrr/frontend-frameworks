import * as React from 'react';
import { useRouter } from 'next/router';
// Firebase
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";
import { firebaseAuth, firebaseDB } from '../services/data-access/firebase';

export const AuthContext = React.createContext({});

export function AuthProvider({ children }) {

    const router = useRouter();
    const [user, setUser] = React.useState(null);
    const isAuthenticated = !!user;

    // When refresh ...
    React.useEffect(() => {
        if (/\/home\b/.test(router.asPath)) {
            const personal_token = localStorage.getItem("nextjs-personal-token");
            if (!personal_token) {
                logout();
            }

            const fetch = async () => {
                const userData = JSON.parse(personal_token);
                const ref = doc(firebaseDB, "users", userData.uuid);
                const docSnap = await getDoc(ref);
                setUser({ uuid: docSnap.localId, ...docSnap.data() });
            }

            fetch();
        }
    }, []);

    async function loginWithCredentials({ email, password, rememberMe }) {
        try {
            const response = await signInWithEmailAndPassword(firebaseAuth, email, password);

            const ref = doc(firebaseDB, "users", response.user.uid);
            const docSnap = await getDoc(ref);

            if (docSnap.exists()) {

                localStorage.setItem("nextjs-personal-token", JSON.stringify({ uuid: response.user.uid, ...docSnap.data() }));
                setUser({ uuid: response.user.uid, ...docSnap.data() });

                setTimeout(() => {
                    router.replace("/home");
                }, 1000);

            } else {
                throw new Error("Unable to connect.");
            }
        } catch (error) {
            throw error;
        }
    }

    async function loginWithGoogle() {
        try {

            const provider = new GoogleAuthProvider();

            const response = await signInWithPopup(firebaseAuth, provider);

            const credential = provider.credentialFromResult(response);
            const token = credential.accessToken;
            const user = response.user;

            setUser(user);
            localStorage.setItem("nextjs-personal-token", JSON.stringify(response.user));
            localStorage.setItem("nextjs-oAuth0-token", token);

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
            localStorage.clear();
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