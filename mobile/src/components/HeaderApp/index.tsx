import React from 'react';
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { style } from './style';

interface HeaderProps {
  title: string;
}

const HeaderApp: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  
  function handleGoBack(){
    navigation.goBack();
  }
  return (
    <LinearGradient
      colors={['#02005F', '#02007A']}
      style={style.container}
    >
      <AntDesign name="arrowleft" size={28} style={style.icon} onPress={handleGoBack}/>
      <Text style={style.title}>{title}</Text>
    </LinearGradient>
  );
};

export default HeaderApp;