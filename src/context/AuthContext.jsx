import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { PROFESSOR_ENDPOINT } from "../util/constants";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ token, setToken ] = useState(null);
    const [ isReady, setIsReady ] = useState(false);

    const login = async(userData, user_type) => {
        try {
            if(user_type === 'admin') {
                const res = await axios.post(`${PROFESSOR_ENDPOINT}/admin/login`, userData);
                setUser(res.data.user);
                setToken(res.data.token);
                localStorage.setItem('objex@auth_user', JSON.stringify(res.data.user));
                localStorage.setItem('objex@auth_token', res.data.token);
                setIsReady(true);
                return true;
            }

            if(user_type === 'professor') {
                const res = await axios.post(`${PROFESSOR_ENDPOINT}/login`, userData);
                console.log(res.error);
                console.log(res.data);
                setUser(res.data.user);
                setToken(res.data.token);
                localStorage.setItem('objex@auth_user', JSON.stringify(res.data.user));
                localStorage.setItem('objex@auth_token', res.data.token);
                setIsReady(true);
                return true;
            }

        } catch (error) {
            console.log(error);
            return false;
        }
    };

    const logout = async() => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('objex@auth_user');
        localStorage.removeItem('objex@auth_token');
    }

    const retrive_user_data = async() => {
        const user = JSON.parse(localStorage.getItem('objex@auth_user'));
        const token = localStorage.getItem('objex@auth_token');
        if(user && token) {
            setUser(user);
            setToken(token);
            setIsReady(true);
            return;
        }

        setIsReady(true);
    }

    useEffect(() => {
        retrive_user_data()
    }, []);

    return (
        <AuthContext.Provider value={
            {
                user,
                token,
                login,
                logout
            }
        }>
            { isReady ? children : null }
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;