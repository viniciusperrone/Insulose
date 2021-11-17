import React from 'react';
import { } from 'react-native';

import { useError, useMenu } from '../../../hooks/app';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Error from '../../../components/Error';
import Footer from '../../../components/Footer';

const Exercise: React.FC = () => {
    const { openMenu } = useMenu();
    const { error } = useError();
    return(
        <Background>
            <Header />
            {
                openMenu && <Menu />
            }
            {
                error && <Error />
            }
            <Footer />
        </Background>
    )
};

export default Exercise;