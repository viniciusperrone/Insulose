import React from 'react';
import { Text } from 'react-native';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Glucose: React.FC = () => {
  return(
    <Background>
      <Header />
        <Text>Glicose</Text>
      <Footer />
    </Background>
  );
};

export default Glucose;