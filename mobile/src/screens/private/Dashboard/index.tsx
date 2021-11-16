import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { useAuth } from '../../../hooks/auth';
import { useMenu, useError } from '../../../hooks/app';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Error from '../../../components/Error';

import { style } from './style';

const Dashboard: React.FC = () => {
  const { openMenu } = useMenu();
  const { user } = useAuth();
  const { error } = useError();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        <Header />
        <Text style={style.title}>Olá, {user.first_name}</Text>
        <Text style={style.subtitle}>seja bem-vindo</Text>
        <View style={style.content}>

        </View>
        <View style={style.footer}>
          <TouchableOpacity style={style.button}>
            <Text style={[style.text, { marginLeft: 10 }]}>atividade física</Text>
            <View />
          </TouchableOpacity>
          <TouchableOpacity style={style.button}>
            <Text style={[style.text, { marginLeft: 10 }]}>refeições</Text>
            <View />
          </TouchableOpacity>
        </View>
      </Background>
      {
        openMenu && <Menu />
      }

      {
        error && <Error noFunctionality />
      }
    </SafeAreaView>
  );
};

export default Dashboard;