import React from 'react';
import { View, Text } from 'react-native';

import { useMenu, useError} from '../../../hooks/app';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Error from '../../../components/Error';
import Footer from '../../../components/Footer';

import { style } from './style';

const NextGlucoses: React.FC = () => {
    const { openMenu } = useMenu();
    const { error } = useError();
    return(
        <Background>
            <Header />
            <View style={style.container}>
                <Text style={style.title}>Glicemia</Text>
            </View>
            {
                openMenu && <Menu /> 
            }
            {
                error && <Error noFunctionality />
            }
            <Footer />
        </Background>
    );
}

export default NextGlucoses;