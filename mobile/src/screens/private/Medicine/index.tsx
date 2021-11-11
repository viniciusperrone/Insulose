import React from 'react';
import { Text } from 'react-native';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Medicine: React.FC = () => {
  return(
    <Background>
      <Header />
      <Text>Remédios</Text>
      <Footer />
    </Background>
  );
}

export default Medicine;