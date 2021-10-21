import React, { createContext, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

type UserData = {
    id: number;
    first_name: string;
    last_name: string;
    birth_date: Date;
    sex_gender: string;
    weight: number;
    height: number;
    email: string;
    password: string;
}

type SignUp = {
    default: boolean;
    weight: boolean;
    last: boolean;
}

export const Context = createContext({});

export default function ContextProvider({ children } : Props){

    const [openMenu, setOpenMenu] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState({} as UserData);
    const [modal, setModal] = useState({} as SignUp);
    return (
    <Context.Provider value={{
        openMenu,
        setOpenMenu,
        error,
        setError,
        user, 
        setUser,
        modal, 
        setModal
    }}>
        { children }
    </Context.Provider>
    );
};