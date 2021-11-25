import React, { useState } from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/core';
import { useAuth } from '../../../hooks/auth';
import { useError } from '../../../hooks/app';

import Modal from '../../../components/Modal';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';

import Background from '../../../assets/background-secondary.jpeg';

import { style } from './style';
import { colors } from '../../../style/colors';

import api from '../../../server/api';

type UserData = {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {

  const { user, setUser } = useAuth();
  const { error, setError } = useError();
  const [userLogin, setUserLogin] = useState({} as UserData);
  const [security, setSecurity] = useState(true);

  const navigation = useNavigation();

  async function handleSignIn() {

    if(!userLogin.email || !userLogin.password){
      setError(true);
      return;
    }
    if (userLogin.email.length < 5 || userLogin.password.length < 6) {
      setError(true);
      return;
    }
    const response = await api.post('/sessions', {
      email: userLogin.email,
      password: userLogin.password
    });

    if (response) {
      setUser({
        id: response.data.session.id,
        first_name: response.data.session.first_name,
        last_name: response.data.session.last_name,
        birth_date: response.data.session.birth_date,
        sex_gender: response.data.session.sex_gender,
        weight: response.data.session.weight,
        height: response.data.session.height,
        email: response.data.session.email,
        password: response.data.session.password
      });
      
      const status = await response.status;
      console.log(status);

      if(status !== 200){
        console.log('Deu Error');
      }
      api.defaults.headers.authorization = `Bearer ${response.data.token}`;      
      setUserLogin({
        email: '',
        password: ''
      });
      return navigation.navigate('Dashboard');
    }

    setError(true);
    return;
  }
  function handleSignUp() {
    navigation.navigate('SignUp');
  }
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
              <Input
                width={300}
                defaultValue={userLogin.email}
                onChangeText={e => setUserLogin({
                  email: e,
                  password: userLogin.password
                })}
              />
            </View>

            <View style={{ alignSelf: 'center' }}>
              <Text style={style.subtitle}>Senha</Text>
              <Input width={300}
                secureTextEntry={security}
                defaultValue={userLogin.password}
                onChangeText={e => setUserLogin({
                  email: userLogin.email,
                  password: e
                })}
              >
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
              onPress={handleSignIn}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[style.description, { color: colors.white }]}>Ainda não possui uma conta?</Text>
              <TouchableOpacity style={{ marginLeft: 5 }} onPress={handleSignUp}>
                <Text style={[style.description, { color: colors.blue_oil }]}>Criar Conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        { error && <Error enter />}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignIn;

