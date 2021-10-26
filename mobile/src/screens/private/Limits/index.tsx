import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import HeaderApp from '../../../components/HeaderApp';
import Footer from '../../../components/Footer';

import { style } from './style';

const Units: React.FC = () => {
  return(
    <View style={style.container}>
      <HeaderApp title="Limites de glicemia" />
      <View style={style.content}>
        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Hiperglicemia</Text>
          <Text style={style.subtitle}>200 mg/dL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Glicemia alta</Text>
          <Text style={style.subtitle}>145 mg/dL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Glicemia desejada</Text>
          <Text style={style.subtitle}>100 mg/dL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Glicemia baixa</Text>
          <Text style={style.subtitle}>80 mg/dL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Hipoglicemia</Text>
          <Text style={style.subtitle}>50 mg/dL</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

export default Units;