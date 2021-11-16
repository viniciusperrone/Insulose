import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { style } from './style';

const Alarm: React.FC = () => {
  return (
    <Background>
      <Header />
      <View style={style.container}>
        <Text style={style.title}>Alarme</Text>
        <Text style={style.text}>
          Você naõ possui alarme. Clique em (+) para{'\n'}
          adicionar seu primeiro alarme{'\n'}
        </Text>
        <TouchableOpacity style={style.plusButton}>
          <Feather name="plus" size={50} color="black" />
        </TouchableOpacity>
      </View>
      <Footer />
    </Background>
  );
};

export default Alarm;