import React, { createContext, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

export const Context = createContext({});

export default function ContextProvider({ children } : Props){

    const [openMenu, setOpenMenu] = useState(false);

    return (
    <Context.Provider value={{
        openMenu,
        setOpenMenu,
    }}>
        { children }
    </Context.Provider>
    );
};