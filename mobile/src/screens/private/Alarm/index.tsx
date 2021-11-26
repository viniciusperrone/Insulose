import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

import { useMenu, useError } from '../../../hooks/app';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Error from '../../../components/Error';
import Footer from '../../../components/Footer';

import { style } from './style';
import { colors } from '../../../style/colors';
import { LinearGradient } from 'expo-linear-gradient';

interface AlarmProps {
  horary: string;
  day_week: String[];
}

interface HoraryProps {
  time: string;
}

const TimeAlarm: React.FC<HoraryProps> = ({ time }) => {

  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity style={style.buttonAlarm} onPress={() => setSelected(!selected)}>
      {
        selected && <View style={{ width: 80, height: 2, backgroundColor: colors.black }}/>
      }
      <Text style={style.textHorary}>{time}</Text>
      {
        selected && <View style={{ width: 80, height: 2, backgroundColor: colors.black }}/>
      }
    </TouchableOpacity>
  );
};
const CardAlarm: React.FC<AlarmProps> = ({ horary, day_week }) => {
  const [toggle, setToggle] = useState(true);
  const [extend, setExtend] = useState(false);
  const week = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];


  return (
    <View style={[style.containerAlarm, { height: extend ? 230 : 120 }]}>
      <View style={[style.header, { height: extend ? '30%' : '60%' }]}>
        <Text style={style.titleAlarm}>{horary}</Text>
        <TouchableOpacity onPress={() => setToggle(!toggle)}>
          {
            toggle
              ? <FontAwesome name="toggle-off" size={34} color={colors.blue_oil} />
              : <FontAwesome name="toggle-on" size={34} color={colors.blue_oil} />
          }
        </TouchableOpacity>
      </View>
      {
        !extend
          ?
          <View style={style.footerAlarm}>
            <View style={{ flexDirection: 'row' }}>
              {
                day_week.map(day => <Text style={[style.textAlarm, { marginLeft: 15 }]}>{day} </Text>)
              }
            </View>
            <TouchableOpacity onPress={() => setExtend(true)}>
              <MaterialIcons name="keyboard-arrow-down" size={34} color="black" />
            </TouchableOpacity>
          </View>
          :
          <View style={[style.footerAlarm, { flexDirection: 'column' }]}>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              {
                week.map(day =>
                  <TouchableOpacity style={style.day}>
                    <Text style={[style.textAlarm, { color: colors.black }]}>{day}</Text>
                  </TouchableOpacity>
                )
              }
            </View>

            <View style={{ flex: 1, alignItems: 'flex-start' }}>

              <TouchableOpacity style={{ flexDirection: 'row', marginLeft: -10, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome name="bookmark" size={24} color="black" />
                <Text style={[style.textAlarm, { color: colors.black, marginLeft: 8 }]}>Marcador</Text>
              </TouchableOpacity>

              <View style={{ width: '100%', flexDirection: 'row', marginLeft: -10, marginTop: 10, justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Ionicons name="ios-trash-sharp" size={24} color="black" />
                  <Text style={[style.textAlarm, { color: colors.black, marginLeft: 8 }]}>Excluir</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setExtend(false)}>
                  <MaterialIcons name="keyboard-arrow-up" size={34} color="black" />
                </TouchableOpacity>
              </View>

            </View>

          </View>

      }

    </View>
  );
};

const Alarm: React.FC = () => {
  const { openMenu } = useMenu();
  const { error } = useError();
  const [add, setAdd] = useState(false);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  let hours = [];
  let minutes = [];

  for (let i = 0; i < 24; i++) {
    if (i < 10) {
      hours.push('0' + i);
    }
    else {
      hours.push(i);
    }
  }

  for (let i = 0; i < 60; i++) {
    if (i < 10) {
      minutes.push('0' + i);
    }
    else {
      minutes.push(i);
    }
  }

  return (
    <Background>
      <Header />
      <View style={style.container}>
        <Text style={style.title}>Alarme</Text>
        <ScrollView style={{ flex: 1 }}>
          <CardAlarm horary={'08:40'} day_week={['seg', 'ter', 'qua']} />
          {/* <Text style={style.text}>
          Você naõ possui alarme. Clique em (+) para{'\n'}
          adicionar seu primeiro alarme{'\n'}
        </Text> */}
        </ScrollView>
        <TouchableOpacity style={style.plusButton} onPress={() => setAdd(!add)}>
          <Feather name="plus" size={50} color="black" />
        </TouchableOpacity>
      </View>

      {
        add && (
          <Modal transparent visible={add}>
            <View style={style.backgroundModal}>
              <View style={style.containerModal}>
                <LinearGradient
                  colors={['#02005F', '#02007A']}
                  style={style.headerModal}
                >
                  <Text style={style.textModal}>ALARME</Text>
                </LinearGradient>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', height: '20%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Text style={[style.textAlarm, { color: 'black' }]}>Hora</Text>
                    <Text style={[style.textAlarm, { color: 'black' }]}>Minuto</Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                      {
                        hours.map(hour => (
                          <TimeAlarm time={String(hour)} />
                        ))
                      }
                    </ScrollView>
                    <Text style={[style.textHorary, { alignSelf: 'center' }]}>:</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                      {
                        minutes.map(minute => (
                          <TimeAlarm time={String(minute)} />
                        ))
                      }
                    </ScrollView>
                  </View>
                </View>
                <LinearGradient
                  colors={['#02005F', '#02007A']}
                  style={style.footerModal}
                >
                  <TouchableOpacity onPress={() => setAdd(false)}>
                    <Text style={style.textModal}>CANCELAR</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={style.textModal}>SALVAR</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </Modal>
        )
      }

      {
        openMenu && <Menu />
      }
      {
        error && <Menu />
      }
      <Footer />
    </Background>
  );
};

export default Alarm;