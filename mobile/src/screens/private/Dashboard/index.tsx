import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  FontAwesome5,
  Fontisto,
  Octicons,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';

import { useAuth } from '../../../hooks/auth';
import { useMenu, useError } from '../../../hooks/app';

import Breakfast from '../../../assets/breakfast.png';

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
          <TouchableOpacity style={style.card}>
            <Text style={style.titleCard}>glicemia</Text>
            <Fontisto name="blood-drop" size={60} style={style.iconCard} />
          </TouchableOpacity>

          <TouchableOpacity style={style.card}>
            <Text style={style.titleCard}>alarme</Text>
            <Octicons name="bell" size={60} style={style.iconCard} />
          </TouchableOpacity>

          <TouchableOpacity style={style.card}>
            <Text style={style.titleCard}>remédios</Text>
            <MaterialCommunityIcons name="pill" size={60} style={style.iconCard} />
          </TouchableOpacity>

          <TouchableOpacity style={style.card}>
            <Text style={style.titleCard}>consultas</Text>
            <AntDesign name="calendar" size={60} style={style.iconCard} />
          </TouchableOpacity>
        </View>
        <View style={style.footer}>
          <TouchableOpacity style={style.button}>
            <Text style={[style.text, { marginLeft: 10 }]}>atividade física</Text>
            <FontAwesome5 name="dumbbell" size={24} color="white" style={{ marginRight: -70 }} />
            <View />
          </TouchableOpacity>
          <TouchableOpacity style={style.button}>
            <Text style={[style.text, { marginLeft: 10 }]}>refeições</Text>
            <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="white" style={{ marginRight: -120 }} />
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