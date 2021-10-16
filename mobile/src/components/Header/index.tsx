import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useMenu } from '../../hooks/app';

import Logo from '../../assets/icone.png';

import { style } from './style';

const Header: React.FC = () => {

  const { openMenu, setOpenMenu } = useMenu();
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => setOpenMenu(!openMenu)}>
        <AntDesign name="bars" size={35} style={style.icon} />
      </TouchableOpacity>
      <Image source={Logo} style={style.image} />
    </View>
  );
};

export default Header;