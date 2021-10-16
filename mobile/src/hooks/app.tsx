import React, { useContext } from 'react';

import { Context } from "./index";

export function useMenu(){
    const context = useContext(Context);

    const { openMenu, setOpenMenu } = context;

    return {
        openMenu,
        setOpenMenu
    };
}