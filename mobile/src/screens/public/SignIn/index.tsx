import React, { useState } from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Modal from '../../../components/Modal';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import Background from '../../../assets/background-secondary.jpeg';

import { style } from './style';
import { colors } from '../../../style/colors';

const SignIn: React.FC = () => {

  const [security, setSecurity] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={Background}
        style={style.container}
      >
        <Modal height={440}>
          <Text style={style.title}>Login</Text>
          <View style={style.form}>
            <View style={{ alignSelf: 'center' }}>
              <Text style={style.subtitle}>E-mail</Text>
              <Input width={300} />
            </View>

            <View style={{ alignSelf: 'center' }}>
              <Text style={style.subtitle}>Senha</Text>
              <Input width={300} secureTextEntry={security}>
                <TouchableOpacity onPress={() => setSecurity(!security)}>
                  {
                    security
                      ?
                      <Ionicons name="eye-off" size={24} color={colors.gray} />
                      :
                      <Ionicons name="eye" size={24} color={colors.gray} />
                  }
                </TouchableOpacity>
              </Input>
            </View>
          </View>

          <View style={style.footer}>
            <Button
              title="Acessar"
              width={300}
              height={50}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[style.description, { color: colors.white }]}>Ainda não possui uma conta?</Text>
              <TouchableOpacity style={{ marginLeft: 5 }}>
                <Text style={[style.description, { color: colors.blue_oil }]}>Criar Conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignIn;

