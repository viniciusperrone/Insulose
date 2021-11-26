import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput,
    TouchableOpacity, 
    TouchableOpacityProps, 
    Modal 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import { useError, useMenu } from '../../../hooks/app';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Error from '../../../components/Error';
import Footer from '../../../components/Footer';

import { style } from './style';

interface SnacksProps extends TouchableOpacityProps {
    title: string;
};

const CardSnack: React.FC<SnacksProps> = ({ title, ...rest }) => {
    return(
        <TouchableOpacity style={style.cardSnack} {...rest}>
            <Text style={style.textSnack}>{title}</Text>
        </TouchableOpacity>
    );
};

const Snacks: React.FC = () => {
    const { openMenu } = useMenu();
    const { error } = useError();
    const [add, setAdd] = useState(false);
    const [portions, setPortions] = useState(0);

    const generateFields = (quantity: number) => {
        var genetateComponent = [];

        for (let i = 1; i <= quantity; i++) {
            <View style={style.containerInput}>
                <Text>Alimento</Text>
                <TextInput
                    style={style.input}
                />
            </View>    
        }
    }
    return (
        <Background>
            <Header />
            <View style={style.container}>
                <Text style={style.title}>Cardápio</Text>
                {/* <CardSnack title={'Almoço 1'}/> */}
            </View>
            <TouchableOpacity style={style.plusButton} onPress={() => setAdd(true)}>
                <Feather name="plus" size={50} color="black" />
            </TouchableOpacity>
            {
                add && 
                    <Modal transparent visible={add}>
                        <View style={style.backgroundModal}>
                            <View style={style.containerModal}>
                                <LinearGradient
                                    colors={['#02005F', '#02007A']}
                                    style={style.header}
                                >
                                    <Text style={style.textModal}>Adicionar alimento</Text>
                                </LinearGradient>
                                <View style={style.content}>
                                    <View style={style.containerInput}>
                                        <Text style={style.titleModal}>Porções</Text>
                                        <TextInput 
                                            style={[style.input]}
                                            keyboardType={'decimal-pad'}
                                            value={String(portions)}
                                            onChangeText={quatinty => setPortions(Number(quatinty))}
                                        />
                                    </View>
                                    {
                                        generateFields(portions)
                                    }
                                </View>
                                <LinearGradient
                                    colors={['#02005F', '#02007A']}
                                    style={style.footer}
                                >
                                    <TouchableOpacity style={style.buttonRegister} onPress={() => setAdd(false)}>
                                        <Text style={style.textModal}>Cancelar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={style.buttonRegister}>
                                        <Text style={style.textModal}>Salvar</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    </Modal>
            }
            {
                openMenu && <Menu />
            }
            {
                error && <Error noFunctionality />
            }
            <Footer />
        </Background>
    )
};

export default Snacks;