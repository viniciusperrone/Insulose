import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useMenu } from '../../../hooks/app';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';

import { style } from './style';

const RegisterSchedule: React.FC = () => {
    const navigation = useNavigation();
    const { openMenu } = useMenu();

    return (
        <Background>
            <Header />
            <View style={style.container}>
                <Text style={style.title}>Agenda</Text>
                <View style={style.calendar}></View>
                <View style={style.content}>

                    <View style={style.containerRegister}>
                        <Text style={style.text}>Evento</Text>
                        <TextInput
                            style={[style.input, { width: 205 }]}
                        />
                    </View>

                    <View style={style.containerRegister}>
                        <Text style={style.text}>Horário</Text>
                        <TextInput
                            style={[style.input, { width: 105 }]}
                        />
                    </View>

                    <View style={style.containerRegister}>
                        <Text style={style.text}>Especialidade</Text>
                        <TextInput
                            style={[style.input, { width: 205 }]}
                        />
                    </View>

                    <View style={style.containerRegister}>
                        <Text style={style.text}>Outro</Text>
                        <TextInput
                            style={[style.input, { width: 105 }]}
                        />
                    </View>

                    <View style={style.containerRegister}>
                        <Text style={style.text}>Profissional</Text>
                        <TextInput
                            style={[style.input, { width: 205 }]}
                        />
                    </View>

                    <View style={style.containerRegister}>
                        <Text style={style.text}>Outro</Text>
                        <TextInput
                            style={[style.input, { width: 105 }]}
                        />
                    </View>
                </View>
                <View style={style.footer}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.textButton}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer />
            {
                openMenu && <Menu />
            }
        </Background>
    );
};

export default RegisterSchedule;