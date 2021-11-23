import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useMenu, useError } from '../../../hooks/app';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Error from '../../../components/Error';
import Footer from '../../../components/Footer';

import { style } from './style';
import { fonts } from '../../../style/fonts';

type PropsDay = {
  day_number: number;
  day_week: string;
}
const DayComponent: React.FC<PropsDay> = ({ day_number, day_week }) => {
  const date = new Date();
  return (
    <TouchableOpacity style={style.day}>
      <Text style={{
        fontFamily: fonts.roboto_400,
        fontSize: 24,
        color: 'white'
      }}>
        {day_number}
      </Text>
      <Text style={{
        fontFamily: fonts.roboto_400,
        fontSize: 16,
        color: 'white'
      }}>{day_week}</Text>
    </TouchableOpacity>
  );
}

const TimeComponent: React.FC = () => {
  return(
    <View>
      
    </View>
  );
};
const Schedule: React.FC = () => {

  const navigation = useNavigation();
  const { openMenu } = useMenu();
  const { error } = useError();

  function addCalendar(){
    navigation.navigate('RegisterSchedule');
  }

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

  const date = new Date();
  const [indexMonth, setIndexMonth] = useState(date.getMonth());
  const [month, setMonth] = useState(handleMonth(indexMonth));
  const [year, setYear] = useState(date.getFullYear());
  const [quantityDays, setQuantityDays] = useState(getQuantityDays(year, indexMonth));

  function getQuantityDays(year: number, month: number){
    const quantity = new Date(year, month + 1, 0);
    return quantity.getDate();
  }
  function beforeMonth() {
    if (indexMonth === 0) {
      setIndexMonth(indexMonth + 11);
      setMonth(handleMonth(indexMonth));
      setYear(year - 1)
      setQuantityDays(getQuantityDays(year, indexMonth));
    }else {
      setIndexMonth(indexMonth - 1);
      setMonth(handleMonth(indexMonth));
      setQuantityDays(getQuantityDays(year, indexMonth));
    }
  }
  function nextMonth() {
    if (indexMonth === 11) {
      setIndexMonth(indexMonth - 11);
      setMonth(handleMonth(indexMonth));
      setYear(year + 1)
      setQuantityDays(getQuantityDays(year, indexMonth));
    } else {
      setIndexMonth(indexMonth + 1);
      setMonth(handleMonth(indexMonth));
      setQuantityDays(getQuantityDays(year, indexMonth));
    }
  }

  const getComponentDay = () => {
    var genetateComponent = [];

    for(let i=0; i<quantityDays; i++){
      console.log('Contador: ' + i );
      genetateComponent.push(
        <View key={i}>
          <DayComponent day_number={i} day_week={'Ter'}/>
        </View>
      );
    }

    return genetateComponent;
  }

  return (
    <Background>
      <Header />
      <View style={style.calendar}>
        <View style={style.headerCalendar}>
          <TouchableOpacity onPress={beforeMonth}>
            <Feather name="arrow-left" size={30} style={style.icon} />
          </TouchableOpacity>
          <Text style={style.title}>{month}</Text>
          <TouchableOpacity onPress={nextMonth}>
            <Feather name="arrow-right" size={30} style={style.icon} />
          </TouchableOpacity>
        </View>
          <ScrollView 
            style={{ flex: 1 }} 
            horizontal
          >
            <View style={{
              height: '100%',
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
              <DayComponent day_number={57} day_week={'Ter'}/>
            </View>
          </ScrollView>
        <View style={style.footerCalendar}>
          <TouchableOpacity onPress={addCalendar}>
            <AntDesign name="pluscircle" size={20} color="white" />
          </TouchableOpacity>
          <Text style={style.textIcon}>Adicionar à agenda</Text>
        </View>

      </View>
      {
        openMenu && <Menu />
      }
      {
        error && <Error noFunctionality />
      }
      <Footer />
    </Background>
  );
}

export default Schedule;