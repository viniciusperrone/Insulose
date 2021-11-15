import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Touchable } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { style } from './style';

const Glucose: React.FC = () => {

  const [add, setAdd] = useState(false);

  function getDate(date: String) {
    const day = date.slice(8, 10);
    const moth = date.slice(4, 7).toLowerCase();
    const year = date.slice(11, 15);
    const hours = date.slice(18, 21);

    let time_course = date.slice(16, 18);
    let handleHours = '';
    let handleTime = '';

    if (Number(time_course) >= 0 && Number(time_course) <= 12) {
      handleTime = 'AM';
      time_course = String(Number(Number(time_course) - 12));
      if (Number(time_course) < 10) {
        time_course = '0' + time_course;
      }
    }
    if (Number(time_course) >= 13 && Number(time_course) <= 23) {
      handleTime = 'PM';
      time_course = time_course;
    }
    return `${day} ${moth}, ${year} - ${time_course}${hours} ${handleTime}`;
  }

  const date = getDate(Date());

  return (
    <Background>
      <Header />
      {
        add
          ?
          <View style={style.container}>
            <Text style={style.title}>Glicemia</Text>
            <Text style={style.titleDate}>Data</Text>
            <Text style={style.textDate}>{date}</Text>
            <View>
              <Text style={style.textContent}>
                concentração de açucar
              </Text>
              <Text style={style.textContent}>
                (mg/dL)
              </Text>
            </View>
            <TextInput
              style={style.input}
              keyboardType={'decimal-pad'}
            />
            <Text style={style.textFunny}>Meu humor</Text>
            <View style={style.containerComment}>
              <Text style={style.textComment}>Adicionar comentário:</Text>
              <TextInput 
                style={style.inputComment}
              />
            </View>
            <View style={style.footer}>
              <TouchableOpacity style={[style.button, { marginLeft: 25}]} onPress={() => setAdd(false)}>
                <Text style={style.textButton}>cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[style.button, { marginRight: 25}]}>
                <Text style={style.textButton}>adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <View style={style.container}>
            <Text style={style.title}>Glicemia</Text>
            <Text style={style.textRegister}>registro: 0</Text>
            <Text style={style.text}>
              Você naõ possui registros. Clique em (+) para{'\n'}
              adicionar sua primeira medição{'\n'}
            </Text>
            <TouchableOpacity style={style.plusButton} onPress={() => setAdd(true)}>
              <Feather name="plus" size={50} color="black" />
            </TouchableOpacity>

          </View>
      }
      <Footer />
    </Background>
  );
};

export default Glucose;