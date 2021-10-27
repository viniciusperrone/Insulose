import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { style } from './style';

const Schedule: React.FC = () => {

  // const [] = 
  function handleMonth(month: number) {
    let mes = ''
    switch (month) {
      case 0:
        mes = 'Janeiro';
        break;
      case 1:
        mes = 'Fevereiro';
        break;
      case 2:
        mes = 'Março';
        break;
      case 3:
        mes = 'Abril';
        break;
      case 4:
        mes = 'Maio';
        break;
      case 5:
        mes = 'Junho';
        break;
      case 6:
        mes = 'Julho';
        break;
      case 7:
        mes = 'Agosto';
        break;
      case 8:
        mes = 'Setembro';
        break;
      case 9:
        mes = 'Outubro';
        break;
      case 10:
        mes = 'Novembro';
        break;
      case 11:
        mes = 'Dezembro';
        break;
    }
    return mes;
  }

  const month = new Date();
  const getMonth = handleMonth(month.getMonth());
  return (
    <Background>
      <Header />
      <View style={style.calendar}>
        <View style={style.headerCalendar}>
          <TouchableOpacity>
            <Feather name="arrow-left" size={30} style={style.icon} />
          </TouchableOpacity>
          <Text style={style.title}>{getMonth}</Text>
          <TouchableOpacity>
            <Feather name="arrow-right" size={30} style={style.icon} />
          </TouchableOpacity>
        </View>
        <View style={style.footerCalendar}>
          <TouchableOpacity>
            <AntDesign name="pluscircle" size={20} color="white" />
          </TouchableOpacity>
          <Text style={style.textIcon}>Adicionar à agenda</Text>
        </View>

      </View>
      <Footer />
    </Background>
  );
}

export default Schedule;