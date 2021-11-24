import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useError, useMenu } from '../../../hooks/app';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Error from '../../../components/Error';
import Footer from '../../../components/Footer';

import { style } from './style';

const Snacks: React.FC = () => {
    const { openMenu } = useMenu();
    const { error } = useError();
    return (
        <Background>
            <Header />
            <View style={style.container}>
                <Text style={style.title}>Cardápio</Text>
            </View>
            <TouchableOpacity style={style.plusButton}>
                <Feather name="plus" size={50} color="black" />
            </TouchableOpacity>
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

export default Snacks;