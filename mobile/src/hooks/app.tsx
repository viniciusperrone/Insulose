import React, { useContext } from 'react';

import { Context } from "./index";

export function useMenu(){
    const context = useContext(Context);

    const { openMenu, setOpenMenu, modal, setModal } = context;

    return {
        openMenu,
        setOpenMenu,
        modal,
        setModal
    };
}

export function useError() {
    const context = useContext(Context);

    const { error, setError } = context;

    return {
        error,
        setError
    };
}