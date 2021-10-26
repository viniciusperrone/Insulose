import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import HeaderApp from '../../../components/HeaderApp';
import Footer from '../../../components/Footer';

import { style } from './style';

const Units: React.FC = () => {
  return(
    <View style={style.container}>
      <HeaderApp title="Unidades" />
      <View style={style.content}>
        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Unidades de medida</Text>
          <Text style={style.subtitle}>Métrico (kg, g, ml, cm)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Unidade de glicemia</Text>
          <Text style={style.subtitle}>mg/ dL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Unidade de medida das cetonas</Text>
          <Text style={style.subtitle}>mmol/L</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Unidade de medida do colesterol</Text>
          <Text style={style.subtitle}>mmol/L</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Unidade Hb1Ac</Text>
          <Text style={style.subtitle}>DCCT (%)</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

export default Units;