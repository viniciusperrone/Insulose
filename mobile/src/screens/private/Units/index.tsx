import React from 'react';
import { View } from 'react-native';

import HeaderApp from '../../../components/HeaderApp';
import Footer from '../../../components/Footer';

import { style } from './style';

const Units: React.FC = () => {
  return(
    <View style={style.container}>
      <HeaderApp title="Unidades" />
      <Footer />
    </View>
  );
};

export default Units;