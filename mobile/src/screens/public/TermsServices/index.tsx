import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Background from '../../../components/Background';
import Button from '../../../components/Button';
import { style } from './style';

const TermsServices: React.FC = () => {
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }
    return (
        <Background>
            <Text style={style.title}>Termos e Condições</Text>
            <View style={style.container}>
                <ScrollView style={{ marginBottom: 30 }}>
                    <Text style={style.text}>
                        Produzimos este app com o objetivo de auxiliar pessoas regularmente para acompanhar a glicose no sangue.
                        O aplicativo funciona como mediador, o usuário fornece seus dados físicos e alimentícios, e comparam benefícios
                        malefícios a sua saúde. Assim, facilita o acesso mais prático e rápido sobre sua estadia e bem-estar.
                        {'\n'}
                        {'\n'}
                        Para utilizar-lo, precisaremos de suas informações pessoais, como: nome, email, idade, data de nascimento, peso, altura, seu email e senha.
                        Todas suas informações são guardadas com segurança e não ocorrerá risco de vazamento.
                        {'\n'}
                        {'\n'}
                        O uso de app depende de total conhecimento do usuário na inserção de dados e do funcionamento do sistema.
                        O próximo é concordar com os Termos e Condições do aplicativo Insulose.
                        {'\n'}
                        {'\n'}
                    </Text>
                    
                    <Button
                        title={'voltar'}
                        width={300}
                        height={50} 
                        onPress={handleGoBack}
                    />
                </ScrollView>
            </View>
        </Background>
    );
}

export default TermsServices;