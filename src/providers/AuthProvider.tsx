"use client"
import React, {createContext, useState} from 'react'
import AuthResource from "@/resources/auth";
import _ from 'lodash'
import { IUser } from '@/types';


export const AuthContext = createContext<{
    user: IUser|null|undefined,
    setUser: (v) => void,
    checkUserLogged: <Promise>() => void
}>({
    user: null,
    setUser: () => null,
    checkUserLogged: () => null
});

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = useState();

    const checkUserLogged = async () => {
        AuthResource.me().then((response)=> {
            setUser(response.data)
        }).catch(error => {
            // console.log(error.response)
        })
    }

    return <AuthContext.Provider value={{user, setUser, checkUserLogged}}>{children}</AuthContext.Provider>
}

export default AuthProvider