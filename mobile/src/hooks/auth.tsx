import React, { useContext } from 'react';

import { Context } from "./index";

export function useAuth(){
    const context = useContext(Context);

    const { user, setUser } = context;

    return {
        user,
        setUser
    };
}