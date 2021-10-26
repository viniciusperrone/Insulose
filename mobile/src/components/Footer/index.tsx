import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  Fontisto,
  Octicons,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';


import { style } from './style';

const Footer: React.FC = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}>
        <Fontisto name="blood-drop" size={26} style={style.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.button}>
        <Octicons name="bell" size={26} style={style.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.button}>
        <MaterialCommunityIcons name="pill" size={26} style={style.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.button}>
        <AntDesign name="calendar" size={26} style={style.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;