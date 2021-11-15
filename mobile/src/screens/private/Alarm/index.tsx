import React from 'react';
import { View, Text } from 'react-native';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { style } from './style';

const Alarm: React.FC = () => {
  return(
    <Background>
      <Header />
      <View style={style.container}>
        <Text style={style.title}>Alarme</Text>
      </View>
      <Footer />
    </Background>
  );
};

export default Alarm;