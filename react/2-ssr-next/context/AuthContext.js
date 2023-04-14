
import * as React from 'react';
import Router from 'next/router';
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { env } from '@/next.config';
import { axios } from '@/services/api';

export const AuthContext = React.createContext({});

export function AuthProvider({ children }) {

    const [user, setUser] = React.useState(null);

    const isAuthenticated = !!user;

    // when app refresh
    React.useEffect(() => {

        // verify if is an internal pathname
        // verify authentication
        console.log('reload - verify authentication');

    }, []);

    async function login(form) {
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

            // get cookie (access token)
            // logout -> invalidate refresh token
            // destroy client cookie (access token)
            // return response

        } catch (e) {
            console.log(e)
        } 
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

// Hook
export function useAuth() {
    return React.useContext(AuthContext);
}