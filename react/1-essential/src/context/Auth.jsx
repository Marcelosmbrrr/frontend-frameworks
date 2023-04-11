

import * as React from 'react';

export const AuthContext = React.createContext({});

export function AuthProvider({ children }) {

    const [user, setUser] = React.useState(null);

    // !! = short way to cast a variable to be a boolean
    const isAuthenticated = !!user;

    React.useEffect(() => {

        const exec = async () => {
            try {

                if (!localStorage.getItem("react.auth")) {
                    throw new Error("Token expired.");
                }

                const data = JSON.parse(localStorage.getItem("react.auth"));

                setUser(data);

            } catch (error) {
                console.log(error);
                window.location.replace("/");
            }
        }

        if (/\/internal/.test(window.location.href)) {
            exec();
        }

    }, []);

    // When doing login ...
    async function login(form) {

        const data = {
            name: "guest",
            email: form.email,
            password: form.password,
            last_access: new Date().toLocaleString()
        };

        localStorage.setItem("react.auth", JSON.stringify(data));

        setUser(data);
    }

    // When doing logout ...
    async function logout() {
        try {

            if (!localStorage.getItem("react.auth")) {
                throw new Error("Token expired.");
            }

            localStorage.removeItem("react.auth");

        } catch (e) {
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

