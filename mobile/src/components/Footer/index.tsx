import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  Fontisto,
  Octicons,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useMenu } from '../../hooks/app';

import { style } from './style';

const Footer: React.FC = () => {
  const navigation = useNavigation();
  const { setOpenMenu} = useMenu();

  function handleGlucose(){
    setOpenMenu(false);
    navigation.navigate('Glucose');
  }
  function handleMedicine(){
    setOpenMenu(false);
    navigation.navigate('Medicine');
  }
  function handleSchedule(){
    setOpenMenu(false);
    navigation.navigate('Schedule');
  }
  function handleAlarm(){
    setOpenMenu(false);
    navigation.navigate('Alarm');
  }
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button} onPress={handleGlucose}>
        <Fontisto name="blood-drop" size={26} style={style.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={handleAlarm}>
        <Octicons name="bell" size={26} style={style.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={handleMedicine}>
        <MaterialCommunityIcons name="pill" size={26} style={style.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={handleSchedule}>
        <AntDesign name="calendar" size={26} style={style.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;