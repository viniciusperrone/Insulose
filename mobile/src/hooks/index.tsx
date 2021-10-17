import React, { createContext, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

type UserData = {
    first_name: string;
    last_name: string;
    birth_date: Date;
    sex_gender: string;
    weight: number;
    height: number;
    password: string;
}

export const Context = createContext({});

export default function ContextProvider({ children } : Props){

    const [openMenu, setOpenMenu] = useState(false);
    const [user, setUser] = useState({} as UserData);

    return (
    <Context.Provider value={{
        openMenu,
        setOpenMenu,
        user, 
        setUser
    }}>
        { children }
    </Context.Provider>
    );
};