import React, { useState } from 'react';
import {
  Animated,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import { useMenu } from '../../hooks/app';

import { style } from './style';

const Menu: React.FC = () => {
  const [width, setWidth] = useState<any>(new Animated.Value(0));
  const { openMenu, setOpenMenu } = useMenu();
  Animated.timing(
    width,
    {
      toValue: 250,
      duration: 600
    }
  ).start()
  return (
    <Animated.View style={[style.container, { opacity: openMenu ? 1 : 0, width: width }]}>
      <LinearGradient
        colors={['#02005F', '#02007A']}
        style={style.header}
      >

      </LinearGradient>
      <View style={style.content}>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>Definições</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>Exportar</Text>
        </TouchableOpacity>

        <View style={style.line}/>

        <TouchableOpacity style={style.button}>
          <Text style={style.text}>Glicemia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>Alarme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>Remédios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>Consultas</Text>
        </TouchableOpacity>

        <View style={style.line}/>

        <TouchableOpacity style={style.button}>
          <Text style={style.text}>Níveis de A1C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>Contacte-nos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>Valores de glicose</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>Dicas</Text>
        </TouchableOpacity>

        <LinearGradient 
          colors={['#02005F', '#02007A']}
          style={style.footer}
        >
          <Text style={style.description}>Termos e Políticas</Text>
          <Text style={style.description}>de Privacidade</Text>
        </LinearGradient>
      </View>
    </Animated.View>
  );
};

export default Menu;