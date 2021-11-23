import React from 'react';
import {} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useMenu } from '../../../hooks/app';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';

const RegisterSchedule: React.FC = () => {
    const navigation = useNavigation();
    const { openMenu } = useMenu();

    return(
        <Background>
            <Header />
            <Footer />
            {
                openMenu && <Menu />
            }
        </Background>
    );
};

export default RegisterSchedule;