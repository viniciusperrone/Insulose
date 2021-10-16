import React, { createContext, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

export const Context = createContext({});

export default function ContextProvider({ children } : Props){

    const [openDashboard, setOpenDashboard] = useState(false);

    return (
    <Context.Provider value={{
        openDashboard,
        setOpenDashboard,
    }}>
        { children }
    </Context.Provider>
    );
};