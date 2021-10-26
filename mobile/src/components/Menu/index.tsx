import React, { useState } from 'react';
import {
  Animated,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Fontisto,
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  AntDesign,
  FontAwesome5,
  Ionicons
} from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useMenu } from '../../hooks/app';
import { useAuth } from '../../hooks/auth';

import { style } from './style';
import { colors } from '../../style/colors';

const Menu: React.FC = () => {
  const navigation = useNavigation();
  const [width, setWidth] = useState<any>(new Animated.Value(0));
  const { user } = useAuth();
  Animated.timing(
    width,
    {
      toValue: 285,
      duration: 600,
      useNativeDriver: false
    }
  ).start();

  function handleAge(day: number, month: number, year: number) {
    var d = new Date,
      ano_atual = d.getFullYear(),
      mes_atual = d.getMonth() + 1,
      dia_atual = d.getDate(),

      year = +year,
      month = +month,
      day = +day,

      age = ano_atual - year;
    if (mes_atual < month || mes_atual == month && dia_atual < day) {
      age--;
    }

    return age < 0 ? 0 : age;
  }

  const month = Number(user.birth_date.slice(5, 7));
  const day = Number(user.birth_date.slice(8, 10));
  const year = Number(user.birth_date.slice(0, 4));

  const age = handleAge(day, month, year);

  function handleSettings(){
    navigation.navigate('Settings');
  }
  const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);
  return (
    <Animated.View style={[style.container, { opacity: 1, width: width }]}>
      <AnimatedGradient
        colors={['#02005F', '#02007A']}
        style={style.header}
      >
        <Text style={style.title}>{`${user.first_name} ${user.last_name}`}</Text>
        <Text style={style.subtitle}>{age} anos</Text>
      </AnimatedGradient>
      {/* <View style={style.content}> */}
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <TouchableOpacity style={style.button}>
          <MaterialCommunityIcons name="note" size={26} color={colors.blue_oil} style={style.icon} />
          <Text style={style.text}>Definições</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Entypo name="export" size={26} color={colors.blue_oil} style={style.icon} />
          <Text style={style.text}>Exportar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={handleSettings}>
          <Ionicons name="settings-sharp" size={24} color={colors.blue_oil} style={style.icon} />
          <Text style={style.text}>Configurações</Text>
        </TouchableOpacity>

        <View style={style.line} />

        <TouchableOpacity style={style.button}>
          <Fontisto name="blood-drop" size={26} color={colors.blue_oil} style={style.icon} />
          <Text style={style.text}>Glicemia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Octicons name="bell" size={26} color={colors.blue_oil} style={style.icon} />
          <Text style={style.text}>Alarme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <MaterialCommunityIcons name="pill" size={26} color={colors.blue_oil} style={style.icon} />
          <Text style={style.text}>Remédios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <AntDesign name="calendar" size={26} color={colors.blue_oil} style={style.icon} />
          <Text style={style.text}>Consultas</Text>
        </TouchableOpacity>

        <View style={style.line} />

        <TouchableOpacity style={style.button}>
          <MaterialIcons name="show-chart" size={26} color={colors.blue_oil} style={style.icon} />
          <Text style={style.text}>Níveis de A1C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <MaterialIcons name="group" size={26} color={colors.blue_oil} style={style.icon} />
          <Text style={style.text}>Contacte-nos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <MaterialCommunityIcons name="beaker-plus" size={26} color={colors.blue_oil} style={style.icon} />
          <Text style={style.text}>Valores de glicose</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <FontAwesome5 name="hand-sparkles" size={26} color={colors.blue_oil} style={style.icon} />
          <Text style={style.text}>Dicas</Text>
        </TouchableOpacity>

      </View>

      <AnimatedGradient
        colors={['#02005F', '#02007A']}
        style={style.footer}
      >
        <Text style={style.description}>Termos e Políticas</Text>
        <Text style={style.description}>de Privacidade</Text>
      </AnimatedGradient>
      {/* </View> */}
    </Animated.View>
  );
};

export default Menu;