import React from 'react';
import {
  SafeAreaView,
  
} from 'react-native';

import Background from '../../../components/Background';
import Header from '../../../components/Header';

const Dashboard: React.FC = () => {
  return(
    <SafeAreaView style={{ flex: 1}}>
      <Background>
        <Header />
      </Background>
    </SafeAreaView>
  );
};

export default Dashboard;