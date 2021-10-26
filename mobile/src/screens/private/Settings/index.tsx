import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import HeaderApp from '../../../components/HeaderApp';
import Footer from '../../../components/Footer';

import { style } from './style';

const Settings: React.FC = () => {
  const navigation = useNavigation();

  function handleUpdateDataUser() {
    navigation.navigate('UpdateUser');
  }
  function handleUnits() {
    navigation.navigate('Units');
  }
  function handleLimits() {
    navigation.navigate('Limits');
  }
  return (
    <View style={style.container}>
      <HeaderApp title="Configurações" />
      <View style={style.content}>
        <View style={style.containerButton}>
          <View>
            <Text style={style.title}>Dados pessoais</Text>
            <Text style={style.subtitle}>Nome, data de nascimento, sexo, peso, {'\n'}altura</Text>
          </View>
          <TouchableOpacity style={style.button} onPress={handleUpdateDataUser}>
            <Fontisto name="angle-right" size={24} color="black" style={style.icon}/>
          </TouchableOpacity>
        </View>

        <View style={style.containerButton}>
          <View>
            <Text style={style.title}>Unidades</Text>
            <Text style={style.subtitle}>Unidades de medida, unidades {'\n'}de glicemia, etc.</Text>
          </View>
          <TouchableOpacity style={style.button} onPress={handleUnits}>
            <Fontisto name="angle-right" size={24} color="black" style={style.icon}/>
          </TouchableOpacity>
        </View>

        <View style={style.containerButton}>
          <View>
            <Text style={style.title}>Limites de glicemia</Text>
            <Text style={style.subtitle}>Zona de alvo da glicemia</Text>
          </View>
          <TouchableOpacity style={style.button} onPress={handleLimits}>
            <Fontisto name="angle-right" size={24} color="black" style={style.icon}/>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default Settings;