import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Logo from '../../assets/icone.png';

import { style } from './style';

const Header: React.FC = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <AntDesign name="bars" size={35} style={style.icon} />
      </TouchableOpacity>
      <Image source={Logo} style={style.image} />
    </View>
  );
};

export default Header;