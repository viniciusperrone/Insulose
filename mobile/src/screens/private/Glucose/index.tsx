import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { style } from './style';

const Glucose: React.FC = () => {

  const [add, setAdd] = useState(false);

  return (
    <Background>
      <Header />
      <View style={style.container}>
        <Text style={style.title}>Glicemia</Text>
        <Text style={style.textRegister}>registro: 0</Text>
        <Text style={style.text}>
          Você naõ possui registros. Clique em (+) para{'\n'}
          adicionar sua primeira medição{'\n'}
        </Text>
        <View style={style.plusButton}>
          <Feather name="plus" size={50} color="black" />
        </View>

      </View>
      <Footer />
    </Background>
  );
};

export default Glucose;